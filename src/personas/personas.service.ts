import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from './entities/persona.entity';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';

@Injectable()
export class PersonasService {
  constructor(
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
  ) {}

  findAll() {
    return this.personaRepository.find();
  }

  findOne(id: number) {
    return this.personaRepository.findOne({ where: { id } });
  }

  create(createPersonaDto: CreatePersonaDto) {
    const newPersona = this.personaRepository.create(createPersonaDto);
    return this.personaRepository.save(newPersona);
  }

  async update(id: number, updatePersonaDto: UpdatePersonaDto) {
    await this.personaRepository.update(id, updatePersonaDto);
    return this.personaRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    const persona = await this.findOne(id);
    if (!persona) return null;
    return this.personaRepository.remove(persona);
  }
}
