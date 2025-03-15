"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/ShopButton";
import { toast } from "react-hot-toast";
import { Product } from "@/lib/products";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(
    product.availableSizes?.[0] || ""
  );
  const [activeTab, setActiveTab] = useState("description");

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
      size: selectedSize || undefined,
    });

    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push("/shop/checkout");
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        {/* Product Image */}
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-4">
            <span className="inline-block px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full mb-2">
              {product.category}
            </span>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-4">
                <span className="text-yellow-400">★★★★</span>
                <span className="text-gray-300">★</span>
                <span className="text-sm text-gray-600 ml-1">(4.0)</span>
              </div>
              <span className="text-sm text-gray-600">12 reviews</span>
            </div>
            <p className="text-2xl font-bold text-green-600 mb-4">
              ${product.price.toFixed(2)}/kg
            </p>
            <div
              className={`mb-4 ${
                product.inStock ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </div>
          </div>

          {/* Size Selection (if applicable) */}
          {product.availableSizes && product.availableSizes.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.availableSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 border rounded-md text-sm ${
                      selectedSize === size
                        ? "border-green-600 bg-green-50 text-green-600"
                        : "border-gray-300 text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">
              Quantity (kg)
            </h3>
            <div className="flex items-center">
              <button
                onClick={decreaseQuantity}
                className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-50 text-gray-600 hover:bg-gray-100"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 h-10 border-t border-b border-gray-300 text-center text-gray-700 focus:outline-none focus:ring-0"
              />
              <button
                onClick={increaseQuantity}
                className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-50 text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Total Price */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-1">
              Total Price
            </h3>
            <p className="text-xl font-bold text-green-600">
              ${(product.price * quantity).toFixed(2)}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-auto">
            <Button
              onClick={handleAddToCart}
              variant="outline"
              className="flex-1"
              disabled={!product.inStock}
            >
              Add to Cart
            </Button>
            <Button
              onClick={handleBuyNow}
              className="flex-1 bg-green-600 hover:bg-green-700"
              disabled={!product.inStock}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="border-t border-gray-200 mt-8">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-6 py-3 text-sm font-medium ${
              activeTab === "description"
                ? "border-b-2 border-green-600 text-green-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("features")}
            className={`px-6 py-3 text-sm font-medium ${
              activeTab === "features"
                ? "border-b-2 border-green-600 text-green-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Features
          </button>
          <button
            onClick={() => setActiveTab("specifications")}
            className={`px-6 py-3 text-sm font-medium ${
              activeTab === "specifications"
                ? "border-b-2 border-green-600 text-green-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Specifications
          </button>
        </div>

        <div className="p-6">
          {activeTab === "description" && (
            <div className="prose max-w-none">
              <p>{product.details || product.description}</p>
            </div>
          )}

          {activeTab === "features" && (
            <div className="prose max-w-none">
              {product.features && product.features.length > 0 ? (
                <ul className="list-disc pl-5 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              ) : (
                <p>No features listed for this product.</p>
              )}
            </div>
          )}

          {activeTab === "specifications" && (
            <div className="prose max-w-none">
              {product.specifications &&
              Object.keys(product.specifications).length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div key={key} className="border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">
                          {key}:{" "}
                        </span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    )
                  )}
                </div>
              ) : (
                <p>No specifications listed for this product.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
