import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onAddAction, onSubAction } from '../action/HomeAction';

class Home extends Component {
  
  renderNumber = () => {
    const { number } = this.props;
    return(
      <div>{number}</div>
    )
  }

  onAddition = () => {
    const { number, incrementedValue, history } = this.props;
    let updatedHistory = history;
    const updatedValue = number + incrementedValue;
    updatedHistory.push(updatedValue);
    this.props.onAdd(updatedValue, updatedHistory);
  }

  onSubtraction = () => {
    const { number, incrementedValue, history } = this.props;
    let updatedHistory = history;
    const updatedValue = number - incrementedValue;
    updatedHistory.push(updatedValue);
    this.props.onSub(updatedValue, updatedHistory);
  }

  renderButtons = () => {
    return(
      <div>
        <button onClick={this.onAddition}>ADD</button>
        <button onClick={this.onSubtraction}>SUB</button>
      </div>
    )
  }

  render() {
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
    history: state.history,
    incrementedValue: state.incrementedValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (updatedValue, updatedHistory) => {
      dispatch(onAddAction(updatedValue, updatedHistory))
    },
    onSub: (updatedValue, updatedHistory) => {
      dispatch(onSubAction(updatedValue, updatedHistory))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);
