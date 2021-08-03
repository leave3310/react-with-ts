import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import 'regenerator-runtime/runtime'
import 'core-js/stable'

import Home from './views/Home'
import About from './views/About'
import Menu from './components/Menu'
import NotFound from './views/NotFound'
import News from './views/News'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Menu></Menu>
      <Switch>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route path="/news" component={News}></Route>
        <Route path="/" component={NotFound}></Route>
      </Switch>
    </HashRouter>
  </Provider>
  
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
