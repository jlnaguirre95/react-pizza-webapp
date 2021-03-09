import React from 'react';
//styled
import {
    ProductWrapper,
    ProductImg,
    ProductInfo,
    ProductBtn
} from './styled';

const ProductCard = ({ product }) => {
    return (
        <ProductWrapper>
            <ProductImg img_path={product.img_path} />
            <ProductInfo>
                <h1 className="product-name">{product.name}</h1>
                <p className="product-description">{product.description}</p>
                <span className="product-price"><small>$</small>{product.price}</span>
            </ProductInfo>
            <ProductBtn>Add to car</ProductBtn>
        </ProductWrapper>
    );
};

export default ProductCard;
