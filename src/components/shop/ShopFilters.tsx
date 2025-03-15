"use client";

import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

export default function ShopFilters() {
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [typeOpen, setTypeOpen] = useState(true);
  const [gradeOpen, setGradeOpen] = useState(true);
  const [colorOpen, setColorOpen] = useState(false);
  const [certificationOpen, setCertificationOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
      <div className="pb-4 border-b border-gray-200">
        <h2 className="text-lg font-bold text-gray-800">Filters</h2>
      </div>

      {/* Category Filter */}
      <div className="py-4 border-b border-gray-200">
        <button
          className="flex items-center justify-between w-full text-left"
          onClick={() => setCategoryOpen(!categoryOpen)}
        >
          <h3 className="font-semibold">Category</h3>
          <RiArrowDownSLine
            className={`transform transition-transform ${
              categoryOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {categoryOpen && (
          <div className="mt-3 space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">All Categories</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">Packaging</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">Automotive</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">Construction</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">Consumer Goods</span>
            </label>
          </div>
        )}
      </div>

      {/* Plastic Type Filter */}
      <div className="py-4 border-b border-gray-200">
        <button
          className="flex items-center justify-between w-full text-left"
          onClick={() => setTypeOpen(!typeOpen)}
        >
          <h3 className="font-semibold">Plastic Type</h3>
          <RiArrowDownSLine
            className={`transform transition-transform ${
              typeOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {typeOpen && (
          <div className="mt-3 space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">HDPE</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">LDPE</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">PP</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">PET</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">PS</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">ABS</span>
            </label>
          </div>
        )}
      </div>

      {/* Grade Filter */}
      <div className="py-4 border-b border-gray-200">
        <button
          className="flex items-center justify-between w-full text-left"
          onClick={() => setGradeOpen(!gradeOpen)}
        >
          <h3 className="font-semibold">Grade</h3>
          <RiArrowDownSLine
            className={`transform transition-transform ${
              gradeOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {gradeOpen && (
          <div className="mt-3 space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">Standard</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">Premium</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">Industrial</span>
            </label>
          </div>
        )}
      </div>

      {/* Color Filter */}
      <div className="py-4 border-b border-gray-200">
        <button
          className="flex items-center justify-between w-full text-left"
          onClick={() => setColorOpen(!colorOpen)}
        >
          <h3 className="font-semibold">Color</h3>
          <RiArrowDownSLine
            className={`transform transition-transform ${
              colorOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {colorOpen && (
          <div className="mt-3">
            <div className="grid grid-cols-4 gap-2">
              <div className="w-6 h-6 rounded-full bg-white border border-gray-300 cursor-pointer"></div>
              <div className="w-6 h-6 rounded-full bg-black cursor-pointer"></div>
              <div className="w-6 h-6 rounded-full bg-gray-500 cursor-pointer"></div>
              <div className="w-6 h-6 rounded-full bg-blue-500 cursor-pointer"></div>
              <div className="w-6 h-6 rounded-full bg-green-500 cursor-pointer"></div>
              <div className="w-6 h-6 rounded-full bg-red-500 cursor-pointer"></div>
              <div className="w-6 h-6 rounded-full bg-yellow-500 cursor-pointer"></div>
              <div className="w-6 h-6 rounded-full bg-orange-500 cursor-pointer"></div>
            </div>
          </div>
        )}
      </div>

      {/* Certification Filter */}
      <div className="py-4 border-b border-gray-200">
        <button
          className="flex items-center justify-between w-full text-left"
          onClick={() => setCertificationOpen(!certificationOpen)}
        >
          <h3 className="font-semibold">Certifications</h3>
          <RiArrowDownSLine
            className={`transform transition-transform ${
              certificationOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {certificationOpen && (
          <div className="mt-3 space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">ISO 9001</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">ISO 14001</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">FDA Approved</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">EU Compliant</span>
            </label>
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="py-4 border-b border-gray-200">
        <button
          className="flex items-center justify-between w-full text-left"
          onClick={() => setPriceOpen(!priceOpen)}
        >
          <h3 className="font-semibold">Price Range</h3>
          <RiArrowDownSLine
            className={`transform transition-transform ${
              priceOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {priceOpen && (
          <div className="mt-3 space-y-4">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">${priceRange[0]}</span>
              <span className="text-sm text-gray-600">${priceRange[1]}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], parseInt(e.target.value)])
              }
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between space-x-3">
              <input
                type="number"
                min="0"
                max={priceRange[1]}
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([parseInt(e.target.value), priceRange[1]])
                }
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
              />
              <span className="text-gray-500">to</span>
              <input
                type="number"
                min={priceRange[0]}
                max="1000"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], parseInt(e.target.value)])
                }
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
              />
            </div>
          </div>
        )}
      </div>

      {/* Apply Filters Button */}
      <div className="pt-4">
        <button className="w-full py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors">
          Apply Filters
        </button>
        <button className="w-full py-2 mt-2 text-primary-600 hover:text-primary-700 font-medium transition-colors">
          Clear All
        </button>
      </div>
    </div>
  );
}
