import React from 'react';

function ProductDetails(props) {
    const { product, onSale, addToCart } = props;
    const { id, name, category, price, brand } = product;
    return (
        <div className='card'>
            {
                onSale ?
                    <p>onSale</p> : ""
            }
            <h5>{name}</h5>
            <p className='category'>{category}</p>
            <p>$ {price}</p>
            <p>{brand}</p>
            <button>view</button>
            <button onClick={addToCart}>add to cart</button>
        </div>
    );
}

export default ProductDetails;