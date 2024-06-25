import defineVersionedConfig from 'vitepress-versioning-plugin';
import fs from 'fs';
import path from 'path';

function loadSidebar() {
  return JSON.parse(fs.readFileSync(path.resolve(__dirname, 'sidebars/versioned/default.json'), 'utf-8'));
}

export default defineVersionedConfig(
  {
    ignoreDeadLinks: true,

    title: "Paymenter",

    description: "This is the Documentation for Paymenter",

    cleanUrls: true,

    versioning: {
      latestVersion: "1.0.0",
    },

    themeConfig: {
      search: {
        provider: "local",
      },

      appearance: 'dark',

      versionSwitcher: {
        text: "Switch Version",
        includeLatestVersion: true,
      },

      nav: [
        { text: "Home", link: "/" },
        { text: "Docs", link: "/docs/installation/install" },
        { text: "Blog", link: "/blog/V1-release.md" },
      ],

      logo: "/versions/0.9.4/assets/images/logo.png",

      sidebar: loadSidebar('default'),

      markdown: {
        image: {
          lazyLoading: false,
        },
      },

      footer: {
        copyright: "Copyright © 2024 Paymenter. All Rights Reserved.",
      },
    },
  },
  __dirname
);