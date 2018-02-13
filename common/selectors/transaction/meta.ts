import { AppState } from 'reducers';
import { getTransactionState } from './transaction';
import { getToken } from 'selectors/wallet';
import { isNetworkUnit } from 'selectors/config/wallet';

const getMetaState = (state: AppState) => getTransactionState(state).meta;
const getFrom = (state: AppState) => getMetaState(state).from;
const getDecimal = (state: AppState) => getMetaState(state).decimal;
const getTokenTo = (state: AppState) => getMetaState(state).tokenTo;
const getTokenValue = (state: AppState) => getMetaState(state).tokenValue;
const getUnit = (state: AppState) => getMetaState(state).unit;
const getPreviousUnit = (state: AppState) => getMetaState(state).previousUnit;
const getDecimalFromUnit = (state: AppState, unit: string) => {
  if (isNetworkUnit(state, unit)) {
    return getDecimal(state);
  } else {
    const token = getToken(state, unit);
    if (!token) {
      throw Error(`Token ${unit} not found`);
    }
    return token.decimal;
  }
};

export {
  getFrom,
  getDecimal,
  getTokenValue,
  getTokenTo,
  getUnit,
  getPreviousUnit,
  getDecimalFromUnit
};
