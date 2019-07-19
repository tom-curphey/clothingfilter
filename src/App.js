import React from 'react';
import styled from 'styled-components';

const Page = styled.section`
  max-width: 1320px;
  margin: 0 auto;
`;

const Header = styled.section`
  background-color: #def1f4;
  padding: 10px;
  height: 60px;
  display: grid;
  grid-template-columns: auto 200px;
`;

function App() {
  return (
    <Page>
      <Header>
        <h1>Women's Tops</h1>
        <form>
          <input type="text" placeholder="filter by size" />
        </form>
      </Header>
    </Page>
  );
}

export default App;
