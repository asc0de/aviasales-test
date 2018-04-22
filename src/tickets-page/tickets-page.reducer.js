import { TICKETS_RECEIVED } from './tickets-page.actions';

export default function TicketsPageReducer(state = {}, action) {
    switch(action.type) {
        case TICKETS_RECEIVED:
        console.log(action.state)
            return {
                ...action.state
            }
        default:
            return state;
    }
}