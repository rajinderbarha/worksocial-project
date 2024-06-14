
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import classes from './Business.module.css'

import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
import { getStrapiMedia } from "@/data/utils";
function Business({ data }: any) {
    console.log(data);
    const { title, description, workspace_preferences } = data
    const [display, setDisplay] = useState(true);
    //   const [width, setWidth] = useState(600);
    console.log(setDisplay)
      const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        
        responsive: [
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }, {
            breakpoint: 768,
            settings: {
              slidesToShow: 1.1,
              centerMode: true,
              slidesToScroll: 1,
              initialSlide: 1.1
            }
          }
        ]
      };

    return (
        <div className={`${classes.Business}`}>
            <div className='Containers_x'>

                <div className={`${classes.Business_content}`}>
                    <h2 className='mb-4'>{title}</h2>
                    <p>{description}</p>
                    </div>
                    <div style={{
          display: display ? "block" : "none",
          margin: "0 auto"
        }}
      >
                    <Slider {...settings}>

                    {workspace_preferences.data.map((item: any, index: number)=>(
                        <div key={index} className={`${classes.business_card} position-relative`}>
                        <Image src={getStrapiMedia(item.CoverImage.url)} alt='For_freelancers' width={229} height={476} />
                        <div className={`${classes.business_card_footer}`}>
                            <button className='d-flex button_1 w-100 justify-content-between align-items-center'>{item.Type}<div className={`${classes.business_card_icon} btn_icon orange `}><FaArrowRight /></div></button>
                        </div>
                    </div>
                    ))}
                    
                   
                    
        </Slider>
                   
             </div>
            </div>
        </div>
    )
}

export default Business