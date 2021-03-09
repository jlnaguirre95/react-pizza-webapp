import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
//data
import productsData from './data';
//components
import Hero from './components/Hero';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Hero />
          <Products heading="Choose your favorites" products={productsData.pizzas} />
        </Route>
        <Route exact path="/pizzas">
          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
