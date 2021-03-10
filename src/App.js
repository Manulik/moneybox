import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Form  from './components/form/Form';
import Test from './components/test/test';
import Menu from './components/Menu/menu';
import NewAim from './components/Menu/newAim/newAim';
import * as S from './App.styled';


const App = (props) => {
  return (
    <S.App>
      <h1>Moneybox</h1>
      <div>
        <BrowserRouter>
          <Route path="/form" render={() => <Form state={props.state} />} />
          <Route path="/test" render={() => <Test />} />
          <Route path="/menu" render={() => <Menu />} />
          <Route path="/newaim" render={() => <NewAim addAim={ props.addAim } state={ props.state } />} />
        </BrowserRouter>
      </div>
    </S.App>
  );
}

export default App;
