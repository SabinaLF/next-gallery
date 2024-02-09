import { getProducts } from './_actions/getProducts'
import Products from './_components/Products'
import { mappingProducts } from '@/app/_libs/mappingProducts'

export default async function ProductsPage() {
  const data = await getProducts()
  const products = mappingProducts(data.products)
  return <Products products={products} />
}
