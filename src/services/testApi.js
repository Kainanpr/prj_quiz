import api from './api';

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
