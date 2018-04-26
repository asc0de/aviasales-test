import React, { Component } from 'react';
import TransferFilter from './transfer-filter/transfer-filter.container';
import CurrencyFilter from './currency-filter/currency-filter.container';
import './tickets-filters.component.css';

class TicketFilters extends Component {
    render() { 
        return (
            <div className={'filters-container'}>
                <CurrencyFilter />
                <TransferFilter />
            </div>
        )
    }
}
 
export default TicketFilters;