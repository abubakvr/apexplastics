// Mock product data - in a real app, this would come from an API or database
const products = [
  {
    id: 1,
    name: "HDPE Recycled Pellets",
    description:
      "High-density polyethylene pellets for sustainable manufacturing",
    details:
      "Our HDPE recycled pellets are sourced from post-consumer waste and processed to meet the highest quality standards. These pellets are perfect for manufacturing containers, pipes, and other durable plastic products with a reduced environmental footprint.",
    price: 2.99,
    image: "/images/products/hdpe-pellets.jpg",
    category: "HDPE",
    inStock: true,
    slug: "hdpe-recycled-pellets",
    features: [
      "Made from 100% post-consumer recycled materials",
      "Consistent quality and color",
      "Excellent impact resistance",
      "Good chemical resistance",
      "Suitable for food-grade applications (FDA compliant)",
    ],
    specifications: {
      Material: "High-Density Polyethylene (HDPE)",
      "Melt Flow Index": "0.8 g/10 min",
      Density: "0.95 g/cm³",
      "Tensile Strength": "26 MPa",
      Color: "Natural / White",
      "Pellet Size": "3-5 mm",
      Packaging: "25kg bags or 1000kg bulk bags",
    },
  },
  {
    id: 2,
    name: "PET Clear Pellets",
    description:
      "Recycled polyethylene terephthalate pellets, ideal for packaging",
    details:
      "Our recycled PET pellets are produced from post-consumer bottles and containers. These clear pellets are perfect for manufacturing new bottles, containers, and packaging materials with excellent clarity and strength.",
    price: 3.49,
    image: "/images/products/pet-pellets.jpg",
    category: "PET",
    inStock: true,
    slug: "pet-clear-pellets",
    features: [
      "Sourced from post-consumer PET bottles",
      "Excellent clarity and transparency",
      "Good barrier properties",
      "High tensile strength",
      "FDA approved for food contact",
    ],
    specifications: {
      Material: "Polyethylene Terephthalate (PET)",
      "Intrinsic Viscosity": "0.80 dl/g",
      Density: "1.35 g/cm³",
      "Melting Point": "250°C",
      Color: "Clear / Transparent",
      "Pellet Size": "2-4 mm",
      Packaging: "25kg bags or 1000kg bulk bags",
    },
  },
  // Add more products as needed
];

/**
 * Get a product by its slug
 */
export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

/**
 * Get a product by its ID
 */
export function getProductById(id: number) {
  return products.find((product) => product.id === id);
}

/**
 * Get related products based on category
 */
export function getRelatedProducts(category: string, excludeId: number) {
  return products
    .filter(
      (product) => product.category === category && product.id !== excludeId
    )
    .slice(0, 4);
}

/**
 * Get all products
 */
export function getAllProducts() {
  return products;
}

/**
 * Get products by category
 */
export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category);
}

/**
 * Get all available categories
 */
export function getAllCategories() {
  const categories = new Set(products.map((product) => product.category));
  return Array.from(categories);
}

export default products;
