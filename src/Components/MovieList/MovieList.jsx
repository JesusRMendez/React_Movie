import React, { Component } from 'react';
import Movie from '../Movie/Movie';

class MovieList extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies: [ 
                {
                    id:1,
                    title: "Star Wars: The Last Jedi (2017)",
                    description: "",
                    cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_UY67_CR0,0,45,67_AL_.jpg",
                    userRating: 7.6

                }, {
                    id:2,
                    title: "Bright (2017)",
                    description: "",
                    cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcyNzk5NDg1Nl5BMl5BanBnXkFtZTgwNTM5MDQxNDM@._V1_UY67_CR0,0,45,67_AL_.jpg",
                    userRating: 6.7
                }, 
                { 
                    id:3,
                    title: "Justice League (2017)",
                    description: "",
                    cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BYWVhZjZkYTItOGIwYS00NmRkLWJlYjctMWM0ZjFmMDU4ZjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
                    userRating: 7.1
                }
            ]
        };
    }

    render(){
        return(
            <div>
                {this.state.movies.map(movie=> 
                    <Movie title={movie.title} cover={movie.cover} userRating={movie.userRating} favorite={movie.title} key={movie.id} />
                )}
            </div>
        );
    }
}

export default MovieList;