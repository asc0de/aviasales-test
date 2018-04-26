import { connect } from 'react-redux';
import CurrencyFilter from './currency-filter.component';
import { setCurrencyRates, changeCurrency } from './currency-filter.actions';

const mapStateToProps = state => {
    return {
        baseCurrency: state.ticketsPage.baseCurrency
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setCurrencyRates: state => dispatch(setCurrencyRates(state)),
        changeCurrency: state => dispatch(changeCurrency(state))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyFilter);