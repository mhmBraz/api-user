import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';


@Controller()
export class LoginController {
  constructor(

  ) {}

  @Post('/login')
  public async createUser(
    @Body() payload: any,
  ): Promise<any> {

  }
}
