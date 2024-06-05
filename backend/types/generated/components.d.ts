import type { Schema, Attribute } from '@strapi/strapi';

export interface HomepageHeroBlockWithScheduleATour extends Schema.Component {
  collectionName: 'components_homepage_hero_block_with_schedule_a_tours';
  info: {
    displayName: 'Hero block with schedule a tour';
  };
  attributes: {
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'homepage.hero-block-with-schedule-a-tour': HomepageHeroBlockWithScheduleATour;
    }
  }
}
