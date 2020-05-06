import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import All from './all.js';
import Country from './country.js';



class App extends React.Component {





  render() {
    return (
          <div>
             <BrowserRouter>
              <div>
                <Switch>
                 <Route path="/" component={All} exact/>
                 <Route path="/country" component={Country} exact/>

                </Switch>
              </div>
            </BrowserRouter>
          </div>
    );
  }
}

export default App;
