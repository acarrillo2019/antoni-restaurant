import React from 'react';


import './Navbar.css';

function Navbar() {
  return (
    <nav className='app__navbar'>
      <div class="container">
        <a class="logo-container" href="/">
          <img src="" class="logo" alt="logo">
        </a>
        <div class="nav-items large">
          <div class="item-container item-lg">
            <li class="item">WHO WE ARE?</li>
          </div>
          <div class="item-container">
            <li class="item"><span class="txt">Location</span>
              <img src="" alt="down" class="down">
            </li>
            <ul class="item-dropdown"><li class="item-drop-ele">Blip</li>
              <li class="item-drop-ele">Bloop</li>
            </ul>
          </div>
          <div class="item-container">
            <li class="item"><span class="txt">SHOP</span>
              <img src="" alt="down" class="down">
            </li>
            <ul class="item-dropdown">
              <a class="item-drop-ele" href="/shop/filter">ghy</a>
              <a class="item-drop-ele" href="/shop/espresso">ESPRESSO</a>
              <a class="item-drop-ele" href="/shop/merchandise">MERCHANDISE</a>
            </ul>
          </div>
          <div class="item-container item-lg">
            <li class="item">CATERING</li>
          </div>
          <div class="item-container">
            <li class="item">CONTACT</li>
          </div>
          <div class="item-container">
            <li class="item">
              <img src="" alt="cart" class="cart">
                <span class="txt">CART</span>
            </li>
          </div>
          <div class="item-container item-md">
            <li class="item"><img src="" alt="user" class="user">
              <span class="txt">ACCOUNT</span>
            </li>
          </div>
        </div>
        <div class="nav-items small">
          <div class="item-container">
            <li class="item">
              <img src="" alt="shop-bag" class="icon">
            </li>
          </div>
          <div class="item-container">
            <li class="item">
              <img src="" alt="cart" class="icon">
            </li>
          </div>
          <div class="item-container">
            <li class="item">
              <img src="" alt="menu" class="icon">
            </li>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar