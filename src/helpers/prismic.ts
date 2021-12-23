import Prismic from "@prismicio/client";
import { useEffect, useMemo, useState } from "react";
import { resourceLimits } from "worker_threads";

// Prismic API endpoint
export const apiEndpoint = process.env.PRISMIC_URL || '';

// Client method to query Prismic
export const client = Prismic.client(apiEndpoint);

const cache: any = {};

const setPrismicCache = (id: string, data: any) => {
  cache[id] = data;
};

// utilisée pour récupérer les données depuis prismic
export const getFromPrismic = async (id: string, options?: any) => {
  if (cache[id]) return cache[id];
  
  const doc = await client.query([Prismic.Predicates.at("document.type", id)], options);
  setPrismicCache(id, doc.results);
  return doc.results;
};

// utilisée dans les composants pour utiliser le cache existant
export function usePrismic(id: string) {
  const [loading, setLoading] = useState<boolean>(Boolean(cache[id]));
  const [doc, setDoc] = useState<any>(!cache[id] ? null : cache[id]);

  useEffect(() => {
    setLoading(true);
    getFromPrismic(id).then((res) => {
      setDoc(res);
      setLoading(false);
    });
  }, [id]);

  return { doc, loading };
}

export const formatPrismicDoc = (doc: any) => {
  const result: any[] = [];

  doc.map((item: any) => {
    result.push({
      ...item.data, 
      id: item.id, 
      first_publication_date: item.first_publication_date,
      last_publication_date: item.last_publication_date
    });
  });

  return result;
};