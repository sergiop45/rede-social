import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from './user/user.model';
import { Post } from './post/post.model';
import { Comment } from './comment/comment.model';

@Module({
  imports: [ 
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Banco4551',
      database: 'test',
      models: [User, Post, Comment],
      autoLoadModels: true,
      synchronize: true,
    }),
    UserModule, 
    PostModule, 
    CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
