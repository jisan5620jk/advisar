import About from '../../Component2/About/About';
import Appointment from '../../Component2/Appointment/Appointment';
import Banner from '../../Component2/Banner/Banner';
import Blog from '../../Component2/Blog/Blog';
import ContentSlider from '../../Component2/ContentSlider/ContentSlider';
import Counter from '../../Component2/Counter/Counter';
import Feature from '../../Component2/Feature/Feature';
import Service from '../../Component2/Service/Service';
import TeamMember from '../../Component2/TeamMember/TeamMember';
import Testimonial from '../../Component2/Testimonial/Testimonial';
import WhyChoose from '../../Component2/WhyChoose/WhyChoose';

const Home2 = () => {
  return (
    <>
      <Banner />
      <Feature />
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

export default Home2;
