import Head from "next/head";
import BestSellersSection from "../components/BestSellersSection";
import HeroSection from "../components/HeroSection";
import { getProductsData } from "../firebase";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Sofa Furniture | Manufacturer</title>
        <meta name="description" content="Created by Tolgahan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      <BestSellersSection products={products} />
    </>
  );
}

export const getStaticProps = async () => {
  const products = await getProductsData();

  return {
    props: {
      products,
    },
  };
};
