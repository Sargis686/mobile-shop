export type Product = {
  title: string;
  reviews: number;
  price: number;
  discountedPrice: number;
  id: number;
  category: string;
  gender: "Men" | "Women" | "Unisex";
  sizes: string[];
  colors: string[];
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
