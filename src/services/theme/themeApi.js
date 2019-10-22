import axios from 'axios';

import environmentVariables from '../../config/env';

const api = axios.create({
  baseURL: environmentVariables.api,
});

const getThemes = (funcSucess) => {
  api.get('/themes')
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
