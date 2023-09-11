import Home from "./Home/Home.jsx";
import Achievement from "./Achievement/Achievement.jsx";
import Project from "./Project/Project.jsx";
import Mail from "./Mail/Mail.jsx";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ParallaxProvider } from "react-scroll-parallax";
import { useEffect } from "react";
const squareVariants = {
  visible: { scale: 1,  transition: { duration: 0.5 } },
  l_hidden:{x:-100},
  l_visible:{x:0 , transition: { duration: 1.5 }},
  hidden: { scale: 0 },
};
export default function Main() {
  const mail_controler = useAnimation();
  const project_controler = useAnimation();
  const [project_view_ref, project_InView] = useInView();
  const [mail_view_ref, mail_InView] = useInView();

  useEffect(() => {
    if (project_InView) {
      project_controler.start("l_visible");
    } else project_controler.start("l_hidden");
    if (mail_InView) {
      mail_controler.start("visible");
    } else mail_controler.start("hidden");
  }, [project_InView,mail_InView]);

  return (
    <>
      <Home />
      <ParallaxProvider>
      <Achievement />
      </ParallaxProvider>
      <motion.div
        ref={project_view_ref}
        animate={project_controler}
        initial="l_hidden"
        variants={squareVariants}
      >
      <Project />
      </motion.div>
      <motion.div
        ref={mail_view_ref}
        animate={mail_controler}
        initial="hidden"
        variants={squareVariants}
      >
        <Mail />
      </motion.div>
    </>
  );
}
