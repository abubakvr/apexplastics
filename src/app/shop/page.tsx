import ShopHeader from "@/components/shop/ShopHeader";
import ProductGrid from "@/components/shop/ProductGrid";
import ShopFilters from "@/components/shop/ShopFilters";
import Container from "@/components/ui/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Recycled Plastic Pellets | EcoPellets",
  description:
    "Browse and purchase our high-quality recycled plastic pellets for your sustainable manufacturing needs.",
};

export default function ShopPage() {
  return (
    <>
      <ShopHeader />
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/4">
              <ShopFilters />
            </div>
            <div className="w-full lg:w-3/4">
              <ProductGrid />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
