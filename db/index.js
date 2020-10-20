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

const fakeDBConnection = (request) => {
  const response = request();
  console.log({ response });
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(response), 300)
  );
};

const getArticle = (id) =>
  fakeDBConnection(() => articles.find((article) => article.id === id));

const getArticles = () => fakeDBConnection(() => articles);

const createArticle = (article) =>
  fakeDBConnection(() => {
    articles.push(article);
    return article.id;
  });

const updateArticle = (article) =>
  fakeDBConnection(() => {
    const index = articles.findIndex(({ index }) => index === article.index);
    articles[index] = article;
    return article.id;
  });

const deleteArticle = (article) =>
  fakeDBConnection(() => {
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
