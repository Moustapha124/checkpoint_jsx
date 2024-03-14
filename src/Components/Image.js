// src/Price.js
import React from 'react';
import product from './product.json';


function Image() {
return (
    <div>
    {product.map((element) => (
    <img style={{height:'200px',width:'100%'}} key={element.id} src={element.imageUrl} alt={element.nom} />
    ))}
    </div>
);
}

export default Image;
