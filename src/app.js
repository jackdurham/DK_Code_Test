import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';


import Routes from './components/utility/routes';

class App extends React.Component {
  render() {
    return(
      <div>
        <Router>
          <Routes />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
