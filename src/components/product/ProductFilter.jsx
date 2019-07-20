import React from 'react';
import { connect } from 'react-redux';
import { getSelectedProductSize } from './productActions';
import { isEmpty } from '../../utils';

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

    // if (selectedOptionCheck) {
    //   productSizeOptions.unshift(
    //     <option value="" disabled>
    //       Filter by size
    //     </option>
    //   );
    // } else {

    // }
  } else {
    // TODO: Display loading spinner?
  }

  console.log('product.selectedSize', product.selectedSize);

  return (
    <form>
      <select
        value={product.selectedSize}
        onChange={getSelectedProductSize}
      >
        {productSizeOptions && productSizeOptions}
        {/* <option value="0" disabled>
          Filter By Size
        </option>
        ;<option value="XS">Extra Small</option>;
        <option value="S">Small</option>;
        <option value="M">Medium</option>;
        <option value="L">Large</option>;
        <option value="XL">Extra Large</option>; */}
      </select>
    </form>
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
