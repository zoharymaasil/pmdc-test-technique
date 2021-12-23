import React from 'react';
import Head from 'next/head';
import { getFromPrismic, formatPrismicDoc } from 'helpers/prismic';
import { CategoryTitle } from 'components/CategoryList/CategoryList.styles';
import ArticleList from 'components/Article/ArticleList';

interface Props {
  category: any;
  articles: any;
}

const CategoryPage = ({ category, articles }: Props) => {
  return (
    <>
      <Head><title>{category[0].category_name}</title></Head>
      <CategoryTitle>{`Catégorie : ${category[0].category_name}`}</CategoryTitle>
      <ArticleList category={category[0]} articles={articles} />
    </>
  )
}

export default CategoryPage;

export async function getStaticPaths() {
  const categories = await getFromPrismic('categorie', { lang: "*" });

  const formattedCategories = formatPrismicDoc(categories);
  const paths = formattedCategories.map((category) => ({
    params: {
      slug: category.slug,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const { slug } = params

  const rawCategories = await getFromPrismic('categorie', { lang: "*" });
  const rawArticles = await getFromPrismic('article', { 
    orderings: '[document.first_publication_date]',
    lang: '*' 
  });

  const formattedCategories = formatPrismicDoc(rawCategories);
  const formattedArticles = formatPrismicDoc(rawArticles);

  const category = formattedCategories.filter((cat: any) => cat.slug === slug);
  const articles = formattedArticles.filter((article: any) => article.article_category === slug);
  return {
    props: { category, articles },
  }
}
