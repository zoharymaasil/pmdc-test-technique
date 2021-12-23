import React, { Fragment } from 'react';
import { useRouter } from 'next/router';

import Article from 'components/Article/Article';

import {
  CategoryWrapper,
  CategoryLink,
  ArticleWrapper,
} from './CategoryList.styles';

interface Props {
  categories: any;
  articles: any;
}

const CategoryList = ({ categories, articles }: Props) => {
  const router = useRouter();

  return (
    <>
      {categories.map((category: any) => (
        <CategoryWrapper key={category.id}>
          <CategoryLink href={`/category/${category.slug}`} onClick={() => router.push('/category/[slug]', `/category/${category.slug}`, { shallow: true })} title={category.category_name}>
            {category.category_name}
          </CategoryLink>
          {/* 
            filtrer les articles correspondant a la categorie
            trier par ordre de creation le plus recent
            iteration pour afficher les articles 
          */}
          <ArticleWrapper>
            {articles.filter((article: any) => article.article_category === category.slug)
              .sort((a: any, b: any) => a.first_publication_date < b.first_publication_date ? 1 : -1)
              .map((articleItem: any) => <Article key={articleItem.id} data={articleItem} />)}
          </ArticleWrapper>
        </CategoryWrapper>

      ))}
    </>
  );
};

export default CategoryList;
