import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from './Ourservices.module.css'
import { FaArrowRight } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { getStrapiMedia } from "@/data/utils";

// import Coworking_Space from '../../../assets/images/home/Coworking_Space.svg'
import Image from 'next/image';
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
function Ourservices({ data }: any) {
    const { title, heading, services } = data
    console.log(services);
    
    const [display, setDisplay] = useState(true);
    //   const [width, setWidth] = useState(600);
    console.log(setDisplay)
    const settings = {
        infinite: true,
        slidesToShow: 4,
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
        <>
            <div className={`${classes.Ourservices}`}>
                <div className='Containers_main'>
                    <h2 className='mb-4 text-center'>{title}</h2>
                    <div className={`${classes.Ourservices_p} text-center `}>
                        <BlocksRenderer content={heading} />
                    </div>

                    <div
                        style={{

                            display: display ? "block" : "none",
                            margin: "0 auto"
                        }}
                    >
                        <Slider {...settings}>

                            {  services?.data?.map((service: any, index: number) => (
                                
                                <div key={index}>
                            <div className={`${classes.cards}`}>
                                <div className={`${classes.cards_header}`}>
                                    <div className=''>
                                        <h5>{service.title}</h5>
                                        <p>{service.heading}</p>
                                        <div className={`${classes.users} pink w-max`}>
                                            <LuUsers /> {service.capacity}
                                        </div>
                                    </div>
                                    <div className={`${classes.cards_icon} text-white orange d-flex align-items-center justify-content-center`} >
                                        <FaArrowRight />
                                    </div>
                                </div>
                                <Image src={getStrapiMedia(service.Icon.url)} alt="Image" width={385} height={340}/>
                            </div>

                        </div>
                            ))}




                        
                        </Slider>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Ourservices




// <div>
// <div className={`${classes.cards}`}>
//     <div className={`${classes.cards_header}`}>
//         <div className=''>
//             <h5>Private Office</h5>
//             <p>Private, fully furnished,all-inclusive office</p>
//             <div className={`${classes.users} pink w-max`}>
//                 <LuUsers /> 1-2
//             </div>
//         </div>
//         <div className={`${classes.cards_icon} text-white orange d-flex align-items-center justify-content-center`} >
//             <FaArrowRight />
//         </div>
//     </div>
//     {/* <Image src={Coworking_Space} alt="Image" /> */}
// </div>

// </div>
// <div>
// <div className={`${classes.cards}`}>
//     <div className={`${classes.cards_header}`}>
//         <div className=''>
//             <h5>Private Office</h5>
//             <p>Private, fully furnished,all-inclusive office</p>
//             <div className={`${classes.users} pink w-max`}>
//                 <LuUsers /> 1-2
//             </div>



//         </div>
//         <div className={`${classes.cards_icon} text-white orange d-flex align-items-center justify-content-center`} >
//             <FaArrowRight />
//         </div>
//     </div>
//     {/* <Image src={Coworking_Space} alt="Image" /> */}
// </div>

// </div>
// <div>
// <div className={`${classes.cards}`}>
//     <div className={`${classes.cards_header}`}>
//         <div className=''>
//             <h5>Private Office</h5>
//             <p>Private, fully furnished,all-inclusive office</p>
//             <div className={`${classes.users} pink w-max`}>
//                 <LuUsers /> 1-2
//             </div>
//         </div>
//         <div className={`${classes.cards_icon} text-white orange d-flex align-items-center justify-content-center`} >
//             <FaArrowRight />
//         </div>
//     </div>
//     {/* <Image src={Coworking_Space} alt="Image" /> */}
// </div>

// </div>
// <div>
// <div className={`${classes.cards}`}>
//     <div className={`${classes.cards_header}`}>
//         <div className=''>
//             <h5>Private Office</h5>
//             <p>Private, fully furnished,all-inclusive office</p>
//             <div className={`${classes.users} pink w-max`}>
//                 <LuUsers /> 1-2
//             </div>
//         </div>
//         <div className={`${classes.cards_icon} text-white orange d-flex align-items-center justify-content-center`} >
//             <FaArrowRight />
//         </div>
//     </div>
//     {/* <Image src={Coworking_Space} alt="Image" /> */}
// </div>

// </div>
// <div>
// <div className={`${classes.cards}`}>
//     <div className={`${classes.cards_header}`}>
//         <div className=''>
//             <h5>Private Office</h5>
//             <p>Private, fully furnished,all-inclusive office</p>
//             <div className={`${classes.users} pink w-max`}>
//                 <LuUsers /> 1-2
//             </div>
//         </div>
//         <div className={`${classes.cards_icon} text-white orange d-flex align-items-center justify-content-center`} >
//             <FaArrowRight />
//         </div>
//     </div>
//     {/* <Image src={Coworking_Space} alt="Image" /> */}
// </div>

// </div>