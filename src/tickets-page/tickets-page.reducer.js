import { TICKETS_RECEIVED } from './tickets-page.actions';

const initialState = {
    tickets: []
};

export default function TicketsPageReducer(state = initialState, action) {
    switch(action.type) {
        case TICKETS_RECEIVED:
            return {
                ...state,
                tickets: action.state || []
            }
        default:
            return state;
    }
}