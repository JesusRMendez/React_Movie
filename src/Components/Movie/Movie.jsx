import React,  { Component } from 'react';
import "./Movie.css";

class Movie extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: props.title,
            cover: props.cover,
            userRating: props.userRating,
            favorite: props.favorite
        };
    }
    render(){
        return(
            <div>
                <div className="title-movie">
                    {this.state.title}
                </div>
                <div className="cover-movie">
                    <img src={this.state.cover} alt="" />
                </div>
                <div className="movie-rating">
                    {this.state.userRating}
                </div>
            </div>
        );
    }
}

export default Movie;