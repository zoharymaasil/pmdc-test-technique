
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { IArticle } from 'utils/types';
import { getFromPrismic, formatPrismicDoc } from 'helpers/prismic';
import { getDateHours } from 'utils/format';
import { monthsLong } from 'utils/constants';

import {
  ArticlePageWrapper,
  ImageWrapper,
} from 'styled/ArticlePage.styles';

interface Props {
  article: IArticle;
}

const ArticlePage = ({ article }: Props) => {
  const formattedDates = getDateHours(article.first_publication_date);
  return (
    <>
      <Head><title>{article.article_title}</title></Head>
      <ArticlePageWrapper>
        <h1>{article.article_title}</h1>
        <p className="pDate">{`Publié le ${formattedDates.dates[2]} ${monthsLong[Number(formattedDates.dates[1]) - 1]} ${formattedDates.dates[0]} à ${formattedDates.hours[1]}:${formattedDates.hours[2]}`}</p>
        <ImageWrapper>
          <Image
            src={article.article_img.url}
            alt={article.article_img.alt}
            layout='fill'
            className='articleImg'
          />
        </ImageWrapper>
        
        <p className="pDescription">{article.article_description}</p>
      </ArticlePageWrapper>
    </>
  )
}

export default ArticlePage;

export async function getStaticPaths() {
  const rawArticles = await getFromPrismic('article', { lang: '*' });

  const formattedArticles = formatPrismicDoc(rawArticles);
  const paths = formattedArticles.map((article) => ({
    params: {
      slug: article.slug,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const { slug } = params

  const rawArticles = await getFromPrismic('article', { lang: '*' });

  const formattedArticles = formatPrismicDoc(rawArticles);

  let article = formattedArticles.filter((article: any) => article.slug === slug);
  article = article.length > 0 ? article[0] : article;
  return {
    props: { article },
  }
}
