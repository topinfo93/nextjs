import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsAwards extends Struct.ComponentSchema {
  collectionName: 'components_components_awards';
  info: {
    description: '';
    displayName: 'Awards';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsCaseStudies extends Struct.ComponentSchema {
  collectionName: 'components_components_case_studies';
  info: {
    description: '';
    displayName: 'caseStudies';
  };
  attributes: {
    cases: Schema.Attribute.Relation<'oneToMany', 'api::work.work'>;
    cta: Schema.Attribute.Component<'components.footer-cta', false>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsCulture extends Struct.ComponentSchema {
  collectionName: 'components_components_cultures';
  info: {
    displayName: 'Culture';
  };
  attributes: {
    cta: Schema.Attribute.Component<'components.footer-cta', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsFeature extends Struct.ComponentSchema {
  collectionName: 'components_components_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<
      ['CLOCK_ICON', 'CHECK_ICON', 'CLOUD_ICON']
    >;
    subHeading: Schema.Attribute.Text;
  };
}

export interface ComponentsFooterCta extends Struct.ComponentSchema {
  collectionName: 'components_components_footer_ctas';
  info: {
    description: '';
    displayName: 'CTA';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsFooterMenu extends Struct.ComponentSchema {
  collectionName: 'components_components_footer_menus';
  info: {
    displayName: 'footerMenu';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    linkText: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsHeroHomepage extends Struct.ComponentSchema {
  collectionName: 'components_components_hero_homepages';
  info: {
    description: '';
    displayName: 'Hero Homepage';
  };
  attributes: {
    awards: Schema.Attribute.Component<'components.awards', true>;
    cta: Schema.Attribute.Component<'components.footer-cta', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsHomeAnimation extends Struct.ComponentSchema {
  collectionName: 'components_components_home_animations';
  info: {
    description: '';
    displayName: 'Home Animation';
  };
  attributes: {
    deliverText1: Schema.Attribute.Text;
    deliverText2: Schema.Attribute.Text;
    deliverText3: Schema.Attribute.Text;
    deliverTitle: Schema.Attribute.String;
    gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface ComponentsImageText extends Struct.ComponentSchema {
  collectionName: 'components_components_image_texts';
  info: {
    description: '';
    displayName: 'imageText';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'videos'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    description: '';
    displayName: 'Link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    linkText: Schema.Attribute.String;
    logoImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsListItems extends Struct.ComponentSchema {
  collectionName: 'components_components_list_items';
  info: {
    displayName: 'listItems';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
  };
}

export interface ComponentsPartner extends Struct.ComponentSchema {
  collectionName: 'components_components_partners';
  info: {
    description: '';
    displayName: 'partner';
  };
  attributes: {
    cta: Schema.Attribute.Component<'components.footer-cta', false>;
    description: Schema.Attribute.Text;
    imageText: Schema.Attribute.Component<'components.image-text', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_features_sections';
  info: {
    displayName: 'Features Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    feature: Schema.Attribute.Component<'components.feature', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    copyright: Schema.Attribute.Text;
    footerCTA: Schema.Attribute.Component<'components.footer-cta', false>;
    footerMenu: Schema.Attribute.Component<'components.footer-menu', true>;
    footerText: Schema.Attribute.Text;
    logoText: Schema.Attribute.Component<'components.link', false>;
    socialLink: Schema.Attribute.Component<'components.link', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    description: '';
    displayName: 'Header';
  };
  attributes: {
    logoText: Schema.Attribute.Component<'components.link', false>;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    description: '';
    displayName: 'Hero Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'components.link', false>;
    subHeading: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.awards': ComponentsAwards;
      'components.case-studies': ComponentsCaseStudies;
      'components.culture': ComponentsCulture;
      'components.feature': ComponentsFeature;
      'components.footer-cta': ComponentsFooterCta;
      'components.footer-menu': ComponentsFooterMenu;
      'components.hero-homepage': ComponentsHeroHomepage;
      'components.home-animation': ComponentsHomeAnimation;
      'components.image-text': ComponentsImageText;
      'components.link': ComponentsLink;
      'components.list-items': ComponentsListItems;
      'components.partner': ComponentsPartner;
      'layout.features-section': LayoutFeaturesSection;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.hero-section': LayoutHeroSection;
    }
  }
}
