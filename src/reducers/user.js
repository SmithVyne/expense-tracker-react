const userReducer = (state = {currentUser: null}, action) => {
  const {type, currentUser} = action;
  switch (type) {
    case 'LOGIN':
      return {...state, currentUser};
    default:
      return state;
  }
}

export default userReducer;