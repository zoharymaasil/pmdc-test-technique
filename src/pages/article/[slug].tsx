import { getFromPrismic, formatPrismicDoc } from 'helpers/prismic';

interface Props {
  article: any;
}

const ArticlePage = ({ article }: Props) => {
  console.debug({article});
  return (
    <>
      <p>ArticlePage</p>
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

  const article = formattedArticles.filter((article: any) => article.slug === slug);
  return {
    props: { article },
  }
}
