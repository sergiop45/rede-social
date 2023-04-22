export class CreateCommentDto {
    comment: string;
    userId: number;
    postId: number;

}

export type OptionalCommentDto = {
    [P in keyof CreateCommentDto]?: CreateCommentDto[P];
};
  