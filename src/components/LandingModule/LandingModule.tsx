import Image from "next/image";
import { Montserrat, Nunito } from "@next/font/google";

import { motion } from "framer-motion";
import { animation, fadeUp } from "../../animations";

import Logo from "../../../public/favicon.png";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

const LandingModule = () => {
  return (
    <motion.div
      variants={animation}
      animate="closed"
      transition={{ ease: "easeOut", duration: 1, delay: 5 }}
      className={`backdrop-blur-2xl fixed inset-0 z-30 flex flex-col justify-center items-center gap-9 text-center px-4 ${nunito.variable} ${montserrat.variable}`}
    >
      <motion.span
        variants={fadeUp}
        animate="show"
        initial="hidden"
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <Image src={Logo} alt="Logo" width={250} height={250}></Image>
      </motion.span>
      <motion.h1
        variants={fadeUp}
        animate="show"
        initial="hidden"
        transition={{ ease: "easeOut", duration: 1, delay: 2 }}
        className="text-3xl font-nunito"
      >
        Hi!{" "}
        <motion.span
          className="inline-block"
          animate={{ rotate: [0, 0, 45, 45, 0] }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            delay: 3,
            repeat: 5,
          }}
        >
          👋
        </motion.span>
      </motion.h1>
      <motion.h3
        variants={fadeUp}
        animate="show"
        initial="hidden"
        transition={{ ease: "easeOut", duration: 1, delay: 0.7 }}
        className="text-3xl md:text-5xl font-monts"
      >
        I&apos;M A GUY NAMED ANDRE
      </motion.h3>
    </motion.div>
  );
};

export default LandingModule;
