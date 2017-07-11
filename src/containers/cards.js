import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Card from './card';

class Cards extends Component {

    constructor(props){
        super(props);

        this.state = {
            onStack: 0,
            swipe: ''
        }

        this.onSwipeLeft = this.onSwipeLeft.bind(this);
        this.onSwipeRight = this.onSwipeRight.bind(this);
    }

    onSwipeLeft(){
        console.log('YES')
        this.updateStack();
        this.setState({ swipe: 'left' });
    }

    onSwipeRight(){
        console.log('NO')
        this.updateStack();
        this.setState({ swipe: 'right' });
    }

    updateStack(){
        this.props.cards.pop();
        this.setState({ onStack:this.props.cards.length });

        if(this.props.cards.length == 0){
            this.props.onEnd();
        }
    }

    render() {
        
        const hgreen = (this.state.swipe === 'left') ? 'green' : '';
        const hred = (this.state.swipe === 'right') ? 'red' : '';

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
                    <button onClick={this.onSwipeLeft} className={hgreen}> YES </button>
                    <button onClick={this.onSwipeRight} className={hred}> NO </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { cards: state.cards.items }
}

export default connect(mapStateToProps)(Cards);