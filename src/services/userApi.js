import api from './api';

const create = (user, funcBackPage, funcError) => {
  api.post('/users', user)
    .then(() => {
      funcBackPage();
    })
    .catch((error) => {
      console.log(error);
      funcError();
    });
};

const login = (user, funcHomePage, funcError) => {
  api.post('/login', user)
    .then((response) => {
      funcHomePage(response.headers.authorization);
    })
    .catch((error) => {
      console.log(error);
      funcError();
    });
};

const userAuthenticated = (funcSucess, funcErrorTokenExpired, funcAnyError) => {
  api.get('/users/authenticated')
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
      funcAnyError();
      if (error.response && error.response.status === 403) {
        funcErrorTokenExpired();
      }
    });
};

export {
  create,
  login,
  userAuthenticated,
};
