import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentBlogSection extends Struct.ComponentSchema {
  collectionName: 'components_component_blog_sections';
  info: {
    description: '';
    displayName: 'TitleOnly';
    icon: 'apps';
  };
  attributes: {
    Title: Schema.Attribute.String;
  };
}

export interface ComponentBmwSection extends Struct.ComponentSchema {
  collectionName: 'components_component_bmw_sections';
  info: {
    description: '';
    displayName: 'Details-only';
    icon: 'apps';
  };
  attributes: {
    Details: Schema.Attribute.RichText;
  };
}

export interface ComponentConditionAndTreatmentSection
  extends Struct.ComponentSchema {
  collectionName: 'components_component_condition_and_treatment_sections';
  info: {
    displayName: 'Condition & Treatment Section';
    icon: 'dashboard';
  };
  attributes: {
    Title: Schema.Attribute.String;
  };
}

export interface ComponentFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_component_faq_sections';
  info: {
    displayName: 'FAQ Section';
    icon: 'apps';
  };
  attributes: {
    Answer: Schema.Attribute.RichText;
    Question: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentHospitalSection extends Struct.ComponentSchema {
  collectionName: 'components_component_hospital_sections';
  info: {
    description: '';
    displayName: 'Ttitle_and_Details';
    icon: 'apps';
  };
  attributes: {
    Details: Schema.Attribute.RichText;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentMeetOurExpertSection extends Struct.ComponentSchema {
  collectionName: 'components_component_meet_our_expert_sections';
  info: {
    displayName: 'Meet Our Expert Section';
    icon: 'apps';
  };
  attributes: {
    Title: Schema.Attribute.String;
  };
}

export interface ComponentMetaSection extends Struct.ComponentSchema {
  collectionName: 'components_component_meta_sections';
  info: {
    displayName: 'Meta Section';
  };
  attributes: {
    ExtraHeaderCode: Schema.Attribute.Text;
    MetaDescription: Schema.Attribute.Text;
    MetaKeyword: Schema.Attribute.String;
    Metatitle: Schema.Attribute.String;
    ShortDescription: Schema.Attribute.Text;
  };
}

export interface ComponentTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_component_testimonial_sections';
  info: {
    displayName: 'Testimonial Section';
    icon: 'apps';
  };
  attributes: {
    Title: Schema.Attribute.String;
  };
}

export interface ComponentTitleAndImage extends Struct.ComponentSchema {
  collectionName: 'components_component_title_and_images';
  info: {
    displayName: 'Title_and_image';
  };
  attributes: {
    FeaturedImage: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentViewSection extends Struct.ComponentSchema {
  collectionName: 'components_component_view_sections';
  info: {
    displayName: 'ViewSection';
  };
  attributes: {
    OrderInFeaturedList: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<0>;
    OrderInMasterList: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    ShowInCMS: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    ShowInFeaturedList: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    ShowingFooter: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    ShowingHeader: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    ViewingMode: Schema.Attribute.Enumeration<['Details Page', 'Popup']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.blog-section': ComponentBlogSection;
      'component.bmw-section': ComponentBmwSection;
      'component.condition-and-treatment-section': ComponentConditionAndTreatmentSection;
      'component.faq-section': ComponentFaqSection;
      'component.hospital-section': ComponentHospitalSection;
      'component.meet-our-expert-section': ComponentMeetOurExpertSection;
      'component.meta-section': ComponentMetaSection;
      'component.testimonial-section': ComponentTestimonialSection;
      'component.title-and-image': ComponentTitleAndImage;
      'component.view-section': ComponentViewSection;
    }
  }
}
