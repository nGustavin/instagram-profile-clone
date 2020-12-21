import Wrapper from './components/Wrapper'
import GlobalStyle from './styles/GlobalStyles'
import Header from './components/Header/index'
import {Landing} from './styles/landing'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Landing>
        <Header/>
        <Wrapper>
          <h1>alo</h1>
        </Wrapper>
      </Landing>
    </div>
  );
}

export default App;
