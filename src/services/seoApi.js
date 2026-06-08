export const analyzeSEO = async (url) => {
  try {
    // fake loading delay
    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    const domain =
      new URL(url).hostname;

    // Fake SEO scores
    const seo =
      Math.floor(
        Math.random() * 16
      ) + 80;

    const performance =
      Math.floor(
        Math.random() * 21
      ) + 70;

    const mobile =
      Math.floor(
        Math.random() * 16
      ) + 82;

    const security =
      Math.floor(
        Math.random() * 11
      ) + 88;

    // Static recommendations
    const recommendations =
      [
        {
          title:
            "Improve Page Speed",
          description:
            "Optimize images, reduce unused JavaScript and improve loading speed.",
        },
        {
          title:
            "Enhance Mobile Experience",
          description:
            "Improve responsiveness and mobile readability.",
        },
        {
          title:
            "Strengthen SEO Metadata",
          description:
            "Add optimized meta titles and descriptions.",
        },
        {
          title:
            "Improve Security",
          description:
            "Follow modern web security best practices.",
        },
      ];

    const seoData = {
      seo,
      performance,
      mobile,
      security,

      website: {
        domain,
        favicon: `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
        url,
      },

      recommendations,
    };

    console.log(
      "FAKE SEO DATA:",
      seoData
    );

    return seoData;
  } catch (error) {
    console.error(
      "SEO Error:",
      error
    );

    return {
      seo: 85,
      performance: 78,
      mobile: 92,
      security: 95,

      website: {
        domain:
          "example.com",
        favicon:
          "https://www.google.com/s2/favicons?domain=example.com&sz=128",
        url,
      },

      recommendations:
        [
          {
            title:
              "Improve Page Speed",
            description:
              "Optimize images and reduce unused scripts.",
          },
          {
            title:
              "Enhance Mobile Experience",
            description:
              "Improve mobile responsiveness.",
          },
          {
            title:
              "Strengthen SEO Metadata",
            description:
              "Improve meta titles and descriptions.",
          },
          {
            title:
              "Improve Security",
            description:
              "Follow HTTPS security best practices.",
          },
        ],
    };
  }
};