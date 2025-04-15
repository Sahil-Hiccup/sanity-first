// src/app/sanity/client.js
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "3u8tfxpx",
  dataset: "production",
  apiVersion: "2025-04-10",
  useCdn: false, 
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export default client;
