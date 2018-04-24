const transferNumberSupport = 3;
const SET_TRANSFER_PREFIX = 'SET_TRANSFER_';

const generateTransferActions = () => {
    const transferActions = {};
    for(let i = 1; i <= transferNumberSupport; i++) {
        transferActions[SET_TRANSFER_PREFIX + i] = SET_TRANSFER_PREFIX + i;
    }
    return transferActions;
}

export const getGeneratedTransferAction = number => {
    return SET_TRANSFER_PREFIX + number;
}

export const TransferFilters = {
    SET_ALL_TRANSFERS: 'SET_ALL_TRANSFERS',
    SET_NO_TRANSFER: 'SET_NO_TRANSFER',
    ...generateTransferActions()
};

export const setAllTransfers = state => {
    return { type: TransferFilters.SET_ALL_TRANSFERS, state }
}

export const setNoTransfers = state => {
    return { type: TransferFilters.SET_NO_TRANSFER, state }
}

export const setTransfer = number => {
    return (state) => {
        return { type: SET_TRANSFER_PREFIX + number, state }
    }
}