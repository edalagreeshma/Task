import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Sidebar from './components/sidebar';
import Dashboard from './components/dashboard';
import Product from './components/product';
import AdminSection from './components/adminsection'; 
import './App.css';

const App = () => {
  const [productData, setProductData] = useState([]);

  const getProductData = () => {
    
    const fetchedProductData = [
      {
        "product_name": "coffee",
        "productimage": "https://images.pexels.com/photos/5337513/pexels-photo-5337513.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      },
      {
        "product_name": "Tea",
        "productimage": "https://media.istockphoto.com/id/1477252240/photo/two-glasses-also-known-as-cuttings-filled-with-at-tea-vendor-used-selective-focus.jpg?s=612x612&w=0&k=20&c=a5aFLm2rfnHuMj0VHTjEMXhmvHgaIxSCQtdOqrau3BY="
      },
      {
        "product_name": "black-coffee",
        "productimage": "https://media.istockphoto.com/id/1189160691/photo/coffee.jpg?s=612x612&w=0&k=20&c=yBaqI9jHnyjwrxEZxLSCh4s4I7Z-uysuFpGBQR-ckBc="
      },
      {
        "product_name": "ginger-tea",
        "productimage": "https://media.istockphoto.com/id/1385194165/photo/two-glasses-of-coffee-with-milk-and-turmeric-on-a-dark-background.jpg?s=612x612&w=0&k=20&c=G67sJA2EAIjVmkRisL5Ov2Nxa5RwA-4MZKp3LfFupIo="
      }
    ];

    setProductData(fetchedProductData);
  };

  return (
    <Router>
      <div className="app">
        <Sidebar getProductData={getProductData} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/product" element={<Product productData={productData} />} />
            <Route path="/admin" element={<AdminSection />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
