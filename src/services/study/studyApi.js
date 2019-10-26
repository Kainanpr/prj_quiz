import axios from 'axios';

import environmentVariables from '../../config/env';

const api = axios.create({
  baseURL: environmentVariables.api,
});

const getStudy = (contentId, levelId, funcSucess) => {
  api.get(`/studies?contentId=${contentId}&levelId=${levelId}`)
    .then((response) => {
      funcSucess(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export {
  getStudy,
};
