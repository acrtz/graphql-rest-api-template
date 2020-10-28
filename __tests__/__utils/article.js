const GET_ARTICLES = `{
  getArticles {
    id
    title
    content
  }
}`;

const GET_ARTICLE = `query getArticle($id: Int!) {
  getArticle(id: $id) {
    id
    title
    content
  }
}
`;

const CREATE_ARTICLE = `mutation createArticle($article: ArticleInput!) {
  newArticle: createArticle(article: $article) {
    id,
    title,
    content
  }
}
`;

const UPDATE_ARTICLE = `mutation updateArticle($article: ArticleInput!) {
  updatedArticle: updateArticle(article: $article) {
    id,
    title,
    content
  }
}
`;

const DELETE_ARTICLE = `mutation deleteArticle($id: Int!) {
  deletedArticleId: deleteArticle(id: $id)
}
`;

module.exports = {
  GET_ARTICLE,
  GET_ARTICLES,
  UPDATE_ARTICLE,
  CREATE_ARTICLE,
  DELETE_ARTICLE,
};
