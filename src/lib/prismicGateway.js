import Prismic from 'prismic-javascript';

const apiEndpoint = 'https://brianzchen-personal-website.prismic.io/api/v2';

const query = type => Prismic.getApi(apiEndpoint).then(api => (
  api.query(
    Prismic.Predicates.at('document.type', type),
  )
));

export const getSingle = type => new Promise((resolve, reject) => {
  query(type).then(res => {
    resolve(res.results[0].data);
  }).catch(err => {
    reject(err);
  });
});

export const getList = type => new Promise((resolve, reject) => {
  query(type).then(res => {
    resolve(res.results.map(o => ({
      id: o.id,
      ...o.data,
    })));
  }).catch(err => {
    reject(err);
  });
});
