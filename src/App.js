import React from 'react';
import {HashRouter} from 'react-router-dom';
import Header from './Components/Header/Header';
import './App.css';
import routes from './routes';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          {routes}
        </div>
      </HashRouter>
  
    );
  }
}

export default App;
