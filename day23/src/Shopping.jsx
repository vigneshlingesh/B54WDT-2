import React from 'react'

 function Shopping(cartItems, onRemoveFromCart) {
  return (
    <div>
      <div>
      <h2>Your Cart</h2>
            {cartItems.length === 0 ? <p>No items in the cart</p> : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button onClick={() => onRemoveFromCart(item)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
      </div>
    </div>
  )
}
export default Shopping