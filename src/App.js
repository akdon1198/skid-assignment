import UserPage from "./pages/UserPage";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import UserUpdate from "./pages/UserUpdate";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><UserPage/></Route>
        <Route path="/userupdate/:id"><UserUpdate/></Route>
      </Switch>
    </Router>
  );
}

export default App;
