import {
  BadGatewayException,
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import {UserRepository} from '../repositories';
import {isMongoId} from 'class-validator';
import {GetUserResponseDto} from '../dtos/res';
// import {GetUserResponseDto} from '../dtos/res';

@Injectable()
export class GetUserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async handler(userId: string): Promise<any> {
    if (!isMongoId(userId)) throw new BadRequestException();

    try {
      const user = await this.userRepository.user(userId);
      const teste = new GetUserResponseDto(user)
      return new GetUserResponseDto(user);
    } catch (err) {
      throw new BadGatewayException(); // Falha ao chamar o banco
    }
  }
}
