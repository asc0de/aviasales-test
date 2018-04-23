import React, { Component } from 'react';
import getTickets from './tickets-page.service';
import TicketsArea from './tickets-area/tickets-area.container';

class TicketsPage extends Component {
    componentDidMount() {
        getTickets().then(tickets => {
            this.props.ticketsReceived(tickets);
        })
    }
    render() { 
        return (
            <div>
                <TicketsArea/>
            </div>
        )
    }
}
export default TicketsPage;