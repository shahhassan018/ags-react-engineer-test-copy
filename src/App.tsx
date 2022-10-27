import { FC } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyle';
import Topbar from './components/Topbar';
import SearchBar from './components/Searchbar/Searchbar';

const Main = styled.main`
  display: grid;
  grid-template-columns: 80px 1fr;
  
  > article {
    padding: ${({ theme }) => theme.size24} ${({ theme }) => theme.size40};
  }
`;

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Navbar />
        <article>
          <Topbar />
          <SearchBar />
        </article>
      </Main>
    </>
  );
}

export default App;
