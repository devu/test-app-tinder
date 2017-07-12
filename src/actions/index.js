import { SHOW_CARDS, SWIPE_CARD } from '../constants/index'

export function showCards(){
    console.log('Action: showCards');
    return {
        type: SHOW_CARDS
    }
}

export function swipeCard(){
    console.log('Action: swipeCard');
    
    return {
        type: SWIPE_CARD
    }
}