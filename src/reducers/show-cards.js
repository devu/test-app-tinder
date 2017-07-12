import { SHOW_CARDS, SWIPE_CARD } from '../constants/index'

const cards = [
    {
        index: 0,
        name:'Daniel',
        img:'images/1.jpg'
    }, {
        index: 1,
        name:'Josh',
        img:'images/2.png'
    }, {
        index: 2,
        name:'Henry',
        img:'images/3.jpg'
    }
]

export default function(state = null, action){
    console.log(action.type)
    switch(action.type){
        case SHOW_CARDS:
            return cards
    }
    return cards
}