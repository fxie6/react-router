import "./App.css";
import About from "./components/About";
import Shop from "./components/Shop";
import Nav from "./components/Nav";
import Home from "./components/Home";
import ItemDetails from "./components/ItemDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
