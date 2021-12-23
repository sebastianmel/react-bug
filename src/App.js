import { BrowserRouter, Switch, Route } from "react-router-dom";
import Connection from "./pages/Connection";
import Home from "./pages/Home";
import Inscription from "./pages/Inscription";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>

          <Route path="/" exact component={Connection} />
          <Route path="/register" exact component={Inscription} />
          <Route path="/home" exact component={Home} />
          
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
