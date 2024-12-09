import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Service from "../../../Component1/Service/Service";
import CallTo from "../../../Component5Default/CallTo/CallTo";
import Testimonial from "../../../Component5Default/Testimonial/Testimonial";
import Pricing from "../../../Component5Default/Pricing/Pricing";

const ServiceInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Our Services"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Service"}
      />
      <Service />
      <CallTo />
      <Testimonial />
      <Pricing />
    </>
  );
};

export default ServiceInner;
