import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonasService } from './personas.service';
import { PersonasController } from './personas.controller';
import { Persona } from './entities/persona.entity'; // Importa la entidad

@Module({
  imports: [TypeOrmModule.forFeature([Persona])], // Registra la entidad aquí
  controllers: [PersonasController],
  providers: [PersonasService],
  exports: [TypeOrmModule], // Exporta TypeOrmModule si se necesita en otros módulos
})
export class PersonasModule {}
