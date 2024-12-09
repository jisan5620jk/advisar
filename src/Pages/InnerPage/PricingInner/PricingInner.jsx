import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Pricing from "./Pricing";
import Accordion from "./Accordion/Accordion";
import ContentSlider from "../../../Component3Default/ContentSlider/ContentSlider";


const PricingInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Pricing Plan'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Pricing Plan'}
      />
      <Pricing />
      <ContentSlider />
      <Accordion />
    </>
  );
};

export default PricingInner;
