import React, { Component } from "react";
import Ticket from "./ticket/ticket.container";
import "./tickets-area.component.css";

class TicketsArea extends Component {
    getLoadingMessage() {
        return <div className={"at-tickets-area-searching"}>Ищем Вам лучшие билеты...</div>;
    }
    getTicketsList() {
        const ticketsList = this.props.tickets.map((ticket, index) => {
            return <Ticket ticket={ticket} key={index} />;
        });
        return <div className={"at-tickets-area-container"}>{ticketsList}</div>;
    }
    render() {
        return this.props.tickets.length ? this.getTicketsList() : this.getLoadingMessage();
    }
}

export default TicketsArea;
