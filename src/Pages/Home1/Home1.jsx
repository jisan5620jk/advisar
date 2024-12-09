import About from '../../Component1/About/About';
import Appointment from '../../Component1/Appointment/Appointment';
import Banner from '../../Component1/Banner/Banner';
import Blog from '../../Component1/Blog/Blog';
import ContentSlider from '../../Component1/ContentSlider/ContentSlider';
import Counter from '../../Component1/Counter/Counter';
import Service from '../../Component1/Service/Service';
import TeamMember from '../../Component1/TeamMember/TeamMember';
import Testimonial from '../../Component1/Testimonial/Testimonial';
import WhyChoose from '../../Component1/WhyChoose/WhyChoose';

const Home1 = () => {
  return (
    <>
      <Banner />
      <About />
      <ContentSlider />
      <Service />
      <WhyChoose />
      <TeamMember />
      <Testimonial />
      <Counter />
      <Appointment />
      <Blog />
    </>
  );
};

export default Home1;
