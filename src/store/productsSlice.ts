import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface Product {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  color: string;
  description: string;
}

type ProductsState = Product[];

const initialState: ProductsState = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    description: 'Kaos basic warna hitam, cocok untuk gaya santai sehari-hari.',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Basic Tee in white.",
    price: '$35',
    color: 'Aspen White',
    description:
      'Kaos basic warna putih bersih, bahan adem dan nyaman dipakai.',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg',
    imageAlt: "Front of men's Basic Tee in dark gray.",
    price: '$35',
    color: 'Charcoal',
    description: 'Kaos basic warna abu gelap, simpel dan elegan.',
  },
  {
    id: 4,
    name: 'Artwork Tee',
    href: '#',
    imageSrc:
      'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg',
    imageAlt:
      "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: '$35',
    color: 'Iso Dots',
    description: 'Kaos dengan desain artwork unik, cocok untuk tampil beda.',
  },
];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      return state.filter((p) => p.id !== action.payload);
    },
  },
});

export const selectProductById = (state: RootState, id: number) =>
  state.products.find((product) => product.id === id);

export const { addProduct, updateProduct, deleteProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
