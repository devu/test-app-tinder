import React, { Component } from 'react';

class Card extends Component {

    constructor(props){
        super(props);

        this.state = {
            initialX:0
        }

        this.onDragStart = this.onDragStart.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragStart(e){
        this.setState({ initialX:e.pageX })
    }

    onDragEnd(e){
        var diffX = e.pageX - this.state.initialX;

        if(diffX>50){
            this.props.onSwipeRight();
        }

        if(diffX<-50){
            this.props.onSwipeLeft();
        }
    }

    render() {
        const item = this.props.item;
        const trans3D = {
            transform:'translate3d(160px, 20px, 0px)'
        };

        return( 
            <div style={trans3D}>
                <div 
                    draggable="true" 
                    onDragStart={ (e) => this.onDragStart(e) } 
                    onDragEnd={ (e) => this.onDragEnd(e) } 
                    className='card'>
                    <img src={item.img}/>
                    <h2>{item.name}</h2>
                </div>
            </div>
        )
    }
}

export default Card