import React, { Component } from 'react';

class AgeViewer extends Component {
    
    constructor(props){
        super(props);
        this.state = { 
            currentAge: 21
        }
    }

    onAddAge = () => {
        this.setState({
            currentAge: this.state.currentAge+1
        })
    }

    onSubAge = () => {
        this.setState({
            currentAge: this.state.currentAge-1
        })
    }

    render() { 
        return ( 
            <div>
                <h1>{this.state.currentAge}</h1>
                <div>
                    <button onClick={this.onAddAge}>Add AGE</button>
                    <button onClick={this.onSubAge}>Sub AGE</button>
                </div>
            </div>
         );
    }
}
 
export default AgeViewer;