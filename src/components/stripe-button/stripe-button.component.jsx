import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_q2TYHndRN2IdrxanHHqGeTZu';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }  

    return (
        <StripeCheckout
            label= 'Pay Now'
            name='Royal Clothing'
            billingAddress
            shippingAddress
            image=''
            currency='AUD'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            bitcoin
        />
    )
};

export default StripeCheckoutButton;
