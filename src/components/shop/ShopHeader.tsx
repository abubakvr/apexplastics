import Container from "@/components/ui/Container";
import { RiFilter3Line, RiSearch2Line } from "react-icons/ri";

export default function ShopHeader() {
  return (
    <section className="py-8 bg-primary-600 text-white">
      <Container>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Shop Recycled Pellets
              </h1>
              <p className="mt-2 text-primary-100">
                Find the perfect sustainable pellets for your needs
              </p>
            </div>

            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-primary-300 text-gray-800"
              />
              <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-white text-primary-600 px-3 py-1 rounded-full font-medium">
                6 Plastic Types
              </span>
              <span className="bg-white text-primary-600 px-3 py-1 rounded-full font-medium">
                3 Grades
              </span>
              <span className="bg-white text-primary-600 px-3 py-1 rounded-full font-medium">
                12 Colors
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <button className="flex items-center gap-1 bg-primary-700 hover:bg-primary-800 px-3 py-2 rounded-lg transition-colors">
                <RiFilter3Line />
                <span>Filters</span>
              </button>
              <select className="bg-white text-gray-800 px-3 py-2 rounded-lg border-0 focus:ring-2 focus:ring-primary-300">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
