import React, { Component } from 'react';
import Movie from '../Movie/Movie';

class MovieList extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies: props.hits
        };

    }

    render(){
        return(
            <div>
                <div>
                    {this.state.movies.map(movie=> 
                        <Movie content={movie._source} key={movie._id} id={movie._id} />
                    )}
                </div>
            </div>
        );
    }
}

export default MovieList;