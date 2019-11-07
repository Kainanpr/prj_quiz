import axios from 'axios';

import environmentVariables from '../../config/env';

const getApi = (token = '') => axios.create({
  baseURL: environmentVariables.api,
  headers: { Authorization: token },
});

const getStudy = (token, contentId, levelId, funcSucess) => {
  getApi(token).get(`/studies?contentId=${contentId}&levelId=${levelId}`)
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
