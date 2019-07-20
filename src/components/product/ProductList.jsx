import React from 'react';
import { connect } from 'react-redux';
import { isEmpty } from '../../utils';
import ProductItem from './ProductItem';
import styled from 'styled-components';

const Products = styled.ul`
  display: grid;
  padding: 0px;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Loading = styled.p`
  font-size: 20px;
  text-align: center;
  margin: 120px 0px;
`;

const ProductList = ({ product }) => {
  // Create a content variable to change the content based selected products
  let content;
  if (!product.loading) {
    if (isEmpty(product.products)) {
      content = <p>No Products were found</p>;
    } else {
      // Loop through products and find the products that have the selected size
      let filteredProducts = product.products.filter(fp => {
        return fp.size.some(size => {
          return size === product.selectedSize;
        });
      });

      // If filtered products is empty set the filtered products to all products as a default
      // So when the page first loads all the products display
      if (isEmpty(filteredProducts)) {
        filteredProducts = product.products;
      }

      let ProductItems = filteredProducts.map(p => {
        return <ProductItem product={p} key={p.index} />;
      });

      content = <Products>{ProductItems}</Products>;
    }
  } else {
    // Inform the user that the products are loading
    content = <Loading>Loading..</Loading>;
  }
  return content;
};

const mapState = state => ({
  product: state.product
});

export default connect(mapState)(ProductList);
