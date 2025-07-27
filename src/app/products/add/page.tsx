'use client';

import { useDispatch } from 'react-redux';
// Update the import path below to the correct relative path if your store file is located elsewhere
import { AppDispatch } from '../../../store/store';
import { useState } from 'react';
import { addProduct, Product } from '../../../store/productsSlice';

export default function Example() {
  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState<Omit<Product, 'id'>>({
    name: '',
    href: '#',
    imageSrc:
      'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: '',
    price: '',
    color: '',
    description: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct: Product = {
      id: Date.now(),
      ...formData,
    };

    console.log(newProduct);

    dispatch(addProduct(newProduct));

    setFormData({
      name: '',
      href: '#',
      imageSrc: '',
      imageAlt: '',
      price: '',
      color: '',
      description: '',
    });
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <form onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base/7 font-semibold text-gray-900">
                Personal Information
              </h2>
              <p className="mt-1 text-sm/6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Nama
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Harga
                  </label>
                  <div className="mt-2">
                    <input
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      type="number"
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Warna
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="color"
                      name="color"
                      autoComplete="country-name"
                      value={formData.color}
                      onChange={handleChange}
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option value="Merah">Merah</option>
                      <option value="Jingga">Jingga</option>
                      <option value="Kuning">Kuning</option>
                      <option value="Hijau">Hijau</option>
                      <option value="Biru">Biru</option>
                      <option value="Nila">Nila</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="street-address"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Deskripsi
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={4}
                      autoComplete="street-address"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm/6 font-semibold text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
