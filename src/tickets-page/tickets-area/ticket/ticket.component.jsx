import React, { Component } from "react";
import Panel from "../../../shared/panel/panel.component";
import Button from "../../../shared/button/button.component";
import { getPluralValue } from "../../../shared/shared.helper";
import "./ticket.component.css";

class Ticket extends Component {
    render() {
        return (
            <Panel>
                <div className={"at-ticket-container"}>
                    <div className={"at-buy-area"}>
                        <img src="turkish-airlines.png" />
                        <Button
                            value={
                                "Купить за " +
                                this.props.ticket.price.toLocaleString("ru-RU", {
                                    style: "currency",
                                    currency: this.props.baseCurrency,
                                    maximumFractionDigits: 0,
                                    minimumFractionDigits: 0
                                })
                            }
                        />
                    </div>
                    <div className={"at-ticket-info"}>
                        <div className={"at-ticket-info-labels"}>Откуда</div>
                        <div className={"at-ticket-info-stats"}>
                            <span>{this.props.ticket.departure_time}</span>
                            <span>
                                {this.props.ticket.origin}, {this.props.ticket.origin_name}
                            </span>
                            <span>
                                {this.props.ticket.departure_date.toLocaleDateString("ru-RU", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                    weekday: "short"
                                })}
                            </span>
                        </div>
                        <div className={"at-ticket-info-plane"}>
                            <span className={"at-ticket-info-stops"}>
                                {this.props.ticket.stops}{" "}
                                {getPluralValue(this.props.ticket.stops, {
                                    zero: "пересадок",
                                    one: "пересадка",
                                    few: "пересадки",
                                    many: "пересадок"
                                })}
                            </span>
                            <div className={"at-ticket-info-plane-sign"}>
                                <div className={"at-plane-underline"} />
                                <i className="material-icons">flight</i>
                            </div>
                        </div>
                        <div className={"at-ticket-info-labels"}>Куда</div>
                        <div className={"at-ticket-info-stats"}>
                            <span>{this.props.ticket.arrival_time}</span>
                            <span>
                                {this.props.ticket.destination}, {this.props.ticket.destination_name}
                            </span>
                            <span>
                                {this.props.ticket.arrival_date.toLocaleDateString("ru-RU", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                    weekday: "short"
                                })}
                            </span>
                        </div>
                    </div>
                </div>
            </Panel>
        );
    }
}

export default Ticket;
