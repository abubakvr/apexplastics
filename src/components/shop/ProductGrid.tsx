"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/ShopButton";

// Mock product data - replace with actual data fetching in production
const allProducts = [
  {
    id: 1,
    name: "HDPE Recycled Pellets",
    description:
      "High-density polyethylene pellets for sustainable manufacturing",
    price: 2.99,
    image:
      "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "HDPE",
    inStock: true,
  },
  {
    id: 2,
    name: "PET Clear Pellets",
    description:
      "Recycled polyethylene terephthalate pellets, ideal for packaging",
    price: 3.49,
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "PET",
    inStock: true,
  },
  {
    id: 3,
    name: "PP Mixed Color Pellets",
    description: "Polypropylene recycled pellets for various applications",
    price: 2.79,
    image:
      "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "PP",
    inStock: false,
  },
  {
    id: 4,
    name: "LDPE Recycled Pellets",
    description: "Low-density polyethylene pellets for flexible products",
    price: 2.89,
    image:
      "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "LDPE",
    inStock: true,
  },
  {
    id: 5,
    name: "PS Clear Pellets",
    description: "Recycled polystyrene pellets for packaging and containers",
    price: 3.19,
    image:
      "https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "PS",
    inStock: true,
  },
  {
    id: 6,
    name: "ABS Black Pellets",
    description:
      "Recycled acrylonitrile butadiene styrene for durable products",
    price: 3.99,
    image:
      "https://images.unsplash.com/photo-1597106776019-b4ecc878c202?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "ABS",
    inStock: true,
  },
];

interface ProductGridProps {
  categoryFilter?: string[];
  priceRange?: { min: number; max: number };
  inStockOnly?: boolean;
}

export default function ProductGrid({
  categoryFilter = [],
  priceRange = { min: 0, max: 1000 },
  inStockOnly = false,
}: ProductGridProps) {
  const [sortOption, setSortOption] = useState("featured");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  // Apply filters and sorting whenever filter props change
  useEffect(() => {
    let result = [...allProducts];

    // Apply category filter
    if (categoryFilter.length > 0) {
      result = result.filter((product) =>
        categoryFilter.includes(product.category)
      );
    }

    // Apply price range filter
    result = result.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Apply in-stock filter
    if (inStockOnly) {
      result = result.filter((product) => product.inStock);
    }

    // Apply sorting
    switch (sortOption) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        // In a real app, you'd sort by date added
        result.sort((a, b) => b.id - a.id);
        break;
      default: // 'featured' or any other option
        // Keep default order or implement featured logic
        break;
    }

    setFilteredProducts(result);
  }, [
    // Use individual primitive values instead of objects
    categoryFilter.length > 0 ? categoryFilter.join(",") : "",
    priceRange.min,
    priceRange.max,
    inStockOnly,
    sortOption,
  ]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Products ({filteredProducts.length})
        </h2>
        <div className="flex items-center">
          <label htmlFor="sort" className="mr-2 text-sm text-gray-600">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={handleSortChange}
            className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-gray-600 text-lg">
            No products match your current filters.
          </p>
          <p className="text-gray-500 mt-2">
            Try adjusting your filter criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium text-gray-900">
                    {product.name}
                  </h3>
                  <span className="text-lg font-bold text-green-600">
                    ${product.price.toFixed(2)}/kg
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                <p className="text-sm text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      product.inStock
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                  <Link
                    href={`/shop/product/${product.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    <Button variant="outline" className="text-sm">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
