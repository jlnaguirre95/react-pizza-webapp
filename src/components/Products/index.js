import React from 'react';
//styled
import { ProductsContainer } from './styled';
//components
import ProductCard from '../ProductCard';

const Products = ({ id, heading, products, addOrder, removeOrder }) => {
    const mapProducts = products.map((product) => (
        <ProductCard
            key={product.id}
            product={product}
            addOrder={addOrder}
            removeOrder={removeOrder}
        />
    ));

    return (
        <ProductsContainer name={id}>
            <h2>{heading}</h2>
            <div className="products">{mapProducts}</div>
        </ProductsContainer>
    );
};

export default Products;
