import { SHOW_CARDS } from '../constants/index'

export function showCards(){
    console.log('Action: showCards');
    return {
        type: SHOW_CARDS
    }
}