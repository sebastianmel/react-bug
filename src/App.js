import { BrowserRouter, Switch, Route } from "react-router-dom";
import ToDo from "./components/ToDo";
import Add from "./pages/Add";
import Connection from "./pages/Connection";
import Home from "./pages/Home";
import HomeToDo from "./pages/HomeToDo";
import Inscription from "./pages/Inscription";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>

          <Route path="/" exact component={Connection} />
          <Route path="/register" exact component={Inscription} />
          <Route path="/home" exact component={Home} />
          <Route path="/add" exact component={Add}/>
          <Route path="/home/todo" exact component={HomeToDo}/>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
