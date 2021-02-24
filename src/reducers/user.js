const userReducer = (state = null, action) => {
  const {type, currentUser} = action;
  switch (type) {
    case 'LOGIN':
      return currentUser;
    case 'LOGOUT':
      return null;
    default:
      return state;
  }
}

export default userReducer;