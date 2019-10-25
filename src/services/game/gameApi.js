import axios from 'axios';

import environmentVariables from '../../config/env';

const api = axios.create({
  baseURL: environmentVariables.api,
});

const getGame = (userId, contentId, funcSucess) => {
  api.get(`/games?userId=${userId}&contentId=${contentId}`)
    .then((response) => {
      funcSucess(response.data[0]);
    })
    .catch((error) => {
      console.log(error);
    });
};

export {
  getGame,
};
