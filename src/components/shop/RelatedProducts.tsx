"use client";

import React from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/ShopButton";
import { Product } from "@/lib/products";

interface RelatedProductsProps {
  products: Product[];
  currentProductId: number;
}

export default function RelatedProducts({
  products,
  currentProductId,
}: RelatedProductsProps) {
  // Filter out the current product and limit to 4 related products
  const relatedProducts = products
    .filter((product) => product.id !== currentProductId)
    .slice(0, 4);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Related Products</h2>
        <Link href="/shop">
          <Button variant="outline">View All Products</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
