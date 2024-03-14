// src/Name.js
import React from 'react';
import product from './product.json';

function Name() {
return (
    <div>
    {product.map((element) => (
        <h2 key={element.id}>{element.nom}</h2>
    ))}
    </div>
);
}

export default Name;

