import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {CreateUserService} from './services';
import {AddCarToUserRequestDto, CreateUserRequestDto} from './dtos/req';
import {AddCarToUserService} from './services/add-car-to-user.service';
import {AddCarToUserResponseDto, CreateUserResponseDto} from './dtos/res';
import {GetUserService} from './services/get-user.service';
import { EditUserRequestDto } from './dtos/req/edit-user.dto';
import { GenericUserResponseDto } from './dtos/res/generic.dto';

@Controller('/users')
export class UsersController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly addCarToUserService: AddCarToUserService,
    private readonly getUserService: GetUserService,
  ) {}

  @Post()
  public async createUser(
    @Body() payload: CreateUserRequestDto,
  ): Promise<CreateUserResponseDto> {
    return this.createUserService.handler(payload);
  }

  @Put(':userId/edit')
  public async addCarToUser(
    @Param('userId') userId: string,
    @Body() payload: EditUserRequestDto,
  ): Promise<GenericUserResponseDto> {
    return {
      message : '',
      status: true
    }
  }

  @Get(':userId')
  public async user(
    @Param('userId') userId: string,
  ): Promise<CreateUserResponseDto> {
    return this.getUserService.handler(userId);
  }

  // @Put(':userId/cars')
  // public async addCarToUser(
  //   @Param('userId') userId: string,
  //   @Body() payload: AddCarToUserRequestDto,
  // ): Promise<AddCarToUserResponseDto> {
  //   return this.addCarToUserService.handler(userId, payload);
  // }
}
