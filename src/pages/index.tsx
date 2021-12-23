import { getFromPrismic, formatPrismicDoc } from 'helpers/prismic';
import { renderRichText } from 'utils/format';

import CategoryList from 'components/CategoryList/CategoryList';

interface Props {
  presentation: any;
  categories: any;
  articles: any;
}

const Home = ({ categories, articles, presentation }: Props) => {
  // console.debug({ categories, articles, presentation });
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: renderRichText(presentation[0].data.presentation) }}/>
      <CategoryList categories={formatPrismicDoc(categories)} articles={formatPrismicDoc(articles)} />
    </>
  )
}

export default Home;

export async function getStaticProps() {
  const presentation = await getFromPrismic('presentation', { lang: "*" });
  const categories = await getFromPrismic('categorie', { lang: "*" });
  const articles = await getFromPrismic('article', { 
    orderings: '[document.last_publication_date]',
    lang: '*' 
  });
  
  return {
    props: {
      presentation,
      categories,
      articles,
    },
  }
}