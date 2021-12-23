import React, { Fragment } from 'react';
import { useRouter } from 'next/router';

import ArticleList from 'components/Article/ArticleList';

import {
  CategoryWrapper,
  CategoryLink
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
          <ArticleList category={category} articles={articles} />
        </CategoryWrapper>

      ))}
    </>
  );
};

export default CategoryList;
