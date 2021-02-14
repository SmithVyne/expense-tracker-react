const userReducer = (state = {currentUser: null}, action) => {
  const {type, currentUser} = action;
  switch (type) {
    case 'LOGIN':
      return {...state, currentUser};
    case 'LOGOUT':
      return {currentUser: null};
    default:
      return state;
  }
}

export default userReducer;