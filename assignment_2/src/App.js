import "./App.css";
import { Employee } from "./employee";
import { EmpDetails } from "./empDetails";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//store.subscribe(() => console.log(store.getState()));

function App() {
  return (
    <Router>
      <div className="App">
        <Provider store={store}>
          <Switch>
            <Route path="/:id" extact component={EmpDetails} />
            <Route path="/" extact component={Employee} />
          </Switch>
        </Provider>
      </div>
    </Router>
  );
}

export default App;
