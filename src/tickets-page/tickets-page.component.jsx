import React, { Component } from 'react';
import getTickets from './tickets-page.service';

class TicketsPage extends Component {
    componentDidMount() {
        getTickets().then(tickets => {
            this.props.ticketsReceived(tickets);
        })
    }
    render() { 
        return (
            <div>
            </div>
        )
    }
}
export default TicketsPage;