import React, { Component } from 'react';
import { Currency } from '../../../shared/shared.constant';
import Subheader from '../../../shared/subheader/subheader.component';
import getCurrencyRate from './currency-filter.service';
import './currency-filter.component.css';

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
            <div className={'at-currency-filter-container'}>
                <Subheader>Валюта</Subheader>
                <fieldset>
                    <span>
                        <input type="radio"
                            id={Currency.RUB}
                            value={Currency.RUB}
                            onChange={this.onCurrencyChange.bind(this)}
                            checked={this.props.baseCurrency === Currency.RUB}
                            name="currency" />
                        <label htmlFor={Currency.RUB}>{Currency.RUB}</label>
                    </span>
                    <span>
                        <input type="radio"
                            id={Currency.USD}
                            value={Currency.USD}
                            onChange={this.onCurrencyChange.bind(this)}
                            checked={this.props.baseCurrency === Currency.USD}
                            name="currency" />
                        <label htmlFor={Currency.USD}>{Currency.USD}</label>
                    </span>
                    <span>
                        <input type="radio"
                            id={Currency.EUR}
                            value={Currency.EUR}
                            onChange={this.onCurrencyChange.bind(this)}
                            checked={this.props.baseCurrency === Currency.EUR}
                            name="currency" />
                        <label htmlFor={Currency.EUR}>{Currency.EUR}</label>
                    </span>
                </fieldset>
            </div>
        )
    }
}

export default CurrencyFilter;