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

const ProductList = ({ product }) => {
  console.log('Hit me', product);

  let content;
  if (!product.loading) {
    if (isEmpty(product.products)) {
      content = <p>No Products were found</p>;
    } else {
      let ProductItems = product.products.map(p => {
        return <ProductItem product={p} key={p.index} />;
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
