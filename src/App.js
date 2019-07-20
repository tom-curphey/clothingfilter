import React, { useEffect } from 'react';
import styled from 'styled-components';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { loadProducts } from './components/product/productActions';

// Components
import ProductFilter from './components/product/ProductFilter';
import ProductList from './components/product/ProductList';

// Styled Components
const Page = styled.section`
  max-width: 960px;
  margin: 0 auto;
`;

const Header = styled.section`
  background-color: #def1f4;
  padding: 10px;
  margin-top: 40px;
  display: grid;
  grid-template-columns: auto 200px;

  h1 {
    font-size: 30px;
    margin: 0px;
    display: flex;
    align-items: center;
  }
`;

const App = () => {
  // Call load products on initial load
  useEffect(() => {
    store.dispatch(loadProducts());
  }, []);
  return (
    <Provider store={store}>
      <Page>
        <Header>
          <h1>Women's tops</h1>
          <ProductFilter />
        </Header>
        <ProductList />
      </Page>
    </Provider>
  );
};

export default App;
