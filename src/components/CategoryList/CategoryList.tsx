import React, { Fragment } from 'react';

import {
  CategoryTitle,
} from './CategoryList.styles';

interface Props {
  categories: any;
  articles: any;
}

const CategoryList = ({ categories, articles }: Props) => {
  return (
    <>
      {categories.map((category: any) => (
        <Fragment key={category.id}>
          <CategoryTitle>{category.category_name}</CategoryTitle>
          {/* 
            filtrer les articles correspondant a la categorie
            trier par ordre de creation le plus recent
            iteration pour afficher les articles 
          */}
          {articles.filter((article: any) => article.article_category === category.category_slug)
            .sort((a: any, b: any) => a.first_publication_date < b.first_publication_date ? 1 : -1)
            .map((articleItem: any) => (
              <Fragment key={articleItem.id}>
                <p>{articleItem.article_title}</p>
                <p>{articleItem.first_publication_date}</p>
              </Fragment>
          ))}
        </Fragment>

      ))}
    </>
  );
};

export default CategoryList;
