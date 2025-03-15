import React from "react";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import ProductDetails from "@/components/shop/ProductDetails";
import RelatedProducts from "@/components/shop/RelatedProducts";
import { getProductBySlug, getRelatedProducts } from "@/lib/products";
import { Metadata, ResolvingMetadata } from "next";

// Define the params type as a Promise
type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

// Update the generateMetadata function
export async function generateMetadata(
  props: {
    params: Params;
    searchParams: SearchParams;
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | EcoPellets",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.name} | EcoPellets`,
    description: product.description,
  };
}

// Use the same format for the page component
export default async function ProductPage(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const slug = params.slug;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.category, product.id);

  return (
    <Container className="py-12">
      <ProductDetails product={product} />
      <RelatedProducts
        products={relatedProducts}
        currentProductId={product.id}
      />
    </Container>
  );
}
