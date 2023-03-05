import {UserDto} from '../sub-dtos';

export class GetUserResponseDto extends UserDto {
  constructor(args: GetUserResponseDto) {
    super(args);
    delete args.password;
    delete args.cars;
    return Object.assign(this, args);
  }
}
