import React,  { Component } from 'react';
import "./Movie.css";

class Movie extends Component {
    constructor(props){
        super(props);
        let movie = props.content;
        this.state = {
            title: movie.title,
            cover: movie.cover,
            userRating: movie.userRating,
            favorite: movie.favorite,
            id: props.id
        };
    }
    render(){
        return(
            <div>
                {/* <a href={"/movie/"+this.state.title.split(' ').join('-')}> */}
                <a href={"/movie/"+this.state.id}>
                    <div className="title-movie">
                        {this.state.title}
                    </div>
                    <div className="cover-movie">
                        <img src={this.state.cover} alt="" />
                    </div>
                    {/* <div className="movie-rating">
                        {this.state.userRating}
                    </div> */}
                </a>
            </div>
        );
    }
}

export default Movie;