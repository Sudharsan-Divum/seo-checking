const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");

const sitemapStream = new SitemapStream({
  hostname: "https://prismatic-poc-seo.netlify.app",
});

sitemapStream.write({ url: "/", changefreq: "daily", priority: 1 });
sitemapStream.write({ url: "/about", changefreq: "monthly", priority: 0.8 });
sitemapStream.write({ url: "/contact", changefreq: "monthly", priority: 0.8 });

sitemapStream.end();
streamToPromise(sitemapStream).then((sitemap) => {
  fs.writeFileSync("./public/sitemap.xml", sitemap);
});
