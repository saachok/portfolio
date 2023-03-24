export const gallery = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const galleryItem = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

export const title = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};
