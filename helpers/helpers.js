// useMediaQueries hook
export const screenSize = "(max-width: 860px)";

// Masonry Grid Image
export const screenSizes = [
  { res: 350, columnNum: 1 },
  { res: 750, columnNum: 2 },
  { res: 900, columnNum: 3 },
];

// Main array with data
export const urls = [
  {
    id: 0,
    link: "url(/assets/images/w1.webp)",
    linkName: "Weddings",
    video: "/assets/videos/wedding_video.mp4",
  },
  {
    id: 1,
    link: "url(/assets/images/p1.webp)",
    linkName: "Portraits",
    video: "/assets/videos/portrait_video.mp4",
  },
  {
    id: 2,
    link: "url(/assets/images/b1.webp)",
    linkName: "Business Photography",
    video: "/assets/videos/",
  },
  {
    id: 3,
    link: "url(/assets/images/e1.webp)",
    linkName: "Events and Festivals",
    video: "/assets/videos/",
  },
  { id: 4, link: "url(/assets/images/t1.webp)", linkName: "Themed", video: "/assets/videos/" },
  {
    id: 5,
    link: "url(/assets/images/pp1.webp)",
    linkName: "Properties and Interiors",
    video: "/assets/videos/",
  },
];

// extract link to images from url array and create a new one
const images = [];

urls.forEach(({ link }) => {
  images.push(link);
});

// create grid images
const gridImages = [];
let imageIndex = 0;

for (let i = 1; i <= 80; i++) {
  let item = {
    id: i,
    title: `Image ${i}`,
    image: images[imageIndex],
  };

  gridImages.push(item);

  imageIndex++;

  if (imageIndex > images.length - 1) imageIndex = 0;
}

export { gridImages };

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
