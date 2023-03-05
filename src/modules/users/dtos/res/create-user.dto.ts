import {UserDto} from '../sub-dtos';

export class CreateUserResponseDto extends UserDto {
  constructor(args: CreateUserResponseDto) {
    super(args);
    delete args.password;
    return Object.assign(this, args);
  }
}
