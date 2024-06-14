// pages/index.tsx

import Head from "next/head";
import { getHomePageData } from "../../lib/strapiQuery";
import Banner from "@/components/Homepage/Banner";
import Ourservices from "@/components/Homepage/OurServices";
import Places from "@/components/Homepage/Places";
import Business from "@/components/Homepage/Bussiness";
import Space from "@/components/Homepage/Space";
import Amenities from "@/components/Homepage/Amenities";
import Perfectspace from "@/components/Homepage/PerfectSpace";
import Brandslogos from "@/components/Homepage/BrandsLogo";
import Workspaces from "@/components/Homepage/WorkSpaces";

export default function Home({ homepageData }: any) {
  const { block } = homepageData;
  console.log(block);
  
  if (!block || block.length === 0) return <div>No Blocks found!!!</div>;

  return (
    <div>
      {block.map((block: any) => {
        switch (block.__component) {
          case "homepage.hero-block-with-schedule-a-tour":
            return <Banner key={block.id} data={block} />;
          case "homepage.our-services":
            return <Ourservices key={block.id} data={block} />;
          case "homepage.locations-available":
            return <Places key={block.id} data={block} />;
          case "homepage.spaces-for-every-scale":
            return <Business key={block.id} data={block} />;
          case "homepage.view-spaces-banner":
            return <Space key={block.id} data={block} />;
          case "homepage.all-amenities":
            return <Amenities key={block.id} data={block} />;
          case "homepage.nearby-locations":
            return <Perfectspace key={block.id} data={block} />;
          case "homepage.home-to-leading-brands":
            return <Brandslogos key={block.id} data={block} />;
          case "homepage.testimonials":
            return <Workspaces key={block.id} data={block} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

export const getStaticProps = async () => {
  const homepageData = await getHomePageData();
  return {
    props: {
      homepageData,
    },
  };
}
