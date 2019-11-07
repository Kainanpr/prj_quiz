import axios from 'axios';

import environmentVariables from '../../config/env';

const getApi = (token = '') => axios.create({
  baseURL: environmentVariables.api,
  headers: { Authorization: token },
});

const getThemes = (token, funcSucess) => {
  getApi(token).get('/themes')
    .then((response) => {
      funcSucess(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export {
  getThemes,
};
