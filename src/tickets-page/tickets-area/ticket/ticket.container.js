import { connect } from "react-redux";
import Ticket from "./ticket.component";

const mapStateToProps = state => {
    return {
        baseCurrency: state.ticketsPage.baseCurrency
    };
};

export default connect(mapStateToProps)(Ticket);
