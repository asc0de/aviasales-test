import { Currency } from '../../../shared/shared.constant';

export default function() {
    const currencies = [];
    for(let cur in Currency) {
        if (Currency.hasOwnProperty(cur)) { currencies.push(cur);}
    }
    return fetch(`http://apilayer.net/api/live?access_key=8b33fd0082889d040ea29a2cbfecb81f&currencies=${currencies.join(',')}`).then(response => {
        return response.json().then(result => {
            return result ? result.quotes || [] : [];
        });
    });
};