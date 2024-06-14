import React from 'react';
import classes from './workbetter.module.css';
import Image from 'next/image';
import { getStrapiMedia } from '@/data/utils';

function Amenities({ data }: any) {
    const { title, ammenities } = data;
    return (
        <div className={`${classes.Workbetter} pink`}>
            <h2 className='text-center'>{title}</h2>
            <div className={`${classes.Workbetter_Icon_boxs}`}>
                <div className='row'>
                    {ammenities.data.map((ammenities: any, index: number) => (
                        <div key={index} className='col-md-3 col-6 px-1 mb-2'>
                            <div className={`${classes.Workbetter_boxs} ${index % 2 === 0 ? classes.radius117 : classes.radius30} text-center`}>
                                <Image src={getStrapiMedia(ammenities.Icon.url)} alt={ammenities.title} className='mx-auto' width={100} height={100} />
                                <div className={classes.Workbetter_boxs_P}>
                                    <p>{ammenities.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Amenities;
