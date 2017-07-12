import React, { Component } from 'react';
import Cards from '../containers/cards';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { showCards } from '../actions/index'

class App extends Component {

  constructor(props) {
      super(props);

      this.state = {
        ended: false
      }

      this.onEnd = this.onEnd.bind(this);
  }

  componentDidMount(){
    this.props.showCards();
  }

  onEnd() {
    this.setState({ ended: true });
  }

  render() {

    if(this.state.ended){
      return (
        <div className='container'>
          <h1>ROTA</h1>
          <h2>No more workers to deal with</h2>
        </div>
      );
    }

    return (
      <div className='container'>
        <h1>ROTA</h1>
        <Cards 
          onEnd={this.onEnd} 
          className='master-root'>
        </Cards>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ showCards: showCards }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
