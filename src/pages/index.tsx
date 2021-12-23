import { getFromPrismic, getSingleFromPrismic, formatPrismicDoc } from 'helpers/prismic';
import { renderRichText } from 'utils/format';

import CategoryList from 'components/CategoryList/CategoryList';
import PostalCodeForm from 'components/PostalCodeForm/PostalCodeForm';

interface Props {
  presentation: any;
  categories: any;
  articles: any;
}

const Home = ({ categories, articles, presentation }: Props) => {
  // console.debug({ categories, articles, presentation });
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: renderRichText(presentation.presentation) }}/>
      <CategoryList categories={formatPrismicDoc(categories)} articles={formatPrismicDoc(articles)} />
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