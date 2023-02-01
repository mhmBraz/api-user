import {Body, Controller, Param, Post, Put} from '@nestjs/common';
import {CreateUserService} from './services';
import {AddCarToUserRequestDto, CreateUserRequestDto} from './dtos/req';
import {AddCarToUserService} from './services/add-car-to-user.service';
import { AddCarToUserResponseDto, CreateUserResponseDto } from "./dtos/res";

@Controller('/users')
export class UsersController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly addCarToUserService: AddCarToUserService,
  ) {}

  @Post()
  public async createUser(
    @Body() payload: CreateUserRequestDto,
  ): Promise<CreateUserResponseDto> {
    return this.createUserService.handler(payload);
  }

  @Put(':userId/cars')
  public async addCarToUser(
    @Param('userId') userId: string,
    @Body() payload: AddCarToUserRequestDto,
  ): Promise<AddCarToUserResponseDto> {
    return this.addCarToUserService.handler(userId, payload);
  }
}
