import { CartProduct, Product } from '@/app/interfaces'

export const mappingCartProduct = (product: Product): CartProduct => {
  return {
    id: product.id,
    title: product.title,
    brand: product.brand,
    price: product.price,
    thumbnail: product.thumbnail,
    quantity: 0,
  }
}
