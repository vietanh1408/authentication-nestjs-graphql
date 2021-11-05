import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

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
    UsersModule,
  ],
})
export class AppModule {}
