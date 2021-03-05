// Page transition
const duration = 0.25
export const pageVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
}

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
    opacity: 0,
    x: 768,
    transition: { duration: 0.25 },
  },
}

export const navItemVariants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  show: {
    opacity: 1,
    x: 0,
  },
}

export const overlayVariants = {
  hidden: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  show: {
    backgroundColor: "rgba(0,0,0,0.4)",
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
}

export const heroVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },

  hiddenButtonLeft: {
    opacity: 0,
  },
  showButtonLeft: {
    opacity: 1,
  },

  hiddenButtonRight: {
    opacity: 0,
    x: -110,
  },
  showButtonRight: {
    opacity: 1,
    x: 0,
  },
}
