import React from 'react';
import './App.css';
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import context from './utils/Context'
import {BrowserRouter} from 'react-router-dom'
import Principal from './Principal'

function App() {
  const { Provider } = context;

  const [state, setState] = React.useState({
      dado:0.0 //este dado aqui é apenas um exemplo, mas o estado sera construido com as 
                //informacoes que se dejesa passar para toda a aplicacao
   });

  return (
    <Provider
        value={{
          state
        }}
      >
        <BrowserRouter>
          <Principal />
        </BrowserRouter>
      </Provider>
  );
}

export default App;
