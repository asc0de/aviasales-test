import { TICKETS_RECEIVED } from "./tickets-page.actions";
import { Currency } from "../shared/shared.constant";
import { TransferFilters, getGeneratedTransferAction } from "./ticket-filters/transfer-filter/transfer-filter.actions";
import { SET_CURRENCY_RATES, CHANGE_CURRENCY } from "./ticket-filters/currency-filter/currency-filter.actions";
const ONE_TRANSFER = getGeneratedTransferAction(1);
const TWO_TRANSFERS = getGeneratedTransferAction(2);
const THREE_TRANSFERS = getGeneratedTransferAction(3);

const initialState = {
    tickets: [],
    baseCurrency: Currency.RUB,
    //fallback currency rates in case if request to Apilayer.net API is failed
    currencyRates: {
        [Currency.EUR + Currency.RUB]: 75.9595751633987,
        [Currency.EUR + Currency.USD]: 1.2103606874848705,
        [Currency.RUB + Currency.EUR]: 0.013164897221303214,
        [Currency.RUB + Currency.USD]: 0.01593427405144422,
        [Currency.USD + Currency.EUR]: 0.8262,
        [Currency.USD + Currency.RUB]: 62.757801
    },
    filters: {
        allTransfers: false,
        noTransfers: false,
        oneTransfer: false,
        twoTransfers: false,
        threeTransfers: false
    }
};

export default function TicketsPageReducer(state = initialState, action) {
    switch (action.type) {
        case TICKETS_RECEIVED:
            const tickets = action.state || [];
            return {
                ...state,
                tickets: tickets.map(ticket => {
                    const departure = ticket.departure_date.split(".");
                    const arrival = ticket.departure_date.split(".");
                    ticket.departure_date = new Date(`20${departure[2]}-${departure[1]}-${departure[0]}`);
                    ticket.arrival_date = new Date(`20${arrival[2]}-${arrival[1]}-${arrival[0]}`);
                    return ticket;
                })
            };
        case TransferFilters.SET_ALL_TRANSFERS: {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    allTransfers: action.state
                }
            };
        }
        case TransferFilters.SET_NO_TRANSFER: {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    noTransfers: action.state
                }
            };
        }
        case ONE_TRANSFER: {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    oneTransfer: action.state
                }
            };
        }
        case TWO_TRANSFERS: {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    twoTransfers: action.state
                }
            };
        }
        case THREE_TRANSFERS: {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    threeTransfers: action.state
                }
            };
        }
        case SET_CURRENCY_RATES: {
            const rates = {
                ...action.state,
                [Currency.RUB + Currency.USD]: 1 / action.state[Currency.USD + Currency.RUB],
                [Currency.EUR + Currency.USD]: 1 / action.state[Currency.USD + Currency.EUR],
                [Currency.RUB + Currency.EUR]: 1 / action.state[Currency.USD + Currency.RUB] * action.state[Currency.USD + Currency.EUR],
                [Currency.EUR + Currency.RUB]: 1 / action.state[Currency.USD + Currency.EUR] * action.state[Currency.USD + Currency.RUB]
            };
            return {
                ...state,
                currencyRates: rates
            };
        }
        case CHANGE_CURRENCY: {
            return {
                ...state,
                baseCurrency: action.state,
                tickets: state.tickets.map(ticket => {
                    ticket.price = ticket.price * state.currencyRates[state.baseCurrency + action.state];
                    return ticket;
                })
            };
        }
        default:
            return state;
    }
}
