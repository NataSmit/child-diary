import "./App.css";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import StartingPage from "./components/StartingPage/StartingPage";
import Measure from "./components/Measure/Measure";
import Vaccination from "./components/Vaccination/Vaccination";
import Illness from "./components/Illness/Illness";
import Events from "./components/Events/Events";

function App() {
  const { path, url } = useRouteMatch();
  console.log("App path:", path);
  console.log("App url:", url);

  return (
    <div className="wrapper">
      <div className="root">
        <Switch>
          <Route exact path="/">
            <StartingPage />
          </Route>

          <Route exact path="/measure">
            <Measure />
          </Route>
          <Route exact path="/vaccination">
            <Vaccination />
          </Route>
          <Route exact path="/events">
            <Events />
          </Route>
          <Route exact path="/illness">
            <Illness />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
