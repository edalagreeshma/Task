import React, { useState } from 'react';

const AdminSection = () => {
  const [product, setProduct] = useState({
    name: 'Black Tea',
    description: 'A fully oxidized tea with a bold and robust flavor.',
    strength: 'Strong',
    price: '150',
    image: 'https://source.unsplash.com/960x520/?Tea,black%20tea',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add your logic here to handle the form submission and save the product details
    console.log('Product:', product);
  };

  return (
    <div className="admin-section">
      <h2>Add New Product</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={product.name} onChange={handleInputChange} required />
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={product.description} onChange={handleInputChange} required></textarea>
        <label htmlFor="origin">Origin:</label>
        <input type="text" id="origin" name="origin" value={product.origin} onChange={handleInputChange} required />
        <label htmlFor="strength">Strength:</label>
        <input type="text" id="strength" name="strength" value={product.strength} onChange={handleInputChange} required />
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" value={product.price} onChange={handleInputChange} required />
        <label htmlFor="image">Image URL:</label>
        <input type="text" id="image" name="image" value={product.image} onChange={handleInputChange} required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AdminSection;
