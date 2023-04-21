import { Injectable } from '@nestjs/common';
import { CreatePostDto, OptionalPostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './post.model';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.model';

@Injectable()
export class PostService {

  constructor(
    @InjectModel(Post)
    private readonly postModel: typeof Post,
    private readonly userService: UserService,
  ) {}

  async create(createPostDto: OptionalPostDto) {

    let id = createPostDto.userId;
    
    let user = await this.userService.findOne(+id)

    if("message" in user) {

      return {message: "usuario não existe"}

    } 
    else {

      try{

        return this.postModel.create(createPostDto);
  
      }catch(error) {
  
        return {message: "erro -> " + error}
  
      }

   }

  }

  async findAll() {

    try {

      return this.postModel.findAll();

    } 
    catch(err) {

      return {message: "erro"+err}

    }

  }

  async findOne(id: number) {

    let post = await this.postModel.findOne({where: { id: id}});
    
    if(post) {
      return post;
    } else {
      return {message: "post não encontrado!"}
    }

  }

  async update(id: number, updatePostDto: UpdatePostDto) {

    let post = await this.postModel.update(updatePostDto, { where: {id: id} });

    if(post){

      return post;

    } else {

      return {message: "erro: " + post}
    
    }

  }

  async remove(id: number) {
   
    let post = await this.postModel.findOne({ where: {id: id} });

    if(post) {
      
      try{
        await post.destroy();
      }
      catch(error){
        return {message: "erro: "+ error}
      }

    } else {

      return {message: "usuario não encontrado!"}
      
    }
    
  }

}
