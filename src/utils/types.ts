export interface IArticle {
  id: string;
  article_title: string;
  article_description: string;
  article_category: string;
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

export interface ICategory {
  id: string;
  first_publication_date: string;
  last_publication_date: string;
  slug: string;
  category_name: string;
  category_img: {
    alt: string;
    copyright: string | null;
    dimensions: { width: number; height: number; };
    url: string;
  };
}