import React, { Component } from 'react'; 
import HomePage from './HomePage';
import DetailPage from './DetailPage';
import { Switch, Route } from 'react-router';


class Main extends Component {
    constructor(props){
      super(props);
      this.state = {
        isAuthenticated:  props.isAuthenticated
      }
    }

    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path='/movie/:id' component={DetailPage} />
                </Switch>
            </div>
        );
    }
}

export default Main;