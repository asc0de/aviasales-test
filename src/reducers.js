import { combineReducers } from 'redux';

import ticketsPageReducer from './tickets-page/tickets-page.reducer';

export default combineReducers({
    ticketsPage: ticketsPageReducer
});