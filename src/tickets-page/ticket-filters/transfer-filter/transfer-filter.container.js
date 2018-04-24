import { connect } from 'react-redux';
import TransferFilter from './transfer-filter.component';
import { setAllTransfers, setNoTransfers, setTransfer } from './transfer-filter.actions';

const mapDispatchToProps = dispatch => {
    return {
        setAllTransfers: state => dispatch(setAllTransfers(state)),
        setNoTransfers: state => dispatch(setNoTransfers(state)),
        setTransfer: (number, state) => dispatch(setTransfer(number)(state))
    };
};
export default connect(null, mapDispatchToProps)(TransferFilter);