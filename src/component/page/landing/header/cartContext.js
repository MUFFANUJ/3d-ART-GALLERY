import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const handleAddToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(cartItem => cartItem.title === item.title);
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.title === item.title ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                );
            }
            return [...prevCart, { ...item, quantity: 1 }];
        });
    };

    const handleIncrement = (item) => {
        setCart((prevCart) =>
            prevCart.map(cartItem =>
                cartItem.title === item.title ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            )
        );
    };

    const handleDecrement = (item) => {
        setCart((prevCart) =>
            prevCart.map(cartItem =>
                cartItem.title === item.title && cartItem.quantity > 1 ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
            )
        );
    };

    const handleDelete = (item) => {
        setCart(prevCart => prevCart.filter(cartItem => cartItem.title !== item.title));
    };

    return (
        <CartContext.Provider value={{ cart, handleAddToCart, handleIncrement, handleDecrement, handleDelete }}>
            {children}
        </CartContext.Provider>
    );
};
