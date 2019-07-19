import React, { useEffect } from 'react';
import styled from 'styled-components';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { loadProducts } from './components/product/productActions';

// Components
import ProductList from './components/product/ProductList';

const Page = styled.section`
  max-width: 960px;
  margin: 0 auto;
`;

const Header = styled.section`
  background-color: #def1f4;
  padding: 10px;
  height: 60px;
  display: grid;
  grid-template-columns: auto 200px;
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
          <h1>Women's Tops</h1>
          <form>
            <input type="text" placeholder="filter by size" />
          </form>
        </Header>
        <ProductList />
      </Page>
    </Provider>
  );
};

export default App;
