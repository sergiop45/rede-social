import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, OptionalUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('user-route')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({summary: 'cria um novo usuario.'})
  @Post()
  create(@Body() user: OptionalUserDto): Promise<User> {
    return this.userService.create(user);
  }

  @ApiOperation({summary: 'retorna todos os usuarios.'})
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @ApiOperation({summary: 'retorna um usuario pelo id.'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @ApiOperation({summary: 'edita um usuario.'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @ApiOperation({summary: 'deleta um usuario.'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
