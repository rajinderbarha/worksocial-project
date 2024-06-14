import React from 'react'
import classes from './space.module.css'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
import { getStrapiMedia } from '@/data/utils';
function Space({ data }: any) {
    const {title, description,BannerBtn, CardImg} = data.Banner
    console.log(data);
    const backgroundImageStyle = {
        backgroundImage: `url(${getStrapiMedia(CardImg.url)})`,
      };
    return (
        <div className={`${classes.space}`} style={ backgroundImageStyle}>

            <div className='Containers_main'>
                <div className={`${classes.space_bg}`}>
                    {/* <Image src={Find_space} className={`${classes.space_Image}`} alt="Banner" /> */}
                    <div className={`${classes.space_content} `}>
                        
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <button className='d-flex button_1 w-100 text-white justify-content-between orange align-items-center'>{BannerBtn.title}<div className='btn_icon cream '><FaArrowRight /></div></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Space