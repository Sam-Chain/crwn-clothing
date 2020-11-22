import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100
    const publishKey = 'pk_test_51HRG8nFhjVJeEkuUhKXp1rW18rwLISFr8JiulcZ4RhKWAb8ov1XOKSDW5Podgd8To4HX51FijVfoyfwDschoJ2mp00XEt0GXMb'
    
    const onToken = token => {
        console.log(token);
        alert('payment successful')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN clothing'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $ ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishKey}
        />
    )
}

export default StripeCheckoutButton
