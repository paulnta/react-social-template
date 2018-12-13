import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PageHome from './routes/PageHome';
import PageLogin from './routes/PageLogin';
import PageProfile from './routes/PageProfile';
import PageSignUp from './routes/PageSignUp';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={PageHome} />
        <Route path="/login" component={PageLogin} />
        <Route path="/sign-up" component={PageSignUp} />
        <Route path="/profile/:username" component={PageProfile} />
      </Switch>
    );
  }
}

export default App;
