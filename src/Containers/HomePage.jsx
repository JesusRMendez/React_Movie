import React, { Component } from 'react'; 
import MovieSearch from '../Components/MovieSearch/MovieSearch';


class HomePage extends Component {
    constructor(props){
      super(props);
      this.state = {
        isAuthenticated:  props.isAuthenticated
      }
    }

    render(){
        return(
            <div className="container">
                <div className="col-md-12">
                    <MovieSearch elasticUrl="http://localhost:9200/movies/movie/" />
                </div>
            </div>
        );
    }
}

export default HomePage;
