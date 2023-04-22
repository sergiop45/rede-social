import { Injectable } from '@nestjs/common';
import { CreateCommentDto, OptionalCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './comment.model';
import { InjectModel } from '@nestjs/sequelize';
import { UserService } from 'src/user/user.service';
import { PostService } from 'src/post/post.service';

@Injectable()
export class CommentService {

  constructor(
    @InjectModel(Comment)
    private readonly commentModel: typeof Comment,
    private readonly userService: UserService,
    private readonly postService: PostService
  ){}

  async create(createCommentDto: OptionalCommentDto) {

    let userid = createCommentDto.userId;
    let user = await this.userService.findOne(+userid);

    let postid = createCommentDto.postId;
    let post = await this.postService.findOne(+postid);

    if("message" in user) {

      return {message: "usuario não existe"}

    } 
    if("message" in post) {

      return {message: "post não existe"}

    } 
    else {

      try{

        return this.commentModel.create(createCommentDto);
  
      }catch(error) {
  
        return {message: "erro -> " + error}
  
      }

   }

  }

  findAll() {
    
    try{

      return this.commentModel.findAll();

    } catch(error) {

      return {message: "erro ao buscar comentarios!"};

    }
    

  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
