import axios from 'axios';

import environmentVariables from '../config/env';

const getApi = (token = '') => axios.create({
  baseURL: environmentVariables.api,
  headers: { Authorization: token },
});

const getGame = (token, userId, contentId, funcSucess) => {
  getApi(token).get(`/games?userId=${userId}&contentId=${contentId}`)
    .then((response) => {
      funcSucess(response.data[0]);
    })
    .catch((error) => {
      console.log(error);
    });
};

const updateGame = (token, game, funcSucess) => {
  getApi(token).put(`/games/${game.id}`, game)
    .then((response) => {
      funcSucess(response.data[0]);
    })
    .catch((error) => {
      console.log(error);
    });
};

export {
  getGame,
  updateGame,
};
