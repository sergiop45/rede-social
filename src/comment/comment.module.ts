import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Comment } from './comment.model';
import { UserService } from 'src/user/user.service';
import { PostService } from 'src/post/post.service';
import { Post } from 'src/post/post.model';
import { User } from 'src/user/user.model';

@Module({
  imports: [SequelizeModule.forFeature([Comment, Post, User])],
  controllers: [CommentController],
  providers: [CommentService, UserService, PostService]
})
export class CommentModule {}
