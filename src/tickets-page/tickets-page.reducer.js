import { TICKETS_RECEIVED } from './tickets-page.actions';
import { TransferFilters, getGeneratedTransferAction } from './ticket-filters/transfer-filter/transfer-filter.actions';
const ONE_TRANSFER = getGeneratedTransferAction(1);
const TWO_TRANSFERS = getGeneratedTransferAction(2);
const THREE_TRANSFERS = getGeneratedTransferAction(3);

const initialState = {
    tickets: [],
    filters: {
        allTransfers: false,
        noTransfers: false,
        oneTransfer: false,
        twoTransfers: false,
        threeTransfers: false
    }
};

export default function TicketsPageReducer(state = initialState, action) {
    switch(action.type) {
        case TICKETS_RECEIVED:
            return {
                ...state,
                tickets: action.state || []
            }
        case TransferFilters.SET_ALL_TRANSFERS: {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    allTransfers: action.state,
                }
            }
        }
        case TransferFilters.SET_NO_TRANSFER: {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    noTransfers: action.state,
                } 
            }
        }
        case ONE_TRANSFER: {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    oneTransfer: action.state,
                } 
            }
        }
        case TWO_TRANSFERS: {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    twoTransfers: action.state,
                } 
            }
        }
        case THREE_TRANSFERS: {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    threeTransfers: action.state,
                } 
            }
        }
        default:
            return state;
    }
}