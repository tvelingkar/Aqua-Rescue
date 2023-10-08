import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { LeakInfoModule } from './leak_info/leak_info.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    DatabaseModule,
    LeakInfoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
