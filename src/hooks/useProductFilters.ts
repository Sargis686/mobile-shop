import { useMemo, useState } from "react";
import { Product } from "@/types/product";
import { filterProducts, getPriceBounds } from "@/lib/productFilters";

type PriceRange = {
  from: number;
  to: number;
};

export const useProductFilters = (products: Product[]) => {
  const priceBounds = useMemo(() => getPriceBounds(products), [products]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<PriceRange>({
    from: priceBounds.min,
    to: priceBounds.max,
  });

  const filteredProducts = useMemo(
    () =>
      filterProducts(products, {
        searchTerm,
        selectedCategories,
        selectedGenders,
        selectedSize,
        selectedColor,
        priceRange,
      }),
    [
      products,
      searchTerm,
      selectedCategories,
      selectedGenders,
      selectedSize,
      selectedColor,
      priceRange,
    ]
  );

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setSelectedGenders([]);
    setSelectedSize(null);
    setSelectedColor(null);
    setPriceRange({ from: priceBounds.min, to: priceBounds.max });
  };

  return {
    searchTerm,
    setSearchTerm,
    selectedCategories,
    setSelectedCategories,
    selectedGenders,
    setSelectedGenders,
    selectedSize,
    setSelectedSize,
    selectedColor,
    setSelectedColor,
    priceBounds,
    priceRange,
    setPriceRange,
    filteredProducts,
    clearAllFilters,
  };
};
