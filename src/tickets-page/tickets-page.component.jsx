import React, { Component } from "react";
import getTickets from "./tickets-page.service";
import TicketsArea from "./tickets-area/tickets-area.container";
import TicketFilters from "./ticket-filters/ticket-filters.component";
import "./tickets-page.component.css";

class TicketsPage extends Component {
    componentDidMount() {
        getTickets().then(tickets => {
            this.props.ticketsReceived(tickets);
        });
    }
    render() {
        return (
            <div className={"at-tickets-page-container"}>
                <TicketFilters />
                <TicketsArea />
            </div>
        );
    }
}
export default TicketsPage;
