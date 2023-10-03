export type NavItemType = {
  link: string
  title: string
}

export type ProductType = {
  id: number
  title: string
  brand: string
  img: string[]
  description: string
  price: number
  oldprice?: number
}

export type CartType = {
  id: number
  title: string
  img: string
  price: number
  count: number
}