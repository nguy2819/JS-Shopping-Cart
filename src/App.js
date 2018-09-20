import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import AddItem from './AddItem';


const StyledHeader = styled.h1`
  font-family: Pinyon Script;
  color: #be8d62;
  font-size: 44px;
  text-align: center;
`;

const HeavyLine = styled.div`
    border-bottom: 3px solid black;
    border-color: #be8d62;
    padding: 2px;
    display: flex;
    justify-content: space-evenly;
`;

const Wrapper = styled.div`
    padding: 5px 0;
    border-bottom: 2px solid black;
    border-color: #be8d62;
    display: block;
    margin-top: 10px;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <HeavyLine>
            <StyledHeader>Shopping Cart</StyledHeader>
          </HeavyLine>
        </Wrapper>
        <AddItem />
      </div>
    );
  }
}

export default App;
