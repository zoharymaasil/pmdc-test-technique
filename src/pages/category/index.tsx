import React from 'react';
import Head from 'next/head';
import { ICategory, IArticle } from 'utils/types';
import { getFromPrismic, formatPrismicDoc } from 'helpers/prismic';
import CategoryList from 'components/CategoryList/CategoryList';

export interface Props {
  categories: ICategory[];
  articles: IArticle[];
}

const CategoryPage = ({ categories, articles }: Props) => {
  return (
    <>
      <Head><title>Catégories</title></Head>
      <CategoryList categories={categories} articles={articles} />
    </>
  );
};

export default CategoryPage;

export async function getStaticProps() {
  const rawCategories = await getFromPrismic('categorie', { lang: "*" });
  const categories = formatPrismicDoc(rawCategories);

  const rawArticles = await getFromPrismic('article', { 
    orderings: '[document.first_publication_date]',
    lang: '*' 
  });
  const articles = formatPrismicDoc(rawArticles);

  return {
    props: {
      categories,
      articles,
    },
  }
}