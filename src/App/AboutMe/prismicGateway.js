import Prismic from 'prismic-javascript';

const apiEndpoint = 'https://brianzchen-personal-website.prismic.io/api/v2';

export const getSingle = type => new Promise((resolve, reject) => {
  Prismic.getApi(apiEndpoint).then(api => {
    api.query(
      Prismic.Predicates.at('document.type', type),
    ).then(res => {
      resolve(res.results[0].data);
    }).catch(err => {
      reject(err);
    });
  });
});
