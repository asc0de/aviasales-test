export const getPluralValue = (value, params) => {
    return params[new Intl.PluralRules("ru-RU").select(value)];
};
