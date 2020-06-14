import React from 'react';

import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux'

import CartMenu from '../../pages/CartMenu/CartMenu'
import SearchMenu from '../../pages/SearchMenu/SearchMenu'
import Navbar from '../../components/Navbar/Navbar'
import Routes from '../../routes/Routes';


function App() {
  const { searchMenu,cartMenu } = useSelector(state => state.products)
  return (
    <div className="App" >
      <BrowserRouter>
        <Navbar />
        {searchMenu === true ? (<SearchMenu />) : ''}
        {cartMenu === true ? (<CartMenu />) : ''}
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
