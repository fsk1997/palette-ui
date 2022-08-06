require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteUrl = "https://paletteui.saykiat.com"

module.exports = {
  siteMetadata: {
    title: `Palette UI`,
    siteUrl: siteUrl,
    oneline: "Experimental React UI Components with Plain CSS",
    description:"Palette UI is an experimental UI component library referencing unique design patterns on existing user interface. Build your next web application with our boilerplate React code and customise the CSS to your own need.",
    url: siteUrl, // No trailing slash allowed!
    image: "/og-image1.jpg", // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: "@SayKiat_____",
  },
  plugins: [
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    // `gatsby-plugin-dark-mode`,
    `gatsby-plugin-netlify`,
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `avif`, `webp`],
          placeholder: `blurred`,
          quality: 50,
          breakpoints: [576, 768, 922, 1140, 1400],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        }
      }
    },
    "gatsby-transformer-sharp",
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/logo/icon-light.png',
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "./src/data/",
      },
    },
    `gatsby-transformer-json`,
    {
      resolve:"gatsby-plugin-sitemap",
      options:{
        output: `/`,
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap-0.xml`,
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GTAG, // Google Analytics / GA
        ],
        pluginConfig: {
          head: true        
        },
      }
    },
  ],
};
