import React,  { Component } from 'react';
import "./Movie.css";

class MovieInf extends Component {
    constructor(props){
        super(props);
        let movie = props.content;
        if (movie === undefined || movie.title === ""){
            this.state={
                title: "",
                cover: "",
                userRating: "",
                favorite: "",
                id: ""
            }
        }
    }
    componentWillReceiveProps(nextProps){
        let movie = nextProps.content;
        this.setState({
            title: movie.title,
            cover: movie.principalCover,
            description:movie.description,
            id: movie.id
        });
    }
    render(){
        return(
            <div>
                {/* <a href={"/movie/"+this.state.title.split(' ').join('-')}> */}
                <div className="title-movie">
                    {this.state.title}
                </div>
                <div className="cover-movie">
                    <img src={this.state.cover} alt="" className="cover" />
                </div>
                <div className="movie-description">
                    {this.state.description}
                </div>
                <div className="options">
                    <button className="btn btn-primary">
                        <i className="fa fa-add"></i>
                        Add to List
                    </button>
                </div>
            </div>
        );
    }
}

export default MovieInf;