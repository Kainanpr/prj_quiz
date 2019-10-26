import axios from 'axios';

import environmentVariables from '../../config/env';

const api = axios.create({
  baseURL: environmentVariables.api,
});

const getTest = (contentId, levelId, funcSucess) => {
  api.get(`/tests?contentId=${contentId}&levelId=${levelId}`)
    .then((response) => {
      funcSucess(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export {
  getTest,
};
