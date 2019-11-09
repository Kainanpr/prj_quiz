import api from './api';

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
  api.post('/login', user)
    .then((response) => {
      funcHomePage(response.headers.authorization);
    })
    .catch((error) => {
      console.log(error);
      funcError();
    });
};

const userAuthenticated = (funcSucess) => {
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
    });
};

export {
  create,
  login,
  userAuthenticated,
};
