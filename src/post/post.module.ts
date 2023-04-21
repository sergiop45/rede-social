import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { Post } from './post.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.model';

@Module({
  imports: [SequelizeModule.forFeature([Post, User])],
  controllers: [PostController],
  providers: [PostService, UserService]
})
export class PostModule {}
