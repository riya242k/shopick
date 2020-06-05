import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Components/Home';
import Add from './Components/Add';
import Edit from './Components/Edit'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <div>
      <Home />
      <Switch>
          <Route exact path="/add" render={()=>( <div >  < Add /> </div> )} />
          <Route exact path="/edit" render={()=>(<div > < Edit /> </div> )} />
      </Switch>
    </div>
    </BrowserRouter>
    {/* <Home />
    <Add />
    <Edit /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
