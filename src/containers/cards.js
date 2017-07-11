import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Card from './card';

class Cards extends Component {

    constructor(props){
        super(props);

        this.state = {
            cards: []
        }

        this.onSwipeLeft = this.onSwipeLeft.bind(this);
        this.onSwipeRight = this.onSwipeRight.bind(this);
    }

    onSwipeLeft(){
        console.log('YES')
        this.updateStack();
    }

    onSwipeRight(){
        console.log('NO')
        this.updateStack();
    }

    updateStack(){
        this.props.cards.pop();
        this.setState({ onStack:this.props.cards.length });

        if(this.props.cards.length == 0){
            this.props.onEnd();
        }
    }

    render() {
        return( 
            <div className='cards-container'>
                {this.props.cards.map(item =>
                    <Card 
                        onSwipeLeft={this.onSwipeLeft} 
                        onSwipeRight={this.onSwipeRight}
                        item={item}
                        key={item.index}>
                    </Card>
                )}
                <div className='vote-bar'>
                    <button onClick={this.onSwipeLeft}> YES </button>
                    <button onClick={this.onSwipeRight}> NO </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { cards: state.cards.items }
}

export default connect(mapStateToProps)(Cards);