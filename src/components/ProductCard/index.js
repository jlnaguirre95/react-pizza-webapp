import React, { useState } from 'react';
//styled
import { ProductWrapper, ProductImg, ProductInfo, ProductBtn } from './styled';

const ProductCard = ({ product, addOrder, removeOrder }) => {
    const [isInCart, setIsInCart] = useState(false);

    return (
        <ProductWrapper>
            <ProductImg img_path={product.img_path} />
            <ProductInfo>
                <h1 className="product-name">{product.name}</h1>
                <p className="product-description">{product.description}</p>
                <span className="product-price">
                    <small>$</small>
                    {product.price}
                </span>
            </ProductInfo>
            <ProductBtn
                onClick={
                    isInCart
                        ? () => removeOrder(product.id, setIsInCart)
                        : () => addOrder(product, setIsInCart)
                }
            >
                {isInCart ? 'Remove from cart' : 'Add to cart'}
            </ProductBtn>
        </ProductWrapper>
    );
};

export default ProductCard;
