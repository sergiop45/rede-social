import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize'
import { CreateUserDto, OptionalUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async create(user: OptionalUserDto): Promise<User> {

    user.password = await bcrypt.hash(user.password, 10);

    return this.userModel.create(user);
  }

  async findAll() {
    try {
      
      let users = await this.userModel.findAll();
      
      if(users){
        return users;
      } else {
        return {message: "usuarios não encontrados"}
      }

    } catch (error) {

      return {erro: error}

    }
    
  }

  async findOne(id: number) {

    let user = await this.userModel.findOne({where: { id: id } });
    if(user) {
      return user;
    } else {
      return {message: "usuario não encontrado!"}
    }

    
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    
    let user = await this.userModel.update(updateUserDto, { where: {id: id} });

    if(user){

      return user;

    } else {

      return {message: "erro: " + user}
    
    }

  }

  async remove(id: number) {

    let user = await this.userModel.findOne({where: { id: id }});

    if(user) {
      
      try{
        await user.destroy();
      }
      catch(error){
        return {message: "erro: "+ error}
      }

    } else {
      return {message: "usuario não encontrado!"}
    }
    
  }
}
