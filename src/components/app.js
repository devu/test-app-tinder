import React, { Component } from 'react';
import Cards from '../containers/cards';

import { showCards } from '../actions/index'

export default class App extends Component {

  constructor(props) {
      super(props);

      this.state = {
        ended: false
      }

      this.onEnd = this.onEnd.bind(this);
  }

  onEnd() {
    console.log('The End')
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
