import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutUsHeroBannerSection extends Schema.Component {
  collectionName: 'components_about_us_hero_banner_sections';
  info: {
    displayName: 'HeroBannerSection';
  };
  attributes: {
    title: Attribute.String;
    heading: Attribute.String;
    description: Attribute.Text;
    Banner: Attribute.Component<'utils.simple-card'>;
  };
}

export interface AboutUsJoinWorkSocialBannerComponent extends Schema.Component {
  collectionName: 'components_about_us_join_work_social_banner_components';
  info: {
    displayName: 'Join WorkSocial Banner Component';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    CoverImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    linkBtn: Attribute.Component<'utils.links'>;
  };
}

export interface AboutUsOurProcess extends Schema.Component {
  collectionName: 'components_about_us_our_processes';
  info: {
    displayName: 'Our Process';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    ProcessSelectionSteps: Attribute.Component<'utils.simple-card', true>;
  };
}

export interface AboutUsOurStorySectionOne extends Schema.Component {
  collectionName: 'components_about_us_our_story_section_ones';
  info: {
    displayName: 'Our Story Section One';
  };
  attributes: {
    StoryOne: Attribute.Component<'utils.simple-card'>;
  };
}

export interface AboutUsOurStorySectionTwo extends Schema.Component {
  collectionName: 'components_about_us_our_story_section_twos';
  info: {
    displayName: 'Our Story Section Two';
  };
  attributes: {
    StoryTwo: Attribute.Component<'utils.simple-card'>;
  };
}

export interface AboutUsWorkLifeInsights extends Schema.Component {
  collectionName: 'components_about_us_work_life_insights';
  info: {
    displayName: 'Work-Life Insights';
  };
  attributes: {
    title: Attribute.String;
    ReadAllBlogBtn: Attribute.Component<'utils.links'>;
    blogs: Attribute.Relation<
      'about-us.work-life-insights',
      'oneToMany',
      'api::blog.blog'
    >;
  };
}

export interface AboutUsWorkSocialTeam extends Schema.Component {
  collectionName: 'components_about_us_work_social_teams';
  info: {
    displayName: 'WorkSocial Team';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    work_social_teams: Attribute.Relation<
      'about-us.work-social-team',
      'oneToMany',
      'api::work-social-team.work-social-team'
    >;
  };
}

export interface AllLocationsHeroSection extends Schema.Component {
  collectionName: 'components_all_locations_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {};
}

