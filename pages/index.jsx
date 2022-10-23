import Head from "next/head";
import BestSellersSection from "../components/BestSellersSection";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sofa Furniture | Manufacturer</title>
        <meta name="description" content="Created by Tolgahan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      <BestSellersSection />
    </>
  );
}
