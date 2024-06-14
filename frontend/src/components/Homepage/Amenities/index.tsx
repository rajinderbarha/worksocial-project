import React from 'react'
import classes from './workbetter.module.css'
import Image from 'next/image'
import { getStrapiMedia } from '@/data/utils';
function Amenities({ data }: any) {
    console.log(data);
    const { title, ammenities} = data
  return (
    <div className={`${classes.Workbetter} pink`}>
      <h2 className='text-center'>{title}</h2>
      <div className={`${classes.Workbetter_Icon_boxs}`}>

        <div className='row '>
          {ammenities.data.map((ammenities: any, index: number) => (
              
          <div key={index} className='col-md-3 col-6 px-1 mb-2'>
            <div className={`${classes.Workbetter_boxs} ${classes.teal} text-center rounded_border `}>
              <Image src={getStrapiMedia(ammenities.Icon.url)} alt='WiFi' className='mx-auto' width={160} height={160}/>
              <p>{ammenities.title}</p>
            </div>
          </div>
          ))}


          

          
        </div>

      </div>
    </div>
  )
}

export default Amenities