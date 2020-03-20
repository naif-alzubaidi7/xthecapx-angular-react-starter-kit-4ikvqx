import React from 'react';

import {products} from './products';

const ProductList = () => {
  const share = () => {
    window.alert('The product has been shared!');
  }

  return (
    <div className="product-list">
      <h2>Products</h2>
    </div>
  )
};

export default ProductList;