import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onAddAction, onSubAction } from '../action/HomeAction';

class Home extends Component {
  
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
        <button onClick={this.onAddition} className='btn btn-success'>ADD</button>
        <button onClick={this.onSubtraction} className='btn btn-danger'>SUB</button>
      </div>
    )
  }

  renderNumber = () => {
    const { number, history } = this.props;
    return(
      <div>
        <h3>Number: {number}</h3>
        <ul className="list-group">
          {history.map((e) => (
            <li className="list-group-item">
              <h4>{e}</h4>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return ( 
      <div>
        {this.renderButtons()}
        {this.renderNumber()}
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
