import React, { useState, useEffect } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import './navbar.css';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleIncrement = (item) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.title === item.title ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      )
    );
  };

  const handleDecrement = (item) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.title === item.title && cartItem.quantity > 1 ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      )
    );
  };

  const handleDelete = (item) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.title !== item.title));
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000); // Toast shows for 2 seconds
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleBuyNow = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        clearCart();
      }, 2000); // Toast shows for 2 seconds after purchase
    }, 2000); // Simulate a delay for the purchase
  };

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  return (
    <div>
      <nav className='header'>
        <img src='/assests/images/mainlogo.png' alt='Kalakriti' className='logo' />
        <div className='nav-icons'>
          <div className='nav-icon'>
            <SignedOut>
              <SignInButton style={{
                backgroundColor: '#f0f0f0',
                color: '#333',
                padding: '5px 10px',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px'
              }} />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          <div className='nav-icon' onClick={() => {setIsCartOpen(!isCartOpen);}}>
            <IoCartOutline />
            <span>Cart {cart.length}</span>

          </div>
        </div>
      </nav>
      {isCartOpen && (
        <div
          className="cart"
          style={{
            position: "absolute",
            top: 60,
            right: 20,
            zIndex:10,
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            border: "1px solid #ddd",
            fontFamily: "Arial, sans-serif",
            width: "300px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3
              style={{
                margin: 0,
                paddingBottom: "10px",
                borderBottom: "1px solid #ddd",
                fontSize: "18px",
                color: "#333",
              }}
            >
              Your Cart
            </h3>
            <button
              style={{
                cursor: "pointer",
                background: "black",
                borderRadius: "20px",
                borderWidth: "10px",
                borderStyle: "solid",
                borderColor: "white",
                fontSize: "20px",
                color: "white",
                padding: "2px 10px",
              }}
              onClick={() => setIsCartOpen(false)}
            >
              &times;
            </button>
          </div>

          {cart.length === 0 ? (
            <p style={{ marginTop: "10px", color: "#777" }}>No items in cart</p>
          ) : (
            <ul
              style={{ padding: 0, listStyleType: "none", marginTop: "15px" }}
            >
              {cart.map((item, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: "15px",
                    paddingBottom: "10px",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                      {item.title}
                    </span>
                    <span style={{ color: "#888" }}>
                      {item.price} x {item.quantity}
                    </span>
                  </div>

                  <div
                    style={{
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <button
                        style={{
                          padding: "5px 10px",
                          fontSize: "16px",
                          borderRadius: "5px",
                          backgroundColor: "black",
                          border: "1px solid #ccc",
                          cursor: "pointer",
                          marginRight: "10px",
                        }}
                        onClick={() => handleDecrement(item)}
                      >
                        -
                      </button>
                      <button
                        style={{
                          padding: "5px 10px",
                          fontSize: "16px",
                          borderRadius: "5px",
                          backgroundColor: "black",
                          border: "1px solid #ccc",
                          cursor: "pointer",
                          marginRight: "10px",
                        }}
                        onClick={() => handleIncrement(item)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      style={{
                        padding: "5px 10px",
                        fontSize: "14px",
                        borderRadius: "5px",
                        backgroundColor: "black",
                        border: "none",
                        color: "white",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDelete(item)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div
            style={{
              marginTop: "15px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 0",
            }}
          >
            <span style={{ fontWeight: 'bold', fontSize: '16px' }}>
              Total: ${calculateTotal()}
            </span>
            {isLoading ? (
              <div>Loading...</div>
            ) : showToast ? (
              <span style={{ color: "#4CAF50", fontSize: "16px" }}>
                Payment Successful
              </span>
            ) : (
              <button
                style={{
                  padding: "8px 16px",
                  fontSize: "16px",
                  borderRadius: "5px",
                  backgroundColor: "#909090",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={handleBuyNow}
                disabled={cart.length === 0}
              >
                Buy Now
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
