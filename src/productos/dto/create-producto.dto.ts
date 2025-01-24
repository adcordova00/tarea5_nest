export class CreateProductoDto {
    name: string;
    price: number;
    category: string;
    brand: string;
    description?: string;
    folder?: string;
}
