import React from 'react';
//styled
import { ProductsContainer } from './styled';
//components
import ProductCard from '../ProductCard';

const Products = ({ heading, products }) => {
    const mapProducts = products.map(product => (
        <ProductCard key={product.id} product={product} />
    ))

    return (
        <ProductsContainer>
            <h2>{heading}</h2>
            <div className="products">
                {mapProducts}
            </div>
        </ProductsContainer>
    );
};

export default Products;
