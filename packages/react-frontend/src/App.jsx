import './App.css'
//import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from "./home"

function App() {
  return (
    <Home />
    // <Router>
    //   <Switch>
    //     <Route exact path="/">
    //       <Redirect to="/home" />
    //     </Route>
    //     <Route path="/home">
    //       <Home />
    //     </Route>
    //     {/* other routes */}
    //   </Switch>
    // </Router>
  );
}

export default App;
