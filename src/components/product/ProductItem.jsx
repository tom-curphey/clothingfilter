import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  list-style-type: none;
  border: 1px solid #f1f1f1;
  padding: 10px;
`;

const Image = styled.div`
  margin: 10px;

  img {
    height: auto;
    max-width: 100%;
  }
`;

const SalesBadge = styled.div`
  height: 50px;
  width: 100%;

  span {
    background-color: ${props => props.theme.backgroundColor};
    height: 50px;
    display: inline-flex;
    align-items: center;
    padding: 0px 22px;
    color: #fff;
  }
`;
// Define what backgroundColor theme will look like
const theme = {
  backgroundColor: 'transparent'
};

const ProductDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  margin-top: 10px;
  grid-gap: 10px;

  span:first-child {
    font-size: 20px;
  }

  span:last-child {
    font-size: 30px;
    text-align: right;
  }
`;

const ProductItem = ({ product }) => {
  let SalesBadgeLabel = <SalesBadge />;
  // Will it ever be both?
  if (product.isExclusive) {
    SalesBadgeLabel = (
      <SalesBadge theme={{ backgroundColor: 'green' }}>
        <span>Exclusive</span>
      </SalesBadge>
    );
  }
  if (product.isSale) {
    SalesBadgeLabel = (
      <SalesBadge theme={{ backgroundColor: 'red' }}>
        <span>Sale</span>
      </SalesBadge>
    );
  }

  return (
    <Item>
      <Image>
        <img src="https://placeimg.com/500/500/any" alt="any" />
      </Image>
      {SalesBadgeLabel && SalesBadgeLabel}
      <ProductDetails>
        <span>{product.productName}</span>
        <span>{product.price}</span>
      </ProductDetails>
    </Item>
  );
};

export default ProductItem;
