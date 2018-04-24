import { connect } from 'react-redux';
import TicketsArea from './tickets-area.component';
import { getFilteredTickets } from './tickets-area.filters';

const sortByPrice = tickets => {
    return tickets.sort((a,b) => {
        return a.price - b.price;
    });
}

const mapTickets = (tickets, filters) => {
    return sortByPrice(getFilteredTickets(tickets, filters));
};

const mapStateToProps = state => {
    return {
        tickets: mapTickets(state.ticketsPage.tickets, state.ticketsPage.filters)
    };
}

export default connect(mapStateToProps)(TicketsArea);