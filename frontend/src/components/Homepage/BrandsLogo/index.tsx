import React from 'react';
import classes from './brandslogos.module.css';
import Image from 'next/image';
import { getStrapiMedia } from '@/data/utils';

function Brandslogos({ data }: any) {
    const { title, description, brand_collaborations } = data;

    return (
        <div className={classes.Brandslogos}>
            <div className="Containers_x">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="Containers_main">
                <div className={classes.Brandslogos_box}>
                    {brand_collaborations.data.map((item: any, index: number) => (
                        <div key={index}>
                            <Image src={getStrapiMedia(item.BrandLogo.url)} alt={item.BrandName} width={50} height={50} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Brandslogos;
