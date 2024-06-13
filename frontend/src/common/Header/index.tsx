import React from 'react';
import { AiOutlineAlignRight } from "react-icons/ai";
import Image from 'next/image';
import classes from './Header.module.css';
import { FaArrowRight } from "react-icons/fa";
import { getStrapiMedia } from '@/data/utils';
import Link from 'next/link';
import { HeaderType } from '../../../lib/interface';

function Header({ headerData }: { headerData: HeaderType }) {
  const { NavbarLogo:{url,alternativeText}, NavLinks, ScheduleBtn } = headerData.blocks[0];
  
  return (
    <div className={classes.Navbar}>
      <nav className={`navbar navbar-expand-lg Containers_x`}>
        <div className="container-fluid">
            <Link href="#" className="navbar-brand">
              <Image 
                src={getStrapiMedia(url)} 
                width={187} 
                height={102} 
                alt={alternativeText} 
              />
            </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className={`navbar-toggler-icon dark ${classes.ToggleIcon}`}><AiOutlineAlignRight /></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className={`${classes.manu_items} navbar-nav ms-auto mb-2 mb-lg-0`}>
              {NavLinks?.map(({ title, url, icon, id }: any) => (
                <li className={`nav-item`} key={id}>
                    <Link href={url} className="active" aria-current="page">
                      <span className={`me-1 ${classes.LinkText}`}>{title}</span>   
                   {(id === 1 || id ===2) ?  <FaArrowRight /> : ""}
                    </Link>
                </li>
              ))}
              <button className={`${classes.Nav_button}`}>
                <span className={`me-4 ${classes.ButtonText}`}>{ScheduleBtn.title}</span> <FaArrowRight />
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;












// import React from 'react'
// import { AiOutlineAlignRight } from "react-icons/ai";
// // import Logo from '../../../images/home/logo.png'
// import Image from 'next/image';
// import classes from './Header.module.css'
// import { FaArrowRight } from "react-icons/fa";
// import { getStrapiMedia } from '@/data/utils';
// import Link from 'next/link';

// function Header({headerData}:any) {

//   console.log("+++++++++++++++++++++++++++++++++-------------+++++++++++",headerData)

  
//   const data = headerData.block[0];
//   const{NavbarLogo:{alternativeText,url}, NavbarLinks, ScheduleButton:{title,id}} = data
//   console.log(data);
  

//   return (
//     <div className={`${classes.Navbar}`}>
//       <nav className="navbar navbar-expand-lg Containers_x">
//   <div className="container-fluid">
//     <Link className="navbar-brand" href="#">
//       <Image src={getStrapiMedia(url)} width={187} height={102} alt={alternativeText}/></Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon dark"><AiOutlineAlignRight /></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className={`${classes.manu_items} navbar-nav ms-auto mb-2 mb-lg-0`}>
//         {NavbarLinks?.map(({title,url,icon,id}:any)=>(

//         <li className={` nav-item` } key={id}>
//           <Link  className=" active" aria-current="page" href={url}><span className='me-1'>{title} </span> <FaArrowRight /></Link>
//         </li>
//       ))}
       
//        <button className={`${classes.Nav_button}`}><span className='me-4'>{title}</span> <FaArrowRight /></button>
//       </ul>
      
//     </div>
//   </div>
// </nav>
//     </div>
//   )
// }