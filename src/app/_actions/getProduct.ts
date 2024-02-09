'use server'

export async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  console.log(res)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
