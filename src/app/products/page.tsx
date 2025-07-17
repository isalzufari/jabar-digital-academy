'use client';

import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  imageSrc: string;
  imageAlt: string;
  price: number;
  color: string;
  description: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [editId, setEditId] = useState<number | null>(null);

  const fetchProducts = async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const payload = {
      name,
      price: Number(price),
      color,
      imageSrc,
    };

    if (editId) {
      await fetch(`/api/products/${editId}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
      });
    } else {
      await fetch('/api/products', {
        method: 'POST',
        body: JSON.stringify(payload),
      });
    }

    setName('');
    setPrice('');
    setColor('');
    setImageSrc('');
    setEditId(null);
    fetchProducts();
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/products/${id}`, { method: 'DELETE' });
    fetchProducts();
  };

  const handleEdit = (product: Product) => {
    setEditId(product.id);
    setName(product.name);
    setColor(product.color);
    setImageSrc(product.imageSrc);
    setPrice(product.price.toString());
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">
          Manajemen Produk
        </h1>
        <form onSubmit={handleSubmit} className="mb-6 space-y-2">
          <input
            className="w-full border p-2 rounded text-gray-900"
            placeholder="Nama Produk"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="w-full border p-2 rounded text-gray-900"
            placeholder="Harga"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <input
            className="w-full border p-2 rounded text-gray-900"
            placeholder="Warna"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
          />
          <input
            className="w-full border p-2 rounded text-gray-900"
            placeholder="URL Gambar"
            value={imageSrc}
            onChange={(e) => setImageSrc(e.target.value)}
            required
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            {editId ? 'Update' : 'Tambah'}
          </button>
        </form>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Listing produk
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={`${product.id}`}>
                      <span aria-hidden="true" className="" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {`$ ${product.price}`}
                </p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(product)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
