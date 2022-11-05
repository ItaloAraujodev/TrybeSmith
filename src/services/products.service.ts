import Products from '../models/products.model';
import connection from '../models/connection';
import IProducts from '../interfaces/ICreateProducts';

class ProductService {
  public model: Products;

  constructor() {
    this.model = new Products(connection);
  }

  public async create(product: IProducts): Promise<IProducts> {
    const addProducts = await this.model.create(product);
    return addProducts;
  }

  public async findAll() {
    const listarProducts = await this.model.findAll();
    console.log(listarProducts);
    return { status: 200, result: listarProducts };
  }
}

export default ProductService;