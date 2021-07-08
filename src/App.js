import './App.css';
import Story from './components/storyPage/storyPage'
import HeaderBar from './components/headerBar/headerBar';
import {Component} from "react";
import {BrowserRouter, Link, Route, Router, Switch} from "react-router-dom";
import Stories from "./components/stories/stories"
import storiesStorage from "./components/storage/storiesStorage";

export default class App extends Component{

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <BrowserRouter>
              <div className="App">
                <HeaderBar/>
                  <Switch>
                      <Route path={"/story/:id"}>
                          <Story/>
                      </Route>
                      <Route exact path={"/"}>
                          <Stories/>
                      </Route>
                  </Switch>
              </div>
            </BrowserRouter>
        );
    }
}

// export default App;