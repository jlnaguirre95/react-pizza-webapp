import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
//components
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Hero />
        </Route>
        <Route exact path="/another">
          Another Page
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
