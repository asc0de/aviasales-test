import React, { Component } from 'react';
import './transfer-filter.component.css';

class TransferFilter extends Component {
    onCheckboxChange(e) {
        const checkboxValue = parseInt(e.target.value, 10);
        if (checkboxValue === -1) {
            this.props.setAllTransfers(e.target.checked); 
            return;
        }
        if (checkboxValue === 0) { 
            this.props.setNoTransfers(e.target.checked);
            return;
        }
        this.props.setTransfer(checkboxValue, e.target.checked);
    }
    render() {
        return (
            <div className={'transfer-filter-container'}>
                <h4>Количество пересадок</h4>
                <ul>
                    <li><input value={-1} onChange={this.onCheckboxChange.bind(this)} type="checkbox"/>Все</li>
                    <li><input value={0} onChange={this.onCheckboxChange.bind(this)} type="checkbox"/>Без пересадок</li>
                    <li><input value={1} onChange={this.onCheckboxChange.bind(this)} type="checkbox"/>1 пересадка</li>
                    <li><input value={2} onChange={this.onCheckboxChange.bind(this)} type="checkbox"/>2 пересадки</li>
                    <li><input value={3} onChange={this.onCheckboxChange.bind(this)} type="checkbox"/>3 пересадки</li>
                </ul>
            </div>
        )
    }
}

export default TransferFilter;