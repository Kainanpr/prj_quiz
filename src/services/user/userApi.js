import axios from 'axios';

import environmentVariables from '../../config/env';

const api = axios.create({
  baseURL: environmentVariables.api,
});

const create = (user, funcBackPage) => {
  api.post('/users', user)
    .then(() => {
      funcBackPage();
    })
    .catch((error) => {
      console.log(error);
    });
};

const login = (user, funcHomePage, funcError) => {
  api.post('/users/login', user)
    .then((response) => {
      const responserUser = {
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
      };
      funcHomePage(responserUser);
    })
    .catch((error) => {
      console.log(error);
      funcError();
    });
};

export {
  create,
  login,
};
