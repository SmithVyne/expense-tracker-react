const dateReducer = (state="", action) => {
  const {date, type} = action;
  switch (type) {
    case 'ADD_DATE':
      return date;
    default:
      return state;
  }
};

export default dateReducer;