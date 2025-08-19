const title = "Rüstem Pek — Full-Stack Developer";
const description =
  "Full-stack developer building scalable web & mobile applications — clean architecture, real-time systems, cloud-native microservices, and 3D web (Three.js).";
const url = "https://www.rustempek.com/";


export default {
    titleTemplate: "%s | Rüstem Pek — Full-Stack Developer",
    defaultTitle: title,
    description: description,
    canonical: `${url}`,
    openGraph: {
      type: "website",
      locale: "en_US",
      alternateLocale: ["tr_TR"],
      url,
      title,
      description,
      site_name: "rustempek.com",
      imageWidth: 1200,
      imageHeight: 1200,
    },
    twitter: {
      handle: "@rustempk",
      site: "@rustempk",
      cardType: "summary_large_image",
    },
    additionalMetaTags: [
      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      {
        name: "keywords",
        content:
          "full-stack developer, software engineer, web developer, mobile developer, cloud-native, microservices, real-time systems, three.js, next.js, react, node.js, java, spring boot, flutter, web3, solidity, smart contracts",
      },
      { name: "theme-color", content: "#0b0b0f" },
      { name: "author", content: "Rüstem Pek" },
    ],
    additionalLinkTags: [
      { rel: "canonical", href: url },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  };