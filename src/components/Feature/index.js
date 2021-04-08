import React from 'react';
import { useHistory } from 'react-router-dom';
//styled
import { FeatureContainer, FeatureBtn } from './styled';

const Feature = () => {
    const history = useHistory();
    
    return (
        <FeatureContainer>
            <h1>Pizza of the day</h1>
            <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
            <FeatureBtn onClick={() => history.push('/order')}>Order Now</FeatureBtn>
        </FeatureContainer>
    );
};

export default Feature;
