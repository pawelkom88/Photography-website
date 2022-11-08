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
    poster: "/assets/videos/",
  },
  {
    id: 1,
    link: "url(/assets/images/p1.webp)",
    linkName: "Portraits",
    video: "/assets/videos/portrait_video.mp4",
    poster: "/assets/videos/",
  },
  {
    id: 2,
    link: "url(/assets/images/b1.webp)",
    linkName: "Business Photography",
    video: "/assets/videos/business_video.mp4",
    poster: "/assets/videos/",
  },
  {
    id: 3,
    link: "url(/assets/images/e1.webp)",
    linkName: "Events and Festivals",
    video: "/assets/videos/events_video.mp4",
    poster: "/assets/videos/",
  },
  {
    id: 4,
    link: "url(/assets/images/pp1.webp)",
    linkName: "Themed",
    video: "/assets/videos/themed_video.mp4",
    poster: "/assets/videos/",
  },
  {
    id: 5,
    link: "url(/assets/images/t1.webp)",
    linkName: "Properties and Interiors",
    video: "/assets/videos/property_video.mp4",

    poster: "/assets/videos/",
  },
];

// extract link to images from url array and create a new one
export const images = [];

urls.forEach(({ link }) => {
  images.push(link);
});


