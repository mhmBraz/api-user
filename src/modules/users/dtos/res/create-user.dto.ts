import {UserDto} from '../sub-dtos';

export class CreateUserResponseDto extends UserDto {
  constructor(args: CreateUserResponseDto) {
    super(args);
    delete args.password;
    Object.assign(this, args);
  }
}
