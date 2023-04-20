export interface CreateUserDto {
    username: string;
    email: string;
    password: string;
}

export type OptionalUserDto = {
    [P in keyof CreateUserDto]?: CreateUserDto[P];
};
  