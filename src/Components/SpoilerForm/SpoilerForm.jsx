import React, { Component } from 'react';
import Spoiler from '../Spoiler/Spoiler';


class SpoilerForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            spoilers: props.content || [],
            newComment:this.props.reply
        }
        this.addComment = this.addComment.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
    }
    addComment(){
        this.props.reply(this.state.text);
    }

    handleUserInput(e){
        this.setState({
            text: e.target.value, // the value of the text input
        })
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            spoilers: nextProps.content || []
        });
    }
    
    render(){
        return(
            <div>
                 <hr />
                  {this.state.spoilers.map(spoiler=> 
                        <div>
                            <Spoiler content={spoiler} key={spoiler.id} id={spoiler.id} />
                            <a onClick={this.addComment}>
                                Reply
                            </a>
                        </div>
                    )}
                    <div>
                        <img src="" alt="" />
                        <input className="comment" value={this.state.text} onChange={this.handleUserInput} />
                        <button onClick={this.addComment} className="btn btn-primary">
                            Comment
                        </button>
                    </div>
            </div>
        );
    }
};

export default SpoilerForm;