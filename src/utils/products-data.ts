// utils/products-data.ts
let products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 35,
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
    price: 45,
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
    price: 25,
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
    price: 95,
    color: 'Iso Dots',
    description: 'Kaos dengan desain artwork unik, cocok untuk tampil beda.',
  },
];

export function getAll() {
  return products;
}

export function getById(id: number) {
  return products.find((p) => p.id === id);
}

export function add(product: { name: string; price: number }) {
  const newProduct = {
    id: Date.now(),
    ...product,
  };
  products.push(newProduct);
  return newProduct;
}

export function update(id: number, data: { name: string; price: number }) {
  const index = products.findIndex((p) => p.id === id);
  if (index !== -1) {
    products[index] = { id, ...data };
    return products[index];
  }
  return null;
}

export function remove(id: number) {
  const index = products.findIndex((p) => p.id === id);
  if (index !== -1) {
    const deleted = products.splice(index, 1);
    return deleted[0];
  }
  return null;
}
