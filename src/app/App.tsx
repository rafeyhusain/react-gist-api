import React from 'react';
import styles from './App.module.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GistsPage from './pages/GistsPage/GistsPage';

function App(): JSX.Element {

  return (
    <Router>
      <div className={styles.App}>
      <Switch>
        <Route path="/:currency?" children={<GistsPage />} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
