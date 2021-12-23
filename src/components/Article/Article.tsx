import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { getDateHours } from 'utils/format';
import { months } from 'utils/constants';
import { IArticle } from 'utils/types';

import {
  ArticleCard,
  BadgeDate,
  ArticleContent,
  ImageWrapper,
} from './Article.styles';


interface Props {
  data: IArticle;
}

const Article = ({ data }: Props) => {
  const router = useRouter();
  const formattedDates = getDateHours(data.first_publication_date);

  return (
    <ArticleCard href={`/article/${data.slug}`} onClick={() => router.push('/article/[slug]', `/article/${data.slug}`, { shallow: true })}>
      <ArticleContent>
        <ImageWrapper>
          <Image
            src={data.article_img.url}
            alt={data.article_img.alt}
            layout='fill'
            className='articleImg'
          />
        </ImageWrapper>
        <p className="pTitle">{data.article_title}</p>
        <p className="pDescription">{`${data.article_description.substring(0, 150)}...`}</p>
        <BadgeDate>
          <p className='lblDate'>{formattedDates.dates[2]}</p>
          <p>{months[Number(formattedDates.dates[1]) - 1]}</p>
          <p>{`${formattedDates.hours[1]}:${formattedDates.hours[2]}`}</p>
        </BadgeDate>
      </ArticleContent>
    </ArticleCard>
  );
};

export default Article;
