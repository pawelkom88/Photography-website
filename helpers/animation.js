const easing = [0.6, -0.05, 0.01, 0.99];

export const links = [
  { name: "Home", to: "#", id: 1 },
  { name: "About", to: "#", id: 2 },
  { name: "Blog", to: "#", id: 3 },
  { name: "Contact", to: "#", id: 4 },
];

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
    y: "-100%",
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
