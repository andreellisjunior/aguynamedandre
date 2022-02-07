export const navContainer = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1,
            delayChildren: 3,
            staggerChildren: 0.3

        }
    }
}

export const navItem = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
            ease: "easeOut",
            duration: 0.5
      }
    }
  };