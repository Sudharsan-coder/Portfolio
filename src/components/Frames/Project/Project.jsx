import Block from "./Block/Block.jsx";
import "./Project.css";
import im1 from "../../../assets/Project/v1.jpg";
import im2 from "../../../assets/Project/v2.png";
import { ParallaxProvider, useParallax} from "react-scroll-parallax";


export default function Combiner() {
  const parallax = useParallax({
    scale: [1, 0.5, "easeInQuad"],
  });
  // const layers=[
  //   { image: back1, speed: 15 },
  //   {
  //     props:{
  //     className:"image_para"},
  //     speed: 5,
  //     children: (
  //       <div className="project_main">
  //         <Block
  //           number={1}
  //           image={im1}
  //           content="It is an optical character recognition project, which is specially created for the visually impaired, which uses the concept of deep learning. We have created an application, which can capture an image and extract the text from it and that texts are finally delivered though a voice message."
  //         />
  //         <Block number={2} />
  //         <Block number={3} />
  //       </div>
  //     ),
  //   },
  // ]

  return (
    <>
     {/* <div className="parala1"> */}
      {/*  <ParallaxProvider>
        <Parallax layers={layers}/>
      </ParallaxProvider> */}
      <div className="project_container" id="Project"ref={parallax.ref}>
      <fieldset className="project_main" >
        <legend>Projects</legend>
        <Block
          number={1}
          image={im1}
          content="It is an optical character recognition project,specially created for the visually impaired. We have created an application, which can capture an image and extract the text from it and that texts are finally delivered though a voice message."
        />
        <Block number={2}
          image={im2}
          content="This version 2 is focused on the obstacle detection and warning the visually impaired by a voice signal, to achieve this we are implementing the concepts of object detection and distance estimation in deep learning."
        />
        <Block number={3} />
        </fieldset>
      </div>
     {/* </div> */}
    </>
  );
}
