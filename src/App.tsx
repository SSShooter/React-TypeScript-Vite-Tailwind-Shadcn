import { Route, Switch } from "wouter";
import './App.css';
import MindmapEdit from "./views/MindmapEdit";

const App = () => (
  <>
    {/* <Link href="/users/1">Profile</Link> */}

    {/* <Route path="/about">About Us</Route> */}

    {/* 
      Routes below are matched exclusively -
      the first matched route gets rendered
    */}
    <Switch>
      <Route path="/edit" component={MindmapEdit} /> 
      {/* Default route in a switch */}
      <Route>404: No such page!</Route>
    </Switch>
  </>
);

export default App
