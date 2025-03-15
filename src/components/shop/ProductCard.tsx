import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/ShopButton";
import { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const productSlug = product.slug || product.id.toString();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
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
          <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
          <span className="text-lg font-bold text-green-600">
            ${product.price.toFixed(2)}/kg
          </span>
        </div>
        <p className="text-sm text-gray-500 mb-1">{product.category}</p>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
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
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="text-sm"
              disabled={!product.inStock}
            >
              Add to Cart
            </Button>
            <Link href={`/shop/product/${productSlug}`}>
              <Button variant="outline" size="sm" className="text-sm">
                Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
