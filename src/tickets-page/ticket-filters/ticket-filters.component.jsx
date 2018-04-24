import React, { Component } from 'react';
import TransferFilter from './transfer-filter/transfer-filter.container';

class TicketFilters extends Component {
    render() { 
        return (
            <div>
                <TransferFilter />
            </div>
        )
    }
}
 
export default TicketFilters;