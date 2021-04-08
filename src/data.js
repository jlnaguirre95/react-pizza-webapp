import pizza1 from './assets/product-1.jpg';
import pizza2 from './assets/product-2.jpg';
import pizza3 from './assets/product-3.jpg';
import sweet1 from './assets/sweet-1.jpg';
import sweet2 from './assets/sweet-2.jpg';
import sweet3 from './assets/sweet-3.jpg';

const productsData = {
    pizzas: [
        {
            id: Math.random() * Math.random(),
            img_path: pizza1,
            name: 'Supreme Pizza',
            description:
                'Marinara sauce, basil, italian sausage, roma tomatoes, olives and pesto',
            price: 19.99
        },
        {
            id: Math.random() * Math.random(),
            img_path: pizza2,
            name: 'Hawaiian Paradise',
            description:
                'Marinara sauce, basil, italian sausage, roma tomatoes, olives and pesto',
            price: 16.99
        },
        {
            id: Math.random() * Math.random(),
            img_path: pizza3,
            name: 'Veggie Overload',
            description:
                'Marinara sauce, basil, italian sausage, roma tomatoes, olives and pesto',
            price: 14.99
        },
    ],
    desserts: [
        {
            id: Math.random() * Math.random(),
            img_path: sweet2,
            name: 'Doughlicious',
            description:
                'Belgian chocolate glazed donuts covered in icing with sprinkles on top',
            price: 9.99
        },
        {
            id: Math.random() * Math.random(),
            img_path: sweet3,
            name: 'Caramel Wonder',
            description:
                'Vanilla ice cream covered with caramel and chocolate glaze topped with a coco stick',
            price: 12.99
        },
        {
            id: Math.random() * Math.random(),
            img_path: sweet1,
            name: 'Brownie Bunch',
            description:
                'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
            price: 9.99
        },
    ],
};

export default productsData;
