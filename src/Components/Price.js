// src/Price.js
import React from 'react';
import product from './product.json';

function Price() {
return(
    <div>
    {product.map((element) => (
        <h2 key={element.id}>{element.prix}</h2>
    ))}
    </div>
);
}

export default Price;
