import { connect } from 'react-redux';
import TicketsPage from './tickets-page.component';
import { ticketsReceived } from './tickets-page.actions';

const mapDispatchToProps = (dispatch) => {
    return {
        ticketsReceived: state => dispatch(ticketsReceived(state))
    }
};

export default connect(null, mapDispatchToProps)(TicketsPage);