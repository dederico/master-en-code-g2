import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header'
import Section from './components/Section'
import Buttonfunction from './components/Button'
class App extends React.Component {
  render() {
    return (

      <div className="app">
        <Router>
          <Header />

          <Switch>
            <main className="container mt-4" >
              <Section />

              <Buttonfunction />
            </main>

          </Switch>
        </Router>
      </div>

    );
  }

}
export default App;
