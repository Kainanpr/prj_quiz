import api from './api';

const getGame = (userId, contentId, funcSucess) => {
  api.get(`/games?userId=${userId}&contentId=${contentId}`)
    .then((response) => {
      funcSucess(response.data[0]);
    })
    .catch((error) => {
      console.log(error);
    });
};

const updateGame = (game, funcSucess) => {
  api.put(`/games/${game.id}`, game)
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
