import React, { Component } from 'react'; 
import MovieSearch from '../Components/MovieSearch/MovieSearch';
import Movie from '../Components/Movie/MovieInf';
import SpoilerForm from "../Components/SpoilerForm/SpoilerForm";
import { ELASTIC_API, basicApi }  from '../Config/Config'
import elasticsearch from "elasticsearch";
import { db } from "./../Config/Config";


class DetailPage extends Component {
    constructor(props){
      super(props);
      this.state = {
        isAuthenticated:  true,//props.isAuthenticated
        id: props.match.params.id,
        Movie: {
            title:"",
            comments: []
        }
      };
    }

    componentDidMount() {    
        var that = this;
        var url = ELASTIC_API;
        var hosts =[
            {
            host: 'localhost',
            auth: 'elastic:bDz!#$7tb&btBcooHLT-',
            protocol: 'http',
            port: 9200,
            log: "trace",
            }
        ];
            
        var client = new elasticsearch.Client(hosts);
        var model  ={};
        client.get({
            id: this.state.id,
            index: "movies",
            type: "movie",
        }).then(function(body){
            //console.log(error);
            //console.log(response);
            this.setState({  
                isAuthenticated:  true,//props.isAuthenticated
                id: this.state.id,
                Title: body._source.title,
                Movie: body._source, 
                comments: this.state.comments
            });
        }.bind(this));

        
        //Get all comments 
        db.collection("movies").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                if (this.state.comments === undefined){
                    this.state.comments = [];
                    this.state.comments.push({
                        ...doc.data(),
                        id: doc.id
                    });
                }

                this.setState({
                    isAuthenticated:  true,//props.isAuthenticated
                    id: this.state.id,
                    Title: this.state.Title,
                    Movie: this.state.Movie,
                    comments: this.state.comments
                });
            });
        });
    }

    render(){
        return(
            <div className="container">
              <Movie content={this.state.Movie} />
              <SpoilerForm content={this.state.comments} />
            </div>
        );
    }
}

export default DetailPage;
