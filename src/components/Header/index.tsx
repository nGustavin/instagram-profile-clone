import {Container} from './styles'
import React from 'react';

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
        <Container>
          <div className="logo">
            <h1>Instagram</h1>
          </div>
          <input type="text"/>
          <div className="buttons">
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
          </div>
        </Container>
    );
}

export default Header;