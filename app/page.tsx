'use client';

import { useState } from 'react';

export default function Home() {
  const initialProducts = [
    { name: 'iPhone 16 pro', price: 39900, quantity: 0 },
    { name: 'iPhone 16', price: 29900, quantity: 0 },
    { name: 'iPhone 16e', price: 26900, quantity: 0 },
    { name: 'iPad', price: 12900, quantity: 0 },
    { name: 'iPad Air', price: 21900, quantity: 0 },
    { name: 'iPad Pro', price: 37900, quantity: 0 },
  ];

  const [products, setProducts] = useState(initialProducts);

  const handleIncrease = (index: number) => {
    const newProducts = [...products];
    newProducts[index].quantity += 1;
    setProducts(newProducts);
  };

  const handleDecrease = (index: number) => {
    const newProducts = [...products];
    if (newProducts[index].quantity > 0) {
      newProducts[index].quantity -= 1;
      setProducts(newProducts);
    }
  };

  const handleReset = () => {
    const newProducts = products.map(product => ({ ...product, quantity: 0 }));
    setProducts(newProducts);
  };

  const totalQuantity = products.reduce((sum, p) => sum + p.quantity, 0);
  const totalPrice = products.reduce((sum, p) => sum + p.quantity * p.price, 0);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">ตะกร้าสินค้า iPhone</h1>
      <ul className="space-y-4">
        {products.map((product, index) => (
          <li key={product.name} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p>ราคา: {product.price.toLocaleString()} บาท</p>
            <div className="flex items-center space-x-2 mt-2">
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded"
                onClick={() => handleDecrease(index)}
              >
                -
              </button>
              <span>{product.quantity}</span>
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded"
                onClick={() => handleIncrease(index)}
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t pt-4">
        <p className="text-lg">รวมจำนวน: {totalQuantity} เครื่อง</p>
        <p className="text-lg">ราคารวม: {totalPrice.toLocaleString()} บาท</p>
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleReset}
        >
          ล้างตะกร้า
        </button>
      </div>
    </main>
  );
}
