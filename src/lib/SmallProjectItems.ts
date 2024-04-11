import {
  css,
  daisyui,
  html,
  lodash,
  preline,
  siraui,
  tailwind,
} from "@/lib/constans";

interface SPI {
  tech: { title: string; link: string }[];
  title: string;
  description: string;
  link: string;
}

const SmallProjectItems: SPI[] = [
  {
    tech: [
      {
        title: html.title,
        link: html.link,
      },
      {
        title: css.title,
        link: css.link,
      },
      {
        title: tailwind.title,
        link: tailwind.link,
      },
      {
        title: daisyui.title,
        link: daisyui.link,
      },
    ],
    title: "faq accordion card",
    description:
      "I've just completed a front-end coding challenge from @frontendmentor!🎉.",
    link: "https://github.com/aldiipratama/FAQ-accordion-card",
  },
  {
    tech: [
      {
        title: html.title,
        link: html.link,
      },
      {
        title: css.title,
        link: css.link,
      },
      {
        title: tailwind.title,
        link: tailwind.link,
      },
      {
        title: daisyui.title,
        link: daisyui.link,
      },
    ],
    title: "tip calculator app",
    description:
      "I've just completed a front-end coding challenge from @frontendmentor!🎉.",
    link: "https://github.com/aldiipratama/Tip-calculator-app",
  },
  {
    title: "base apparel coming soon page",
    description:
      "I've just completed a front-end coding challenge from @frontendmentor!🎉.",
    link: "https://github.com/aldiipratama/Base-Apparel-coming-soon-page",
    tech: [
      {
        title: html.title,
        link: html.link,
      },
      {
        title: css.title,
        link: css.link,
      },
      {
        title: tailwind.title,
        link: tailwind.link,
      },
    ],
  },
  {
    title: "ping single column coming soon page",
    description:
      "I've just completed a front-end coding challenge from @frontendmentor!🎉.",
    link: "https://github.com/aldiipratama/Ping-single-column-coming-soon-page",
    tech: [
      {
        title: html.title,
        link: html.link,
      },
      {
        title: css.title,
        link: css.link,
      },
      {
        title: tailwind.title,
        link: tailwind.link,
      },
    ],
  },
  {
    title: "huddle landing page with a single introductory section",
    description:
      "I've just completed a front-end coding challenge from @frontendmentor!🎉.",
    link: "https://github.com/aldiipratama/Huddle-landing-page-with-a-single-introductory-section",
    tech: [
      {
        title: html.title,
        link: html.link,
      },
      {
        title: css.title,
        link: css.link,
      },
      {
        title: tailwind.title,
        link: tailwind.link,
      },
    ],
  },
  {
    title: "intro component with sign up form",
    description:
      "I've just completed a front-end coding challenge from @frontendmentor!🎉.",
    link: "https://github.com/aldiipratama/Intro-component-with-sign-up-form",
    tech: [
      {
        title: html.title,
        link: html.link,
      },
      {
        title: css.title,
        link: css.link,
      },
      {
        title: tailwind.title,
        link: tailwind.link,
      },
    ],
  },
  {
    title: "single price grid component",
    description:
      "I've just completed a front-end coding challenge from @frontendmentor!🎉.",
    link: "https://github.com/aldiipratama/Single-price-grid-component",
    tech: [
      {
        title: html.title,
        link: html.link,
      },
      {
        title: css.title,
        link: css.link,
      },
      {
        title: tailwind.title,
        link: tailwind.link,
      },
    ],
  },
  {
    title: "four card feature section",
    description:
      "I've just completed a front-end coding challenge from @frontendmentor!🎉.",
    link: "https://github.com/aldiipratama/four-card-feature-section",
    tech: [
      {
        title: html.title,
        link: html.link,
      },
      {
        title: css.title,
        link: css.link,
      },
      {
        title: tailwind.title,
        link: tailwind.link,
      },
      {
        title: daisyui.title,
        link: daisyui.link,
      },
    ],
  },
  {
    title: "article preview component",
    description:
      "I've just completed a front-end coding challenge from @frontendmentor!🎉.",
    link: "https://github.com/aldiipratama/article-preview-component",
    tech: [
      {
        title: html.title,
        link: html.link,
      },
      {
        title: css.title,
        link: css.link,
      },
      {
        title: tailwind.title,
        link: tailwind.link,
      },
      {
        title: daisyui.title,
        link: daisyui.link,
      },
    ],
  },
  {
    title: "social proof section",
    description:
      "I've just completed a front-end coding challenge from @frontendmentor!🎉.",
    link: "https://github.com/aldiipratama/social-proof-section",
    tech: [
      {
        title: html.title,
        link: html.link,
      },
      {
        title: css.title,
        link: css.link,
      },
      {
        title: tailwind.title,
        link: tailwind.link,
      },
    ],
  },
  {
    title: "profile card component",
    description:
      "I've just completed a front-end coding challenge from @frontendmentor!🎉.",
    link: "https://github.com/aldiipratama/profile-card-component",
    tech: [
      {
        title: html.title,
        link: html.link,
      },
      {
        title: css.title,
        link: css.link,
      },
      {
        title: tailwind.title,
        link: tailwind.link,
      },
    ],
  },
  {
    title: "3 column preview card component",
    description:
      "I've just completed a front-end coding challenge from @frontendmentor!🎉.",
    link: "https://github.com/aldiipratama/3-column-preview-card-component",
    tech: [
      {
        title: html.title,
        link: html.link,
      },
      {
        title: css.title,
        link: css.link,
      },
      {
        title: tailwind.title,
        link: tailwind.link,
      },
    ],
  },
  {
    title: "stats preview card component",
    description:
      "I've just completed a front-end coding challenge from @frontendmentor!🎉.",
    link: "https://github.com/aldiipratama/stats-preview-card-component",
    tech: [
      {
        title: html.title,
        link: html.link,
      },
      {
        title: css.title,
        link: css.link,
      },
      {
        title: tailwind.title,
        link: tailwind.link,
      },
      {
        title: daisyui.title,
        link: daisyui.link,
      },
    ],
  },
  {
    title: "order summary component",
    description:
      "I've just completed a front-end coding challenge from @frontendmentor!🎉.",
    link: "https://github.com/aldiipratama/order-summary-component",
    tech: [
      {
        title: html.title,
        link: html.link,
      },
      {
        title: css.title,
        link: css.link,
      },
      {
        title: tailwind.title,
        link: tailwind.link,
      },
      {
        title: daisyui.title,
        link: daisyui.link,
      },
    ],
  },
  {
    title: "interactive rating component",
    description:
      "I've just completed a front-end coding challenge from @frontendmentor!🎉.",
    link: "https://github.com/aldiipratama/interactive-rating-component",
    tech: [
      {
        title: html.title,
        link: html.link,
      },
      {
        title: css.title,
        link: css.link,
      },
      {
        title: tailwind.title,
        link: tailwind.link,
      },
      {
        title: preline.title,
        link: preline.link,
      },
    ],
  },
  {
    title: "nft preview card component",
    description:
      "I've just completed a front-end coding challenge from @frontendmentor!🎉.",
    link: "https://github.com/aldiipratama/NFT-preview-card-component",
    tech: [
      {
        title: html.title,
        link: html.link,
      },
      {
        title: css.title,
        link: css.link,
      },
      {
        title: tailwind.title,
        link: tailwind.link,
      },
      {
        title: siraui.title,
        link: siraui.link,
      },
      {
        title: lodash.title,
        link: lodash.link,
      },
    ],
  },
  {
    title: "product preview card component",
    description:
      "I've just completed a front-end coding challenge from @frontendmentor!🎉.",
    link: "https://github.com/aldiipratama/product-preview-card-component",
    tech: [
      {
        title: html.title,
        link: html.link,
      },
      {
        title: css.title,
        link: css.link,
      },
      {
        title: tailwind.title,
        link: tailwind.link,
      },
    ],
  },
  {
    title: "newsletter sign up form",
    description:
      "I've just completed a front-end coding challenge from @frontendmentor!🎉.",
    link: "https://github.com/aldiipratama/newsletter-sign-up-form",
    tech: [
      {
        title: html.title,
        link: html.link,
      },
      {
        title: css.title,
        link: css.link,
      },
      {
        title: tailwind.title,
        link: tailwind.link,
      },
      {
        title: daisyui.title,
        link: daisyui.link,
      },
    ],
  },
  {
    title: "qr code component",
    description:
      "I've just completed a front-end coding challenge from @frontendmentor!🎉.",
    link: "https://github.com/aldiipratama/qr-code-component",
    tech: [
      {
        title: html.title,
        link: html.link,
      },
      {
        title: css.title,
        link: css.link,
      },
      {
        title: tailwind.title,
        link: tailwind.link,
      },
    ],
  },
  {
    title: "result summary component",
    description:
      "I've just completed a front-end coding challenge from @frontendmentor!🎉.",
    link: "https://github.com/aldiipratama/result-summary-component",
    tech: [
      {
        title: html.title,
        link: html.link,
      },
      {
        title: css.title,
        link: css.link,
      },
      {
        title: tailwind.title,
        link: tailwind.link,
      },
    ],
  },
];

export default SmallProjectItems;
