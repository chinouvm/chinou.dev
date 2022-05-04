import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  ssr: false,
  app: {
    head: {
      title: 'Chinou van Maris',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Persoonlijke website van Chinou van Maris',
        },
        { name: 'theme-color', content: '#DE6A73' },
        { content: 'IE=edge', httpEquiv: 'X-UA-Compatible' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Chinou' },
        { property: 'author', content: 'Chinou' },
        { hid: 'og:locale', property: 'og:locale', content: 'nl_NL' },
        { hid: 'og:image', property: 'og:image', content: 'https://chinou.dev/favicon.png' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Chinou van Maris',
        },
        {
          property: 'og:description',
          content: 'Persoonlijke website van Chinou van Maris',
        },
        { hid: 'og:url', property: 'og:url', content: 'https://chinou.dev' },
        { name: 'robots', content: 'all, index, follow' },
        {
          name: 'keywords',
          property: 'keywords',
          content: 'portfolio, chinou, personal, persoonlijk, nederlands, chinou van maris',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css',
          integrity:
            'sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==',
          crossorigin: 'anonymous',
          referrerpolicy: 'no-referrer',
        },
        { rel: 'icon', type: 'image/x-icon', href: 'https://chinou.dev/favicon.png' },
      ],
    },
  },
  css: ['@/assets/Styles/global.css'],
});
