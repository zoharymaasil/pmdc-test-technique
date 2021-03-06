import React from 'react';
import { ICategory, IArticle } from 'utils/types';
import { getFromPrismic, getSingleFromPrismic, formatPrismicDoc } from 'helpers/prismic';
import { renderRichText } from 'utils/format';

import CategoryList from 'components/CategoryList/CategoryList';
import PostalCodeForm from 'components/PostalCodeForm/PostalCodeForm';

import { PresentationWrapper } from 'styled/Home.styles';

interface Props {
  presentation: any;
  categories: ICategory[];
  articles: IArticle[];
}

const Home = ({ categories, articles, presentation }: Props) => {
  return (
    <>
      <PresentationWrapper dangerouslySetInnerHTML={{ __html: renderRichText(presentation.presentation) }}/>
      <CategoryList categories={categories} articles={articles} length={3} />
      <PostalCodeForm />
    </>
  )
}

export default Home;

export async function getStaticProps() {
  const presentation = await getSingleFromPrismic('presentation', { lang: "*" });
  
  const rawCategories = await getFromPrismic('categorie', { lang: "*" });
  const categories = formatPrismicDoc(rawCategories);

  const rawArticles = await getFromPrismic('article', { 
    orderings: '[document.first_publication_date]',
    lang: '*' 
  });
  const articles = formatPrismicDoc(rawArticles);

  return {
    props: {
      presentation,
      categories,
      articles,
    },
  }
}