export interface AllLocationsJoinInFormSection extends Schema.Component {
  collectionName: 'components_all_locations_join_in_form_sections';
  info: {
    displayName: 'Join in Form Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    JoinInFormSectionCoverImg: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface AllLocationsSpaces extends Schema.Component {
  collectionName: 'components_all_locations_spaces';
  info: {
    displayName: 'Spaces';
  };
  attributes: {
    title: Attribute.String;
    spaces: Attribute.Relation<
      'all-locations.spaces',
      'oneToMany',
      'api::space.space'
    >;
  };
}

export interface AllLocationsWorkAtWorkSocial extends Schema.Component {
  collectionName: 'components_all_locations_work_at_work_socials';
  info: {
    displayName: 'work at workSocial';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    WorkSocialImages: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface AllServicesSpacesThatElevateYourBusiness
  extends Schema.Component {
  collectionName: 'components_all_services_spaces_that_elevate_your_businesses';
  info: {
    displayName: 'Spaces that elevate your business';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    des: Attribute.Text;
    CoverImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    SimpleCardComponent: Attribute.Component<'utils.simple-card', true>;
  };
}

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
    description: '';
  };
  attributes: {
    title: Attribute.String;
    ammenities: Attribute.Relation<
      'homepage.all-amenities',
      'oneToMany',
      'api::ammenity.ammenity'
    >;
    description: Attribute.String;
  };
}

export interface HomepageBlogs extends Schema.Component {
  collectionName: 'components_homepage_blogs';
  info: {
    displayName: 'Blogs';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    BlogSectionBtn: Attribute.Component<'utils.links'>;
    blogs: Attribute.Relation<'homepage.blogs', 'oneToMany', 'api::blog.blog'>;
  };
}

export interface HomepageFaQs extends Schema.Component {
  collectionName: 'components_homepage_fa_qs';
  info: {
    displayName: 'FAQs';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    faqs: Attribute.Relation<'homepage.fa-qs', 'oneToMany', 'api::faq.faq'>;
  };
}

export interface HomepageFindPerfectSpaceCard extends Schema.Component {
  collectionName: 'components_homepage_find_perfect_space_cards';
  info: {
    displayName: 'FindPerfectSpaceCard';
  };
  attributes: {
    index: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    ScheduleTourLink: Attribute.Component<'utils.links'>;
    FindPerfectSpaceCardIcon: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
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

export interface HomepageHomeToLeadingBrands extends Schema.Component {
  collectionName: 'components_homepage_home_to_leading_brands';
  info: {
    displayName: 'Home to leading Brands';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    brand_collaborations: Attribute.Relation<
      'homepage.home-to-leading-brands',
      'oneToMany',
      'api::brand-collaboration.brand-collaboration'
    >;
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
    AvailableLocations: Attribute.Relation<
      'homepage.locations-available',
      'oneToMany',
      'api::location.location'
    >;
  };
}

export interface HomepageNearbyLocations extends Schema.Component {
  collectionName: 'components_homepage_nearby_locations';
  info: {
    displayName: 'Nearby Locations';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    FindPerfectSpaceCard: Attribute.Component<
      'homepage.find-perfect-space-card',
      true
    >;
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

export interface HomepageSectionWithContactUsToday extends Schema.Component {
  collectionName: 'components_homepage_section_with_contact_us_todays';
  info: {
    displayName: 'Section With Contact us today';
  };
  attributes: {
    title: Attribute.String;
    BGImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomepageSpacesForEveryScale extends Schema.Component {
  collectionName: 'components_homepage_spaces_for_every_scales';
  info: {
    displayName: 'Spaces for every scale';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    workspace_preferences: Attribute.Relation<
      'homepage.spaces-for-every-scale',
      'oneToMany',
      'api::workspace-preference.workspace-preference'
    >;
  };
}

export interface HomepageTestimonials extends Schema.Component {
  collectionName: 'components_homepage_testimonials';
  info: {
    displayName: 'Testimonials';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    testimonials: Attribute.Relation<
      'homepage.testimonials',
      'oneToMany',
      'api::testimonial.testimonial'
    >;
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
    description: '';
  };
  attributes: {
    title: Attribute.String;
    heading: Attribute.String;
    description: Attribute.String;
    BannerBtn: Attribute.Component<'utils.links'>;
    coverImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

export interface UtilsSimpleCard extends Schema.Component {
  collectionName: 'components_utils_simple_cards';
  info: {
    displayName: 'Simple Card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heading: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-us.hero-banner-section': AboutUsHeroBannerSection;
      'about-us.join-work-social-banner-component': AboutUsJoinWorkSocialBannerComponent;
      'about-us.our-process': AboutUsOurProcess;
      'about-us.our-story-section-one': AboutUsOurStorySectionOne;
      'about-us.our-story-section-two': AboutUsOurStorySectionTwo;
      'about-us.work-life-insights': AboutUsWorkLifeInsights;
      'about-us.work-social-team': AboutUsWorkSocialTeam;
      'all-locations.hero-section': AllLocationsHeroSection;
      'all-locations.join-in-form-section': AllLocationsJoinInFormSection;
      'all-locations.spaces': AllLocationsSpaces;
      'all-locations.work-at-work-social': AllLocationsWorkAtWorkSocial;
      'all-services.spaces-that-elevate-your-business': AllServicesSpacesThatElevateYourBusiness;
      'global.card': GlobalCard;
      'global.footer': GlobalFooter;
      'global.header': GlobalHeader;
      'homepage.all-amenities': HomepageAllAmenities;
      'homepage.blogs': HomepageBlogs;
      'homepage.fa-qs': HomepageFaQs;
      'homepage.find-perfect-space-card': HomepageFindPerfectSpaceCard;
      'homepage.hero-block-with-schedule-a-tour': HomepageHeroBlockWithScheduleATour;
      'homepage.home-to-leading-brands': HomepageHomeToLeadingBrands;
      'homepage.how-to-find-your-space': HomepageHowToFindYourSpace;
      'homepage.locations-available': HomepageLocationsAvailable;
      'homepage.nearby-locations': HomepageNearbyLocations;
      'homepage.our-services': HomepageOurServices;
      'homepage.section-with-contact-us-today': HomepageSectionWithContactUsToday;
      'homepage.spaces-for-every-scale': HomepageSpacesForEveryScale;
      'homepage.testimonials': HomepageTestimonials;
      'homepage.view-spaces-banner': HomepageViewSpacesBanner;
      'utils.banner': UtilsBanner;
      'utils.links-list': UtilsLinksList;
      'utils.links': UtilsLinks;
      'utils.simple-card': UtilsSimpleCard;
    }
  }
}
