import styled from 'styled-components';

export const ProductsContainer = styled.section`
    min-height: 100vh;
    padding: 5rem 2rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: clamp(3rem, 5vw, 4rem);
        margin-bottom: 2rem;
    }

    .products {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;