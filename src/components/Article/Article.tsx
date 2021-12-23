import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import {
  ArticleCard,
  BadgeDate,
  ArticleContent,
} from './Article.styles';
import { months } from 'utils/constants';

interface IArticle {
  article_category: string;
  article_description: string;
  article_title: string;
  article_id: string;
  first_publication_date: string;
  last_publication_date: string;
  slug: string;
  article_img: {
    alt: string;
    copyright: string | null;
    dimensions: { width: number; height: number; };
    url: string;
  }
}

interface Props {
  data: IArticle;
}

const Article = ({ data }: Props) => {
  const router = useRouter();

  const date = data.first_publication_date.substring(0, 10);
  const hours = data.first_publication_date.substring(11, 19);

  const aDate = date.split('-');
  const aHours = hours.split(':');

  return (
    <ArticleCard href={`/article/${data.slug}`} onClick={() => router.push('/article/[slug]', `/article/${data.slug}`, { shallow: true })}>
      <ArticleContent>
        <Image
          src={data.article_img.url}
          alt={data.article_img.alt}
          width={320}
          height={200}
        />
        <p className="pTitle">{data.article_title}</p>
        <p className="pDescription">{`${data.article_description.substring(0, 150)}...`}</p>
        <BadgeDate>
          <p className='lblDate'>{aDate[2]}</p>
          <p>{months[Number(aDate[1]) - 1]}</p>
          <p>{`${aHours[1]}:${aHours[2]}`}</p>
        </BadgeDate>
      </ArticleContent>
    </ArticleCard>
  );
};

export default Article;
