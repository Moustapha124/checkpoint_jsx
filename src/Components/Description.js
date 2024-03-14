// src/Description.js
import React from 'react';
import product from './product.json';

function Description() {
return(
    <div>
    {product.map((element) => (
        <h2 key={element.id}>{element.description}</h2>
    ))}
    </div>
);
}

export default Description;
