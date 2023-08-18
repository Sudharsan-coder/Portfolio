import "./style.css";
import Home from "./Home/Home.jsx";
import Achievement from "./Achievement/Achievement.jsx";
import Project from "./Project/Project.jsx";
import Mail from "./Mail/Mail.jsx";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ParallaxProvider } from "react-scroll-parallax";
import { useEffect } from "react";
const squareVariants = {
  visible: { scale: 1, rotate: 360, transition: { duration: 0.5 } },
  hidden: { scale: 0, rotate: 360 },
};
export default function Main() {
  const controler = useAnimation();
  const [view_ref, InView] = useInView();

  useEffect(() => {
    if (InView) {
      controler.start("visible");
    } else controler.start("hidden");
  }, [InView]);

  return (
    <>
      <Home />
      <ParallaxProvider>
      <Achievement />
      </ParallaxProvider>
      <Project />
      <motion.div
        ref={view_ref}
        animate={controler}
        initial="hidden"
        variants={squareVariants}
      >
        <Mail />
      </motion.div>
    </>
  );
}
