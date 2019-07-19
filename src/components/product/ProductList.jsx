import React from 'react';
import { connect } from 'react-redux';
import { isEmpty } from '../../utils';
import ProductItem from './ProductItem';
import styled from 'styled-components';

const Products = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0px;
`;

const ProductList = ({ product }) => {
  console.log('Hit me', product);

  let content;
  if (!product.loading) {
    if (isEmpty(product.products)) {
      content = <p>No Products were found</p>;
    } else {
      let ProductItems = product.products.map(p => {
        return <ProductItem product={p} />;
      });

      content = <Products>{ProductItems}</Products>;
    }
  } else {
    content = <p>Loading</p>;
  }

  return content;
};

const mapState = state => ({
  product: state.product
});

export default connect(mapState)(ProductList);
