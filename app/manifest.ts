import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mazuma India - Corporate Tax & Legal Advisory",
    short_name: "Mazuma India",
    description: "CA & Legal Advisory Services for Indian Startups & SMEs",
    start_url: "/",
    display: "standalone",
    background_color: "#051A2E",
    theme_color: "#FF6B1A",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
