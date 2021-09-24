import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartItem from "../../components/cart-item/cart-item.componenet";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe.button.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span></span>
      </div>
      <div className="header-block">
        <span>Quantitiy</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={CartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">TOTAL: ${total}</div>
    <div className="Text-warning">
      *Test Credit Card*
      <br />
      4242 4242 4242 4242 Exp:01/24 CVC:123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
