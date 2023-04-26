import React from 'react';
import '../css/cartPage.css'
import '../components/CartItem'
import CartItem from '../components/CartItem';

const CartPage = () => {
  return (
    <div className='cartPage'>
      <div className='cartPage__left'>
        <h2>Shopping Cart</h2>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <div className='cartPage__right'>
        <div className='cartPage__info'>
          <p>Sub Total (0) items</p>
          <p>2000.00</p>
        </div>

        <div>
          <button>Check Out</button>
        </div>
      </div>

    </div>
  )
}

export default CartPage
