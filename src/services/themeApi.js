import api from './api';

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
