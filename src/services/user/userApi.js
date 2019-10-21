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

const login = async (user, funcHomePage, funcError) => {
  api.post('/users/login', user)
    .then((response) => {
      const responserUser = {
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
        level: {
          id: response.data.level.id,
          name: response.data.level.name,
        },
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
