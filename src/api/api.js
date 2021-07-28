const API_URL = 'https://mate-api.herokuapp.com';

export const getTodos = () => fetch(`${API_URL}/todos`)
  .then(response => response.json())
  .then(result => result.data)
  .then(todos => todos)
  .catch(error => `Oooops...${error}`);

export const getUserDetails = userId => fetch(`${API_URL}/users/${userId}`)
  .then(response => response.json())
  .then(result => result.data)
  .then(user => user)
  .catch(error => `Oooops...${error}`);