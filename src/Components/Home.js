import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { 
  //     number: 25
  //   }
  // }

  renderNumber = () => {
    const { number } = this.props;
    return(
      <div>{number}</div>
    )
  }

  // onAdd = () => {
  //   let { number } = this.state;
  //   this.setState({
  //     number: ++number
  //   })
  // }

  // onSub = () => {
  //   let { number } = this.state;
  //   this.setState({
  //     number: --number
  //   })
  // }

  renderButtons = () => {
    return(
      <div>
        <button onClick={this.props.onAdd}>ADD</button>
        <button onClick={this.props.onSub}>SUB</button>
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
    number: state.number
  }
}

const mapDispatchToProps = (dispatch) => {
return {
  onAdd: () => dispatch({ type: 'NUM_UP' }),
  onSub: () => dispatch({ type: 'NUM_DOWN' })
}
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);