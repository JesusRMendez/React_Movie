import React, { Component } from 'react';
import Spoiler from '../Spoiler/Spoiler';


class SpoilerForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            spoilers: props.content || []
        }
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
                        <Spoiler content={spoiler} key={spoiler.id} id={spoiler.id} />
                    )}
            </div>
        );
    }
};

export default SpoilerForm;