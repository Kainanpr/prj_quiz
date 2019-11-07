import axios from 'axios';

import environmentVariables from '../../config/env';

const getApi = (token = '') => axios.create({
  baseURL: environmentVariables.api,
  headers: { Authorization: token },
});

const create = (user, funcBackPage) => {
  getApi().post('/users', user)
    .then(() => {
      funcBackPage();
    })
    .catch((error) => {
      console.log(error);
    });
};

const login = (user, funcHomePage, funcError) => {
  getApi().post('/login', user)
    .then((response) => {
      funcHomePage(response.headers.authorization);
    })
    .catch((error) => {
      console.log(error);
      funcError();
    });
};

const userAuthenticated = (token, funcSucess) => {
  getApi(token).get('/users/authenticated')
    .then((response) => {
      const responseUser = {
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
      };

      funcSucess(responseUser);
    })
    .catch((error) => {
      console.log(error);
    });
};

export {
  create,
  login,
  userAuthenticated,
};
