export interface Labels {
  [key: string]: string
}

export interface Product {
  id: number
  title: string
  description: string
  price: number
  brand: string
  thumbnail: string
  images: string[]
}
export interface CartProduct {
  id: number
  title: string
  price: number
  brand: string
  thumbnail: string
  quantity: number
}
export interface DummyProduct {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}
