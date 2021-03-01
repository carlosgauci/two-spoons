export const navVariants = {
  initial: {
    opacity: 0,
    x: 768,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
    },
  },
  exit: {
    x: 768,
    transition: { duration: 0.25 },
  },
}
