import { getFromPrismic, formatPrismicDoc } from 'helpers/prismic';

interface Props {
  category: any;
  articles: any;
}

const CategoryPage = ({ category, articles }: Props) => {
  console.debug({category, articles});
  return (
    <>
      <p>CategoryPage</p>
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
