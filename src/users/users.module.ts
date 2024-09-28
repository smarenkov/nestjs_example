import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { User, UserSchema } from './user.schema';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'USERS_SERVICE',
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [configService.get<string>('RABBITMQ_URL')],
            queue: configService.get<string>('RABBITMQ_USERS_QUEUE'),
            queueOptions: {
              durable: false,
            },
          },
        }),
      },
    ]),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
