export default function sitemap() {
  const baseUrl = "https://bharathpainters.com";

  const routes = [
    "",
    "/about",
    "/services",
    "/services/house-painting",
    "/services/deep-cleaning",
    "/services/plumbing",
    "/services/electrical-work",
    "/services/furniture-work",
    "/services/false-ceiling",
    "/gallery",
    "/testimonials",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route.startsWith("/services/") ? 0.8 : 0.7,
  }));
}
