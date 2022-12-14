// LOADER ANIMATION
export const word1 = "JOHN DOE".split("");
export const word2 = "PHOTOGRAPHY".split("");

export const wrapper = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
};

export const child = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2.5,
      ease: "linear",
    },
  },
};

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

// MOBILE MENU
const easing = [0.6, -0.05, 0.01, 0.99];

export const pageTransitionVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 1 },
  },
  exit: { opacity: 0 },
  transition: { ease: "easeInOut", duration: 1 },
};

export const variants = {
  initial: { y: "-100%" },
  animate: {
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.1,
      ease: easing,
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.6,
      delay: 0.4,
      ease: "easeIn",
    },
  },
};

export const itemVariants = {
  closed: {
    y: "100%",
  },
  open: { y: 0 },
};

export const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
      delayChildren: 0.5,
    },
  },
};

// const content = {
//   animate: {
//     transition: { staggerChildren: 0.1, delayChildren: 2.8 },
//   },
// };

// const title = {
//   initial: { y: -20, opacity: 0 },
//   animate: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.7,
//       ease: [0.6, -0.05, 0.01, 0.99],
//     },
//   },
// };

// const products = {
//   initial: { y: -20, opacity: 0 },
//   animate: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.7,
//       ease: [0.6, -0.05, 0.01, 0.99],
//     },
//   },
// };
