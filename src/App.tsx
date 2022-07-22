import { FC, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyle';
import Topbar from './components/Topbar';

const Main = styled.main`
  display: grid;
  grid-template-columns: 80px 1fr;
  
  > article {
    padding: ${({ theme }) => theme.size24} ${({ theme }) => theme.size40};
  }
`;

const App: FC = () => {
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.post('https://62d589de15ad24cbf2c93551.mockapi.io/api/v1/products');
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Main>
        <Navbar />
        <article>
          <Topbar />
        </article>
      </Main>
    </>
  );
}

export default App;
