export const screenSize = "(max-width: 860px)";

export const urls = [
  { id: 0, link: "url(/assets/images/wedding.webp)" },
  { id: 1, link: "url(/assets/images/portraits.webp)" },
  { id: 2, link: "url(/assets/images/business.webp)" },
  { id: 3, link: "url(/assets/images/events.webp)" },
  { id: 4, link: "url(/assets/images/properties.webp)" },
  { id: 5, link: "url(/assets/images/themed.webp)" },
];

export const url = [
  "Weddings",
  "Portraits",
  "Business photography",
  "Events and Festivals",
  "Themed",
  "Properties and interiors",
];

import weddings from "../public/assets/images/w1.webp";
import portraits from "../public/assets/images/p1.webp";
import business from "../public/assets/images/b1.webp";
import properties from "../public/assets/images/t1.webp";
import events from "../public/assets/images/e1.webp";
import themed from "../public/assets/images/pp1.webp";

const posts = [];

const images = [weddings, portraits, business, properties, events, themed];

let imageIndex = 0;

for (let i = 1; i <= 80; i++) {
  let item = {
    id: i,
    title: `Post ${i}`,
    date: `${i < 10 ? 0 : ""}${i}/10/2021 `,
    image: images[imageIndex],
  };

  posts.push(item);

  imageIndex++;

  if (imageIndex > images.length - 1) imageIndex = 0;
}

export { posts };


// MAIN PAGE ANIMATION

export const container = {
  show: {
    transition: { staggerChildren: 0.5, delay: 0.1 },
  },
};

export const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      ease: "linear",
      duration: 0.8,
    },
  },
};