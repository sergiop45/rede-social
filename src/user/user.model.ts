import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Post } from 'src/post/post.model';

@Table
export class User extends Model {
  @Column
  username: string;

  @Column
  email: string;

  @Column
  password: string;

  @HasMany(() => Post)
  post: Post[]
  
}