import React from 'react';
import { connect } from 'react-redux';
import { getSelectedProductSize } from './productActions';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  align-items: center;

  select {
    width: 150px;
  }
`;

const ProductFilter = ({ product, getSelectedProductSize }) => {
  let productSizeOptions;
  let selectedOptionCheck = false;
  let sizeOtionsArray = [
    {
      label: 'Extra Small',
      value: 'XS'
    },
    {
      label: 'Small',
      value: 'S'
    },
    {
      label: 'Medium',
      value: 'M'
    },
    {
      label: 'Large',
      value: 'L'
    },
    {
      label: 'Extra Large',
      value: 'XL'
    }
  ];

  if (!product.loading) {
    productSizeOptions = sizeOtionsArray.map(soa => {
      if (soa.value === product.selectedSize) {
        selectedOptionCheck = true;
        return (
          <option key={soa.value} value={soa.value}>
            {soa.label}
          </option>
        );
      } else {
        return (
          <option key={soa.value} value={soa.value}>
            {soa.label}
          </option>
        );
      }
    });

    productSizeOptions.unshift(
      <option key="x" value="default" disabled>
        Filter by size
      </option>
    );
  } else {
    // TODO: Display loading spinner?
  }

  console.log('product.selectedSize', product.selectedSize);

  return (
    <Form>
      <select
        value={product.selectedSize}
        onChange={getSelectedProductSize}
      >
        {productSizeOptions && productSizeOptions}
      </select>
    </Form>
  );
};

const actions = {
  getSelectedProductSize
};

const mapState = state => ({
  product: state.product
});

export default connect(
  mapState,
  actions
)(ProductFilter);
