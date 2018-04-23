import { connect } from 'react-redux';
import TicketsArea from './tickets-area.component';

const mapStateToProps = state => {
    return {
        tickets: state.ticketsPage.tickets
    };
}

export default connect(mapStateToProps)(TicketsArea);