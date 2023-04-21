import { IsNotEmpty, IsNumber } from 'class-validator';
import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Comment } from 'src/comment/comment.model';
import { User } from 'src/user/user.model';

@Table
export class Post extends Model {
  
  @IsNotEmpty()
  @Column
  post: string;

  @IsNumber()
  @IsNotEmpty()
  @ForeignKey(() => User)
  @Column
  userId: number

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Comment)
  comment: Comment[]

}