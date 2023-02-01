import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {User, UserDocument} from '../entities';
import {CreateUserRequestDto} from '../dtos/req';
import {Model} from 'mongoose';
import {CarDto} from '../dtos/sub-dtos';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  public async findExistentUser(filters: Pick<User, 'email' | 'login'>) {
    return this.userModel
      .find({
        $or: [
          {$expr: {$eq: ['email', filters.email]}},
          {$expr: {$eq: ['login', filters.login]}},
        ],
      })
      .exec();
  }

  public async create(payload: CreateUserRequestDto) {
    const document = await this.userModel.create(payload);
    return document.toJSON();
  }

  public async addCar(_id: string, car: CarDto) {
    return this.userModel
      .findByIdAndUpdate({_id}, {$push: {cars: car}}, {new: true, lean: true})
      .exec();
  }
}
