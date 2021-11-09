import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { AuthService } from './modules/auth/auth.service';
import { AuthModule } from './modules/auth/auth.module';
import { BaseModule } from './common/base.modult';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.graphql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'vietanh1408',
      database: 'test',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ...BaseModule,
  ],
  providers: [AuthService],
})
export class AppModule {}
