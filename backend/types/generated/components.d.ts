import type { Schema, Attribute } from '@strapi/strapi';

export interface GlobalCard extends Schema.Component {
  collectionName: 'components_global_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    heading: Attribute.String;
    description: Attribute.String;
    CardImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    BannerBtn: Attribute.Component<'utils.links'>;
  };
}

export interface GlobalFooter extends Schema.Component {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    title: Attribute.String;
    FooterLogo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    FooterList: Attribute.Component<'utils.links-list', true>;
  };
}

export interface GlobalHeader extends Schema.Component {
  collectionName: 'components_global_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    NavbarLogo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    NavLinks: Attribute.Component<'utils.links', true>;
    ScheduleBtn: Attribute.Component<'utils.links'>;
  };
}

export interface HomepageAllAmenities extends Schema.Component {
  collectionName: 'components_homepage_all_amenities';
  info: {
    displayName: 'All Amenities';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface HomepageBlogs extends Schema.Component {
  collectionName: 'components_homepage_blogs';
  info: {
    displayName: 'Blogs';
  };
  attributes: {
    title: Attribute.String;
    BlogSectionBtn: Attribute.Component<'utils.links'>;
  };
}

export interface HomepageFaQs extends Schema.Component {
  collectionName: 'components_homepage_fa_qs';
  info: {
    displayName: 'FAQs';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface HomepageHeroBlockWithScheduleATour extends Schema.Component {
  collectionName: 'components_homepage_hero_block_with_schedule_a_tours';
  info: {
    displayName: 'Hero block with schedule a tour';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    HeroSectionBgImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Banner: Attribute.Component<'utils.banner'>;
  };
}

export interface HomepageHowToFindYourSpace extends Schema.Component {
  collectionName: 'components_homepage_how_to_find_your_spaces';
  info: {
    displayName: 'How to Find Your  Space';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface HomepageLocationsAvailable extends Schema.Component {
  collectionName: 'components_homepage_locations_availables';
  info: {
    displayName: 'Locations Available';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface HomepageNearbyLocations extends Schema.Component {
  collectionName: 'components_homepage_nearby_locations';
  info: {
    displayName: 'Nearby Locations';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface HomepageOurServices extends Schema.Component {
  collectionName: 'components_homepage_our_services';
  info: {
    displayName: 'Our Services';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    services: Attribute.Relation<
      'homepage.our-services',
      'oneToMany',
      'api::service.service'
    >;
  };
}

export interface HomepageSpacesForEveryScale extends Schema.Component {
  collectionName: 'components_homepage_spaces_for_every_scales';
  info: {
    displayName: 'Spaces for every scale';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface HomepageTestimonials extends Schema.Component {
  collectionName: 'components_homepage_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface HomepageViewSpacesBanner extends Schema.Component {
  collectionName: 'components_homepage_view_spaces_banners';
  info: {
    displayName: 'View spaces banner';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    Banner: Attribute.Component<'global.card'>;
  };
}

export interface UtilsBanner extends Schema.Component {
  collectionName: 'components_utils_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    title: Attribute.String;
    heading: Attribute.String;
    description: Attribute.String;
    BannerBtn: Attribute.Component<'utils.links'>;
  };
}

export interface UtilsLinksList extends Schema.Component {
  collectionName: 'components_utils_links_lists';
  info: {
    displayName: 'LinksList';
  };
  attributes: {
    heading: Attribute.String;
    links: Attribute.Component<'utils.links', true>;
    headingUrl: Attribute.String;
  };
}

export interface UtilsLinks extends Schema.Component {
  collectionName: 'components_utils_links';
  info: {
    displayName: 'Links';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'global.card': GlobalCard;
      'global.footer': GlobalFooter;
      'global.header': GlobalHeader;
      'homepage.all-amenities': HomepageAllAmenities;
      'homepage.blogs': HomepageBlogs;
      'homepage.fa-qs': HomepageFaQs;
      'homepage.hero-block-with-schedule-a-tour': HomepageHeroBlockWithScheduleATour;
      'homepage.how-to-find-your-space': HomepageHowToFindYourSpace;
      'homepage.locations-available': HomepageLocationsAvailable;
      'homepage.nearby-locations': HomepageNearbyLocations;
      'homepage.our-services': HomepageOurServices;
      'homepage.spaces-for-every-scale': HomepageSpacesForEveryScale;
      'homepage.testimonials': HomepageTestimonials;
      'homepage.view-spaces-banner': HomepageViewSpacesBanner;
      'utils.banner': UtilsBanner;
      'utils.links-list': UtilsLinksList;
      'utils.links': UtilsLinks;
    }
  }
}
