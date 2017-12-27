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
                        <Movie title={movie._source.title} cover={movie._source.cover} userRating={movie._source.userRating} favorite={movie._source.title} key={movie._id} />
                    )}
                </div>
            </div>
        );
    }
}

export default MovieList;