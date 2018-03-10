import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { Route } from 'react-router-dom';
import Header from './components/header';
import Homepage from './pages/Homepage';

const AppWrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`

injectGlobal`
  html {
    @media screen and (min-width: 350px) {
      font-size: 18px;
    }
    @media screen and (min-width: 400px) {
      font-size: 20px;
    }
    @media screen and (min-width: 450px) {
      font-size: 22px;
    }
    @media screen and (min-width: 500px) {
      font-size: 24px;
    }
  }
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header/>
        <Route exact path="/" component={Homepage}/>
      </AppWrapper>
    );
  }
}

export default App;
