// import React from 'react';

// const Product = ({ productData }) => {
//   return (
//     <div>
      
//       {productData.map((product, index) => (
        
//         <div key={index} className="product-item">
//           <img src={product.productimage} alt={product.product_name}/>
//           <h3>{product.product_name}</h3>
//           <button className="add-to-cart" onClick={() => addToCart(product)}>
//             Add to Cart
//           </button>
//           <a href='/'></a>
//         </div>
//       ))}
//     </div>      
//   );
// }; 

// export default Product;
import React, { useState } from 'react';

const Product = ({ productData }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      {productData.map((product, index) => (
        <div key={index} className="product-item">
          <img src={product.productimage} alt={product.product_name} />
          <h3>{product.product_name}</h3>
          <button className="add-to-cart" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;
