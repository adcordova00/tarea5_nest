import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonasModule } from './personas/personas.module';
import { ProductosModule } from './productos/productos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', 
      port: 5432,
      username: 'postgres', 
      password: '123456', 
      database: 'tarea5_personas', 
      autoLoadEntities: true, 
      synchronize: true, 
    }),
    PersonasModule,
    ProductosModule,
  ],
})
export class AppModule {}

