'use client';
import { useEffect, useState } from 'react';

type Product = { id: number; name: string; price: number };

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState({ name: '', price: '' });

  const fetchData = async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    setProducts(data);
  };

  const handleAdd = async () => {
    await fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify({ name: form.name, price: Number(form.price) }),
    });
    setForm({ name: '', price: '' });
    fetchData();
  };

  const handleDelete = async (id) => {
    await fetch(`/api/products/${id}`, { method: 'DELETE' });
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">CRUD Produk</h1>

      <input
        placeholder="Nama Produk"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="border p-1 mr-2"
      />
      <input
        placeholder="Harga"
        type="number"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
        className="border p-1 mr-2"
      />
      <button onClick={handleAdd} className="bg-blue-500 text-white px-3 py-1">
        Tambah
      </button>

      <ul className="mt-4">
        {products.map((p) => (
          <li key={p.id} className="flex justify-between py-1">
            {p.name} - Rp {p.price}
            <button onClick={() => handleDelete(p.id)} className="text-red-500">
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
