import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "J&J's MAgically Epic Adventure Game",
  description: 'Suunnitelmia kasattuna yhteen',
  base: '/jj/',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Koti', link: '/' }],

    sidebar: [
      {
        text: 'Suunnitelmat',
        items: [
          { text: 'Viholliset', link: '/viholliset' },
          { text: 'Aloitukset', link: '/aloitukset' },
          { text: 'NPCt', link: '/npct' },
          { text: 'Statsit', link: '/statsit' },
          { text: 'Loput', link: '/loput' },
          { text: 'Aseet', link: '/aseet' },
        ],
      },
    ],
  },
});
