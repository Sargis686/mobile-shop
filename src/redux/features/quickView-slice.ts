import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product";

type InitialState = {
  value: Product;
};

//  category: "Desktop",
//     gender: "Unisex",
//     sizes: ["L", "XL"],
//     colors: ["blue", "orange"],
// category, gender, sizes, colors
const initialState = {
  value: {
    title: "",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    img: "",
    id: 0,
    category:"",
     gender: "Unisex",

    sizes:[],
    colors:[],
    images: [],
    imgs: { thumbnails: [], previews: [] },
  } as Product,
} as InitialState;

export const quickView = createSlice({
  name: "quickView",
  initialState,
  reducers: {
    updateQuickView: (_, action) => {
      return {
        value: {
          ...action.payload,
        },
      };
    },

    resetQuickView: () => {
      return {
        value: initialState.value,
      };
    },
  },
});

export const { updateQuickView, resetQuickView } = quickView.actions;
export default quickView.reducer;
