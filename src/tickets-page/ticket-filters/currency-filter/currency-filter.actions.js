export const SET_CURRENCY_RATES = "SET_CURRENCY_RATES";
export const CHANGE_CURRENCY = "CHANGE_CURRENCY";

export function setCurrencyRates(state) {
    return { type: SET_CURRENCY_RATES, state };
};

export function changeCurrency(state) {
    return { type: CHANGE_CURRENCY, state };
};