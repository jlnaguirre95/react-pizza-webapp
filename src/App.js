import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
//data
import productsData from './data';
//components
import Hero from './components/Hero';
import Products from './components/Products';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Order from './components/Order';
import OrderCount from './components/OrderCount';

function App() {
    const [orders, setOrders] = useState([]);

    const addOrder = (item, setIsInCart) => {
        setOrders([...orders, item]);
        setIsInCart(true);
        console.log('added');
    };

    const removeOrder = (id, setIsInCart) => {
        setOrders(orders.filter((order) => order.id !== id));
        setIsInCart(false);
        console.log('removed');
    };

    console.log(orders);

    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <Route exact path="/">
                    {orders.length > 0 && <OrderCount count={orders.length} />}
                    <Hero />
                    <Products
                        id="pizzas"
                        heading="Choose your favorites"
                        products={productsData.pizzas}
                        addOrder={addOrder}
                        removeOrder={removeOrder}
                    />
                    <Feature />
                    <Products
                        id="desserts"
                        heading="Sweet treats for you"
                        products={productsData.desserts}
                        addOrder={addOrder}
                        removeOrder={removeOrder}
                    />
                    <Footer />
                </Route>
                <Route exact path="/order">
                    <Order />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
