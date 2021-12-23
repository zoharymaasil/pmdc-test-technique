import React, { useMemo } from 'react';
import { ICategory, IArticle } from 'utils/types';
import Article from 'components/Article/Article';
import { ArticleWrapper } from 'components/Article/Article.styles';

interface Props {
  category: ICategory;
  articles: IArticle[];
}

const ArticleList = ({ category, articles }: Props) => {

  const mathingArticles = useMemo(() => {
    /* 
      filtrer les articles correspondant a la categorie
      trier par ordre de creation le plus recent
    */
    return articles.filter((article: IArticle) => article.article_category === category.slug)
      .sort((a: IArticle, b: IArticle) => a.first_publication_date < b.first_publication_date ? 1 : -1);
  }, [category, articles]);

  return (
    <ArticleWrapper>
      {mathingArticles.map((articleItem: IArticle) => <Article key={articleItem.id} data={articleItem} />)}
    </ArticleWrapper>
  );
};

export default ArticleList;
