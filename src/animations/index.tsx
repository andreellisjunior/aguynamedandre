export const animation: {
  open: { opacity: number; y: number };
  closed: { opacity: number; y: string };
} = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
};

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: { opacity: 1, scale: 1 },
};
