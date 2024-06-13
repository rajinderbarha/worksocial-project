import React from 'react'
import classes from './Footer.module.css'
// import Logo_light from '../../../images/home/Logo_light.svg'
import Image from 'next/image'
// import Facebook from '../../../images/home/facebook.svg'
import { getStrapiMedia } from '../../data/utils';
import Link from 'next/link';
function Footer({ footerData }: any) {


    console.log(footerData);


    const { FooterLogo, FooterList } = footerData.block[0]
    const { socialIcons, copyright, services } = footerData


    return (
        <div className={`${classes.Footer}`}>
            <div className='Containers_main'>
                <div className={`${classes.Footer_bg}`}>
                    <div className='Containers_x'>
                        <div className={`${classes.footer_row} d-block d-md-flex`}>
                            <div className={`${classes.footer_logo} d-flex align-items-center`}>

                                <Image src={getStrapiMedia(FooterLogo.url)} width={269} height={125} alt='Logo' />
                            </div>
                            <div className={`${classes.footer_Locations} w-100`}>
                                <div className={`${classes.Footer_links} d-block d-md-flex justify-content-between `}>
                                    {FooterList.slice(0, 3).map(({ heading, links }: any, index: number) => (
                                        <div key={index} className={`${classes.footer_Locations}`}>

                                            <h3 key={index}>{heading}</h3>
                                            <ul className='p-0'>
                                                {links?.map(({ title, url, id }: any) => (

                                                    <li key={id}>{title}</li>

                                                ))}

                                                {index === 0 ? <li className={`${classes.coming_soon}`}>More coming soon!</li> : ""}

                                            </ul>

                                            {index === 2 && <div className={`${classes.media_icons} d-flex gap-2`}>
                                                {socialIcons?.map(({ url, icon, id }: any) => (
                                                    <Image key={id} src={getStrapiMedia(icon.url)} height={32} width={32} alt='Facebook' />
                                                ))}

                                            </div>

                                            }
                                        </div>
                                    ))}
                                </div>
                                {FooterList?.slice(3, 5).map((page: any, index: number) => (
                                    <Link href={page.headingUrl} key={index}> <h4 >{page.heading}</h4> </Link>
                                ))}


                            </div>



                        </div>
                        <div className={`${classes.copy_right} d-block gap-5  d-md-flex`}>
    <p>{copyright}</p>
    {services?.map((item:any,inde:number)=>(

    <Link key={inde} href={item.url}><p>{item.title}</p></Link>
    ))}
</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
