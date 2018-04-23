import React, { Component } from 'react';
import Ticket from './ticket/ticket.component';
import './tickets-area.component.css';

class TicketsArea extends Component {
    getTicketsList() {
        const ticketsList = this.props.tickets.map((ticket, index) => {
            return <Ticket ticket={ticket} key={index}/>
        });
        return (
            <div className={'tickets-area-container'}>
                {ticketsList}
            </div>
        );
    }
    render() {
        return this.getTicketsList()
    }
}
 
export default TicketsArea;