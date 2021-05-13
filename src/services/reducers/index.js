import {combineReducers} from 'redux';
import carddata from './reducers';

const rootReducer = combineReducers({
  carddata,
});

export default rootReducer;
// export default combineReducers({
//   cardItems,
// });
