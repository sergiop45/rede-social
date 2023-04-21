export class CreatePostDto {
    post: string;
    userId: number;
}
  

export type OptionalPostDto = {
    [P in keyof CreatePostDto]?: CreatePostDto[P];
};
  