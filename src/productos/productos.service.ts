import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) {}

  findAll() {
    return this.productoRepository.find();
  }

  findOne(id: number) {
    return this.productoRepository.findOne({ where: { id } });
  }

  create(createProductoDto: CreateProductoDto) {
    const newProducto = this.productoRepository.create(createProductoDto);
    return this.productoRepository.save(newProducto);
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    await this.productoRepository.update(id, updateProductoDto);
    return this.productoRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    const producto = await this.findOne(id);
    if (!producto) return null;
    return this.productoRepository.remove(producto);
  }
}
