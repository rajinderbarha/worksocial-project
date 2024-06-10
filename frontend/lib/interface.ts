//---------------------------------------------Header------------------------------------

export interface HeaderType {
    id: number;
    title: string;
    blocks: BlockType[];
  }
  
  export interface BlockType {
    NavbarLogo: ImageType;
    NavLinks: NavLinkType[];
    ScheduleBtn: ButtonType;
  }
  
  export interface ButtonType extends LinkType {
    title: string;
  }
  
  export interface NavLinkType extends LinkType {
    id: number;
    title: string;
    icon?: ImageType;
  }
  
  export interface ImageType {
    id: number;
    url: string;
    alternativeText: string;
  }
  
  export interface LinkType {
    url: string;
  }
  


//---------------------------------------------Header------------------------------------
