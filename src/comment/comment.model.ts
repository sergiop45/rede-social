import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Post } from 'src/post/post.model';
import { User } from 'src/user/user.model';

@Table
export class Comment extends Model {
  @Column
  comment: string;

  @ForeignKey(() => Post)
  @Column
  postId: number

  @BelongsTo(() => Post)
  post: Post;

  @ForeignKey(() => User)
  @Column
  userId: number

  @BelongsTo(() => User)
  user: User;

}