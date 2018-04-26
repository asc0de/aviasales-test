import React, { Component } from 'react';
import './ticket.component.css';

class Ticket extends Component {
    render() { 
        return (
            <div className={'ticket-container'}>
                <span>{this.props.ticket.destination_name}</span>
                <span>{this.props.ticket.stops}</span>
                <span>{this.props.ticket.price.toFixed(2)}</span>
            </div>
        )
    }
}
 
export default Ticket;