// data/mockData.ts

export type Category = {
  id: number
  name: string
  icon: string
}

export type Brand = {
  id: number
  name: string
  logo?: string
}

export type Product = {
  id: number
  name: string
  brandId: number
  categoryId: number
  price: number
  image: string
  description: string
  stock: number
}

// 🧩 Categories
export const categories: Category[] = [
  { id: 1, name: "Snacks", icon: "🥨" },
  { id: 2, name: "Drinks", icon: "🥤" },
  { id: 3, name: "Liquors", icon: "🍷" },
  { id: 4, name: "Prepared Foods", icon: "🍱" },
  { id: 5, name: "Dairy", icon: "🧀" },
  { id: 6, name: "Cleaning", icon: "🧽" },
  { id: 7, name: "Groceries", icon: "🛒" },
]

// 🏷️ Brands
export const brands: Brand[] = [
  { id: 1, name: "Lays", logo: "/img/brands/lays.png" },
  { id: 2, name: "Oreo", logo: "/img/brands/oreo.png" },
  { id: 3, name: "Coca-Cola", logo: "/img/brands/coca.png" },
  { id: 4, name: "San Luis", logo: "/img/brands/sanluis.png" },
  { id: 5, name: "Cusqueña", logo: "/img/brands/cusquena.png" },
  { id: 6, name: "Gloria", logo: "/img/brands/gloria.png" },
  { id: 7, name: "Ariel", logo: "/img/brands/ariel.png" },
  { id: 8, name: "Costeño", logo: "/img/brands/costeno.png" },
  { id: 9, name: "Delicia", logo: "/img/brands/delicia.png" },
]

// 🛍️ Products
export const products: Product[] = [
  {
    id: 1,
    name: "Classic Chips 100g",
    brandId: 1,
    categoryId: 1,
    price: 2.5,
    image: "/img/snacks/lays.png",
    description: "Crunchy potato chips lightly salted",
    stock: 50,
  },
  {
    id: 2,
    name: "Oreo Cookies",
    brandId: 2,
    categoryId: 1,
    price: 1.8,
    image: "/img/snacks/oreo.png",
    description: "Chocolate sandwich cookies with cream filling",
    stock: 80,
  },
  {
    id: 3,
    name: "Coca-Cola 500ml",
    brandId: 3,
    categoryId: 2,
    price: 1.5,
    image: "/img/drinks/coca.png",
    description: "Refreshing soft drink 500ml",
    stock: 60,
  },
  {
    id: 4,
    name: "San Luis Water 625ml",
    brandId: 4,
    categoryId: 2,
    price: 1.0,
    image: "/img/drinks/sanluis.png",
    description: "Still mineral water bottle 625ml",
    stock: 100,
  },
  {
    id: 5,
    name: "Cusqueña Beer 355ml",
    brandId: 5,
    categoryId: 3,
    price: 2.8,
    image: "/img/liquors/cusquena.png",
    description: "Premium golden beer",
    stock: 40,
  },
  {
    id: 6,
    name: "Roasted Chicken (1/4)",
    brandId: 9,
    categoryId: 4,
    price: 12.0,
    image: "/img/foods/chicken.png",
    description: "Quarter roasted chicken with fries and salad",
    stock: 20,
  },
  {
    id: 7,
    name: "Whole Milk 1L",
    brandId: 6,
    categoryId: 5,
    price: 4.5,
    image: "/img/dairy/gloria.png",
    description: "Gloria whole evaporated milk",
    stock: 30,
  },
  {
    id: 8,
    name: "Strawberry Yogurt 1L",
    brandId: 6,
    categoryId: 5,
    price: 5.0,
    image: "/img/dairy/yogurt.png",
    description: "Natural strawberry yogurt",
    stock: 25,
  },
  {
    id: 9,
    name: "Ariel Detergent 1kg",
    brandId: 7,
    categoryId: 6,
    price: 8.0,
    image: "/img/cleaning/ariel.png",
    description: "Concentrated powder detergent",
    stock: 15,
  },
  {
    id: 10,
    name: "Costeño Rice 5kg",
    brandId: 8,
    categoryId: 7,
    price: 18.0,
    image: "/img/groceries/rice.png",
    description: "Long grain white rice 5kg",
    stock: 10,
  },
]
