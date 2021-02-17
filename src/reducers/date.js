import {dateSetter} from '../utitlities';

const dateReducer = (state=dateSetter(), action) => {
  const {modifier, type} = action;
  switch (type) {
    case 'CHANGE_DATE':
      return dateSetter(modifier, state[1]);
    default:
      return state;
  }
};

export default dateReducer;