import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
      TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          type: 'mongodb',
          host: configService.get('MONGODB_HOST'),
          port: configService.get('MONGODB_PORT'),
          username: configService.get('MONGODB_USER'),
          password: configService.get('MONGODB_PASSWORD'),
          database: configService.get('MONDODB_DB'),
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          ssl: false,
          synchronize: true,
        }),
      }),
    ],
  })

export class DatabaseModule {}
