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
          database: configService.get('MONGODB_DB'),
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          url: configService.get('MONGODB_URL'),
          ssl: true,
          synchronize: true,
          useUnifiedTopology: true,
          useNewUrlParser: true,
        }),
      }),
    ],
  })

export class DatabaseModule {}
