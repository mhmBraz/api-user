import {Car} from '../../entities/car.entity';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import {CarDto} from '../sub-dtos';
import {Type} from 'class-transformer';

export class CreateUserRequestDto {
  @IsString()
  @IsNotEmpty()
  login: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsArray()
  @IsNotEmpty()
  @ValidateNested({each: true})
  @Type(() => CarDto)
  cars: Car[];
}
