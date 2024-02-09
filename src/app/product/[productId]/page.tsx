import { getProduct } from '@/app/_actions/getProduct'
import { mappingProduct } from '@/app/_libs/mappingProduct'
import Product from '@/app/_components/Product'

export default async function ProductPage({
  params,
}: {
  params: { [key: string]: string }
}) {
  const data = await getProduct(params.productId)
  const product = mappingProduct(data)
  return <Product product={product} />
}
