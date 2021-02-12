export const LOGIN = user => (
  {
    type: 'LOGIN',
    currentUser: user,
  }
);

export const LOGOUT = (
  {
    type: 'LOGOUT',
  }
);