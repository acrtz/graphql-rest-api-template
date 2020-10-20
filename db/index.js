const articles = [
  {
    id: "1",
    title: "First article",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies eros tortor, a venenatis mauris ultricies ac. Nulla sed nisl sit amet leo iaculis cursus at eget lacus. Proin vel.",
  },
  {
    id: "2",
    title: "Second article",
    content:
      "Phasellus ultricies eros tortor, a venenatis mauris ultricies ac. Nulla sed nisl sit amet leo iaculis cursus at eget lacus. Proin vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
];

const fakeDBConnection = (request) =>
  new Promise((resolve, reject) => setTimeout(() => resolve(request), 300));

const getArticle = () =>
  fakeDBConnection((id) => articles.find((article) => article.id === id));

const getArticles = () => fakeDBConnection(() => articles);

const createArticle = () =>
  fakeDBConnection((article) => {
    articles.push(article);
    return article.id;
  });

const updateArticle = () =>
  fakeDBConnection((article) => {
    const index = articles.findIndex(({ index }) => index === article.index);
    articles[index] = article;
    return article.id;
  });

const deleteArticle = () =>
  fakeDBConnection((article) => {
    const index = articles.findIndex(({ index }) => index === article.index);
    articles.splice(index, 1) = article;
    return article.id;
  });

module.exports = {
  getArticle,
  getArticles,
  createArticle,
  updateArticle,
  deleteArticle,
};
