import pizza1 from './assets/product-1.jpg';
import pizza2 from './assets/product-2.jpg';
import pizza3 from './assets/product-3.jpg';

const productsData = {
    pizzas: [
        {
            id: 1,   
            img_path: pizza1,
            name: 'Supreme Pizza',
            description: 'Marinara sauce, basil, italian sausage, roma tomatoes, olives and pesto',
            price: '19.99'
        },
        {
            id: 2,
            img_path: pizza2,
            name: 'Hawaiian Paradise',
            description: 'Marinara sauce, basil, italian sausage, roma tomatoes, olives and pesto',
            price: '16.99' 
        },
        {
            id: 3,
            img_path: pizza3,
            name: 'Veggie Overload',
            description: 'Marinara sauce, basil, italian sausage, roma tomatoes, olives and pesto',
            price: '14.99' 
        }
    ]
}

export default productsData;