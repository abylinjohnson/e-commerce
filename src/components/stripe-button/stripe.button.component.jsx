import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStipe = price * 100;
  const publishableKey =
    "pk_test_51Jd9V6SDrZig8oeiAJBl54I2ep5pMzhAuQOnFa3r3uMmFi9otZ5licnjHoq4X7OMy4r5WCqLBYtvz2h0TfU6c2O700WYVQbQXP";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successfull!");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="E-commerce"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStipe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
