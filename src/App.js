import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";

const TestPage = () => {
  return (
    <div>
      <h1>TEST PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/hats" component={TestPage} />
          <Route path="/hoodies" component={TestPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
