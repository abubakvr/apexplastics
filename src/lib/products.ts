// Mock product data - in a real app, this would come from an API or database
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
  slug?: string;
  details?: string;
  features?: string[];
  specifications?: Record<string, string>; // This is equivalent to { [key: string]: string }
  availableSizes?: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "HDPE Recycled Pellets",
    description:
      "High-density polyethylene pellets for sustainable manufacturing",
    details:
      "Our HDPE recycled pellets are sourced from post-consumer waste and processed to meet the highest quality standards. These pellets are perfect for manufacturing containers, pipes, and other durable plastic products with a reduced environmental footprint.",
    price: 2.99,
    image:
      "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
  {
    id: 3,
    name: "PP Mixed Color Pellets",
    description: "Polypropylene recycled pellets for various applications",
    details:
      "Our PP mixed color pellets are versatile and durable, perfect for a wide range of manufacturing applications. These pellets are processed from post-consumer and post-industrial waste, offering a sustainable alternative without compromising on quality.",
    price: 2.79,
    image:
      "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "PP",
    inStock: false,
    slug: "pp-mixed-color-pellets",
    features: [
      "Sourced from mixed post-consumer and post-industrial waste",
      "Excellent fatigue resistance",
      "Good chemical resistance",
      "Lightweight yet durable",
      "Suitable for injection molding applications",
    ],
    specifications: {
      Material: "Polypropylene (PP)",
      "Melt Flow Index": "12 g/10 min",
      Density: "0.90 g/cm³",
      "Tensile Strength": "32 MPa",
      Color: "Mixed Colors",
      "Pellet Size": "3-5 mm",
      Packaging: "25kg bags or 1000kg bulk bags",
    },
  },
  {
    id: 4,
    name: "LDPE Recycled Pellets",
    description: "Low-density polyethylene pellets for flexible products",
    details:
      "Our LDPE recycled pellets offer excellent flexibility and are ideal for manufacturing films, bags, and other flexible plastic products. Sourced from post-consumer waste, these pellets help reduce environmental impact while maintaining high performance standards.",
    price: 2.89,
    image:
      "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "LDPE",
    inStock: true,
    slug: "ldpe-recycled-pellets",
    features: [
      "Made from post-consumer recycled materials",
      "Excellent flexibility and elongation",
      "Good moisture barrier properties",
      "Low temperature impact resistance",
      "Suitable for film and flexible packaging applications",
    ],
    specifications: {
      Material: "Low-Density Polyethylene (LDPE)",
      "Melt Flow Index": "2.0 g/10 min",
      Density: "0.92 g/cm³",
      "Tensile Strength": "10 MPa",
      Color: "Translucent / Natural",
      "Pellet Size": "3-4 mm",
      Packaging: "25kg bags or 1000kg bulk bags",
    },
  },
  {
    id: 5,
    name: "PS Clear Pellets",
    description: "Recycled polystyrene pellets for packaging and containers",
    details:
      "Our recycled PS clear pellets are perfect for manufacturing transparent packaging, containers, and disposable items. These pellets are processed from post-consumer polystyrene waste, offering a sustainable option with excellent clarity and rigidity.",
    price: 3.19,
    image:
      "https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "PS",
    inStock: true,
    slug: "ps-clear-pellets",
    features: [
      "Sourced from post-consumer polystyrene waste",
      "Excellent clarity and transparency",
      "Good rigidity and dimensional stability",
      "Easy processing characteristics",
      "Suitable for food packaging applications",
    ],
    specifications: {
      Material: "Polystyrene (PS)",
      "Melt Flow Index": "8.0 g/10 min",
      Density: "1.05 g/cm³",
      "Tensile Strength": "40 MPa",
      Color: "Clear / Transparent",
      "Pellet Size": "2-4 mm",
      Packaging: "25kg bags or 1000kg bulk bags",
    },
  },
  {
    id: 6,
    name: "ABS Black Pellets",
    description:
      "Recycled acrylonitrile butadiene styrene for durable products",
    details:
      "Our ABS black pellets offer exceptional durability and impact resistance, making them ideal for manufacturing automotive parts, electronic housings, and other high-performance applications. These pellets are sourced from post-industrial waste, providing a sustainable alternative without compromising on quality.",
    price: 3.99,
    image:
      "https://images.unsplash.com/photo-1597106776019-b4ecc878c202?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "ABS",
    inStock: true,
    slug: "abs-black-pellets",
    features: [
      "Sourced from post-industrial ABS waste",
      "Excellent impact resistance and toughness",
      "Good heat and chemical resistance",
      "High dimensional stability",
      "Suitable for automotive and electronic applications",
    ],
    specifications: {
      Material: "Acrylonitrile Butadiene Styrene (ABS)",
      "Melt Flow Index": "6.0 g/10 min",
      Density: "1.05 g/cm³",
      "Tensile Strength": "45 MPa",
      Color: "Black",
      "Pellet Size": "3-5 mm",
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
