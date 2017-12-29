import React, { Component } from "react";

class Spoiler extends Component{
    constructor(props){
        super(props);
        let spoiler = props.spoiler || {
            name: "",
            text: "",
            photoUrl: "",
            publishedDate: ""
        };
        if (spoiler.name !== undefined){
            this.state = {
                name: spoiler.name,
                text: spoiler.text,
                photoUrl: spoiler.photoUrl,
                publishedDate: spoiler.publishedDate
            }
        }

    };
    componentWillReceiveProps(nextProps){
        let spoiler = nextProps.content || {
            name: "",
            text: "",
            photoUrl: "",
            publishedDate: ""
        };
        this.setState({
           ...spoiler
        });
    }
    render(){
        return (
            <div className="user-comments">
                <strong>{this.state.name}</strong>
                    <div className="comment-meta">
                        {this.state.publishedDate} | by <a href="/user/ur5642195"/>
                        <span className="author">{this.state.UserDisplayName}</span>
                    </div>
                    <div>
                        <p>{this.state.text}</p>
                    </div>
                <hr />
            </div>
        );
    }
}

export default Spoiler;