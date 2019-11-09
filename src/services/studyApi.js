import api from './api';

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
