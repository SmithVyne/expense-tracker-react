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

export const ADD_ALL_CATEGORIES = categories => (
  {
    type: 'ADD_ALL_CATEGORIES',
    categories,
  }
)

export const ADD_CATEGORY = category => (
  {
    type: 'ADD_CATEGORY',
    category,
  }
)