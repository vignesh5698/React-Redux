import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  
  renderNumber = () => {
    const { number } = this.props;
    return(
      <div>{number}</div>
    )
  }

  renderButtons = () => {
    return(
      <div>
        <button onClick={this.props.onAdd}>ADD</button>
        <button onClick={this.props.onSub}>SUB</button>
      </div>
    )
  }

  render() {
    console.log(this.props.history);
    return ( 
      <div>
        {this.renderNumber()}
        {this.renderButtons()}
      </div>
     );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.number,
    history: state.history
  }
}

const mapDispatchToProps = (dispatch) => {
return {
  onAdd: () => dispatch({ type: 'NUM_UP', value:1 }),
  onSub: () => dispatch({ type: 'NUM_DOWN', value:1 })
}
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);