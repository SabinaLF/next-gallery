import { DummyProduct, Product } from '@/app/interfaces'

export const mappingProducts = (products: DummyProduct[]): Product[] => {
  return products?.map((product) => {
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      brand: product.brand,
      thumbnail: product.thumbnail,
      images: product.images,
    }
  })
}
