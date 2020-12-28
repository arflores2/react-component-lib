import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { OnsenPage } from './components/onsen/OnsenPage';
import { RebassPage } from './components/rebass/RebassPage';
import { ReactToolboxPage } from './components/react-toolbox/ReactToolboxPage';
import { GrommetPage } from './components/grommet/GrommetPage';
import { TailwindPage } from './components/tailwind/TailwindPage';
import { ReactMdPage } from './components/react-md/ReactMdPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>

            <Route path="/onsen">
              <OnsenPage />
            </Route>

            <Route path="/rebass">
              <RebassPage />   
            </Route>          
          
            <Route path="/react-toolbox">
              <ReactToolboxPage />
            </Route>

            <Route path="/grommet">
              <GrommetPage />   
            </Route>

            <Route path="/reactmd">
              <ReactMdPage />
            </Route>

            <Route path="/tailwind">
              <TailwindPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
