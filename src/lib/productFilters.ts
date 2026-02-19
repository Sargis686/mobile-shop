import { Product } from "@/types/product";

export type ProductFilters = {
  searchTerm?: string;
  selectedCategories?: string[];
  selectedGenders?: string[];
  selectedSize?: string | null;
  selectedColor?: string | null;
  priceRange?: {
    from: number;
    to: number;
  };
};

export const getEffectivePrice = (item: Product) =>
  typeof item.discountedPrice === "number" ? item.discountedPrice : item.price;

export const getPriceBounds = (products: Product[]) => {
  if (products.length === 0) {
    return { min: 0, max: 0 };
  }

  const prices = products.map(getEffectivePrice);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  };
};

export const filterProducts = (products: Product[], filters: ProductFilters) => {
  const {
    searchTerm = "",
    selectedCategories = [],
    selectedGenders = [],
    selectedSize = null,
    selectedColor = null,
    priceRange,
  } = filters;

  const normalizedSearch = searchTerm.trim().toLowerCase();

  return products.filter((item) => {
    if (normalizedSearch) {
      const searchable = `${item.title} ${item.category}`.toLowerCase();
      if (!searchable.includes(normalizedSearch)) {
        return false;
      }
    }

    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes(item.category)
    ) {
      return false;
    }

    if (
      selectedGenders.length > 0 &&
      !selectedGenders.includes(item.gender)
    ) {
      return false;
    }

    if (selectedSize && !item.sizes.includes(selectedSize)) {
      return false;
    }

    if (selectedColor && !item.colors.includes(selectedColor)) {
      return false;
    }

    if (priceRange) {
      const effectivePrice = getEffectivePrice(item);
      return (
        effectivePrice >= priceRange.from && effectivePrice <= priceRange.to
      );
    }

    return true;
  });
};
