import React from 'react';
import { useRouter } from 'next/router';
import { ICategory, IArticle } from 'utils/types';
import ArticleList from 'components/Article/ArticleList';

import {
  CategoryWrapper,
  CategoryLink
} from './CategoryList.styles';

interface Props {
  categories: ICategory[];
  articles: IArticle[];
  length?: number;
}

const CategoryList = ({ categories, articles, length }: Props) => {
  const router = useRouter();

  return (
    <>
      {categories.map((category: ICategory) => (
        <CategoryWrapper key={category.id}>
          <CategoryLink href={`/category/${category.slug}`} onClick={() => router.push('/category/[slug]', `/category/${category.slug}`, { shallow: true })} title={category.category_name}>
            {category.category_name}
          </CategoryLink>
          <ArticleList category={category} articles={articles} length={length} />
        </CategoryWrapper>

      ))}
    </>
  );
};

export default CategoryList;
