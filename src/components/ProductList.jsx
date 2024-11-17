import React, { useState } from 'react';
import ProductDetails from './ProductDetails';

function ProductList(props) {
    const data = [
        { id: 1, category: "Mobile", name: "Samsung Galaxy", price: 25000, brand: "Samsung" },
        { id: 2, category: "Laptop", name: "HP Pavillion", price: 90000, brand: "HP" },
        { id: 3, category: "Mobile", name: "Iphone 15", price: 120000, brand: "Apple" },
        { id: 4, category: "Laptop", name: "Dell Insipiron", price: 60000, brand: "Dell" },
        { id: 5, category: "Mobile", name: "One Plus 11", price: 65000, brand: "One Plus" }
    ];

    const [products, setProducts] = useState(data);

    const addToCart = () => {
        alert("Item Added in Cart");
    }

    return (
        <div className='container'>
            <div className="row">
                {
                    products.map((item) => {
                        return (
                            <ProductDetails key={item.id} product={item} addToCart={addToCart} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ProductList;