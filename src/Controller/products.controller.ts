import { Request, Response } from 'express';
import ProductService from '../services/products.service';

class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  create = async (request: Request, response: Response) => {
    const addProducts = await this.productService.create(request.body);
    return response.status(201).json(addProducts);
  };

  findAll = async (request: Request, response: Response) => {
    const { status, result } = await this.productService.findAll();
    return response.status(status).json(result);
  };
}

export default ProductController;