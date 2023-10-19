import "./Project.css";
import im1 from "../../../assets/Project/v1-fit.jpg";
import im2 from "../../../assets/Project/v2.png";
import im3 from "../../../assets/Project/v3-fit.jpg";
import Cards from "./Card/Cards.jsx";
import { Space } from "@mantine/core";
export default function Combiner() {
  return (
    <>
      <legend id="Project">Projects</legend>
      <div className="project_container" >
        <Cards
          number={1}
          image={im1}
          date={"Jun 2022"}
          content="It is an optical character recognition project,specially created for the visually impaired. We have created an application, which can capture an image and extract the text from it and that texts are finally delivered though a voice message."
        />
        <Space w="md" />
        <Cards
          number={2}
          image={im2}
          date={"Dec 2022"}
          content="This version 2 is focused on the obstacle detection and warning the visually impaired by a voice signal, to achieve this we are implementing the concepts of object detection and distance estimation in deep learning."
        />
        <Space w="md" />
        <Cards
          number={3}
          date={"Jun 2023"}
          image={im3}
          content="This project empowers the visually impaired by employing a trained model to identify obstacles and people. The model gauges proximity and threat levels, facilitating independent navigation and enhancing safety for individuals who are blind."
        />
      </div>
    </>
  );
}