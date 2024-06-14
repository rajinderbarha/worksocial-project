import React from 'react';
import classes from './banner.module.css';
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';

import Banner_image from '../../../assets/images/home/Home_banner_2.png';
import { getStrapiMedia } from '@/data/utils';

interface BannerProps {
  data: any;
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  console.log(data);
  const backgroundImageStyle = {
    backgroundImage: `url(${getStrapiMedia(data.HeroSectionBgImg.url)})`,
  };

  return (
    <div className={`${classes.Banner}`}>
      <div className="Containers_main">
        <div className={`${classes.Banner_bg}`} style={ backgroundImageStyle}>
          {/* <Image src={getStrapiMedia(data.HeroSectionBgImg.url)} width={800} height={600} alt=""/> */}
          <Image
            src={Banner_image}
            className={`${classes.Banner_Image}`}
            alt="Banner"/>
          <div className={`${classes.Banner_content} pink`}>
            <h6 className="sub_heading mb-3">{data.Banner.title}</h6>
            <h1>{data.Banner.heading}</h1>
            <p>{data.Banner.description}</p>
            <button className="d-flex button_1 w-100 justify-content-between align-items-center">
              {data.Banner.BannerBtn.title}
              <div className="btn_icon orange">
                <FaArrowRight />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
