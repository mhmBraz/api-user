import {
  BadGatewayException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import {CreateUserRequestDto} from '../dtos/req';
import {UserRepository} from '../repositories';
import {CreateUserResponseDto} from '../dtos/res';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async handler(
    payload: CreateUserRequestDto,
  ): Promise<CreateUserResponseDto> {
    const existent = await this.userRepository.findExistentUser({
      email: payload.email,
      login: payload.login,
    });
    if (existent.length) throw new ConflictException(); // Conflito

    try {
      payload.password = await bcrypt.hash(payload.password, 3);
    } catch (err) {
      throw new InternalServerErrorException(); // Falha ao gerar o hash
    }

    try {
      const created = await this.userRepository.create(payload);
      return new CreateUserResponseDto(created);
    } catch (err) {
      throw new BadGatewayException(); // Falha ao chamar o banco
    }
  }
}
