import React, { useState, useEffect } from 'react';
import './AdminAddProduct.css';
import ENDPOINT from '../../../helpers/constants';

const AdminAddProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        imageUrl:'',
        stock:''
    });

    const [products, setProducts] = useState([]);
   
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch(`${ENDPOINT}/api/products/`);
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        console.log("this is the product data -> ",product);
        e.preventDefault();
        try {
            const response = await fetch(`${ENDPOINT}/api/products/product`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });

            if (response.ok) {
                alert('Product added successfully!');
                setProduct({ name: '', description: '', price: '', category: '',imageUrl:'',stock:'' }); 
                fetchProducts(); 
            } else {
                alert('Failed to add product');
            }
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Failed to add product');
        }
    };

    return (
        <div className="admin-add-product">
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit} className="product-form">
                <div className="form-group">
                    <label htmlFor="name">Product Name</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Stock">Stock</label>
                    <input
                        type="number"
                        name="stock"
                        value={product.stock}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input
                        type="text"
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ImageUrl">ImageUrl</label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={product.imageUrl}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Add Product</button>
            </form>

            <hr />
            <h3>Product List</h3>
            {products.length > 0 ? (
                <div className="product-list">
                    {products.map((item) => (
                        <div key={item.id} className="product-item">
                            <h4>{item.name}</h4>
                            <p>Description: {item.description}</p>
                            <p>Price: ${item.price}</p>
                            <p>Category: {item.category}</p>
                            <p>Quantity: {item.stock}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No products found in the database.</p>
            )}
        </div>
    );
};

export default AdminAddProduct;
