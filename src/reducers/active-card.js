import { SHOW_CARDS, SWIPE_CARD } from '../constants/index'

export default function(state = null, action){
    switch(action.type){
        case SWIPE_CARD:
            return action.payload;
            
    }

    return state
}