import React, { Component } from "react";
import TransferFilter from "./transfer-filter/transfer-filter.container";
import CurrencyFilter from "./currency-filter/currency-filter.container";
import Panel from "../../shared/panel/panel.component";
import "./tickets-filters.component.css";

class TicketFilters extends Component {
    render() {
        return (
            <Panel>
                <div className={"at-filters-container"}>
                    <CurrencyFilter />
                    <TransferFilter />
                </div>
            </Panel>
        );
    }
}

export default TicketFilters;
