import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import About from "../../../Component3Default/About/About";
import Counter from "../../../Component5Default/Counter/Counter";
import WhyChoose from "./WhyChoose/WhyChoose";
import TeamMember from "./TeamMember/TeamMember";
import ContentSlider from "../../../Component3Default/ContentSlider/ContentSlider";

const AboutInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"About Us"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"About Us"}
      />
      <About />
      <Counter />
      <TeamMember />
      <ContentSlider />
      <WhyChoose />
    </>
  );
};

export default AboutInner;
