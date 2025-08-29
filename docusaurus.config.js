// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Divine Eboigbe",
  tagline: "Software Engineer | Cloud Security Enthusiast | Builder",
  favicon: "img/logo.png",

  url: "https://your-portfolio-site.com",
  baseUrl: "/",

  organizationName: "ApexPlayground",
  projectName: "portfolio",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "projects", // folder where your markdown lives
          routeBasePath: "projects", // URL base path
          sidebarPath: "./sidebars.js",
        },
        blog: { showReadingTime: true },
        theme: { customCss: "./src/css/custom.css" },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Divine Eboigbe",
      logo: { alt: "Portfolio Logo", src: "img/logo.png" },
      items: [
        { to: "/about", label: "About", position: "left" },
        { to: "/projects/intro", label: "Projects", position: "left" },
        {
          href: "https://github.com/ApexPlayground",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Navigation",
          items: [
            { label: "About", to: "/about" },
            { label: "Projects", to: "/projects" },
          ],
        },
        {
          title: "Connect",
          items: [
            { label: "GitHub", href: "https://github.com/ApexPlayground" },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/divine-eboigbe-a63483205/",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Divine Eboigbe. All rights reserved.`,
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
  },
};

export default config;
