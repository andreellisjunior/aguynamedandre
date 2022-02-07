export const containerAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 1,
            staggerChildren: 0.3

        }
    }
}
export const buttonContainer = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.4
        }
    }
}
export const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
            ease: "easeOut",
            duration: 0.5
      }
    }
  };
