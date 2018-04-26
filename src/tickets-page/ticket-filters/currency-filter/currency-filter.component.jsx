import React, { Component } from 'react';
import { Currency } from '../../../shared/shared.constant';
import getCurrencyRate from './currency-filter.service';

class CurrencyFilter extends Component {
    componentDidMount() {
        getCurrencyRate().then(rates => {
            this.props.setCurrencyRates(rates);
        });
    }
    onCurrencyChange(e) {
        this.props.changeCurrency(e.target.value);
    }
    render() {
        return (
            <div className={'transfer-filter-container'}>
                <h4>Валюта</h4>
                <fieldset>
                    <label htmlFor={Currency.RUB}>{Currency.RUB}</label>
                    <input type="radio" 
                        id={Currency.RUB} 
                        value={Currency.RUB} 
                        onChange={this.onCurrencyChange.bind(this)} 
                        checked={this.props.baseCurrency === Currency.RUB}
                        name="currency" />
                    <label htmlFor={Currency.USD}>{Currency.USD}</label>
                    <input type="radio" 
                        id={Currency.USD} 
                        value={Currency.USD} 
                        onChange={this.onCurrencyChange.bind(this)}
                        checked={this.props.baseCurrency === Currency.USD}
                        name="currency" />
                    <label htmlFor={Currency.EUR}>{Currency.EUR}</label>
                    <input type="radio" 
                        id={Currency.EUR} 
                        value={Currency.EUR} 
                        onChange={this.onCurrencyChange.bind(this)}
                        checked={this.props.baseCurrency === Currency.EUR}
                        name="currency" />
                </fieldset>
            </div>
        )
    }
}

export default CurrencyFilter;