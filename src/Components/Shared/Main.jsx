import React, { Component } from 'react'; 
import MovieList from '../MovieList/MovieList';

class Main extends Component {
    constructor(props){
      super(props);
      this.state = {
        isAuthenticated:  props.isAuthenticated
      }
    }

    render(){
        return(
            <div className="container">
            Movies
                <MovieList />
                
            </div>
        );
    }
}

export default Main;

{/* 
    
                <Switch>
                    <Route exact path="/" Component={LoginForm} />
                    <Route path="/main" Component={MovieList} />
                </Switch>
                
    
    <Route path="/" render={()=>(
    this.state.isAuthenticated ?
        <Redirect to="/main" push/>
   :
        <LoginForm actionUrl="/main" />
    
)} />

<Route  path="/main" render={() => (
        this.state.isAuthenticated ? 
           <MovieList />
         : 
            <Redirect to="/"/>
        
        )}/>

<Redirect to='/' /> */}