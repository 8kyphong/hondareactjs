import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/HomeTemplate'
import ListKhachHang from './components/ListKhachHang';
import TrangChu from './components/TrangChu';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Home exact path='/' Component={TrangChu} />

          <Route exact path="/khachhang" component={ListKhachHang} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
