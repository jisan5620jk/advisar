import serviceThumb from '/images/blog-1.jpg';
import serviceThumb2 from '/images/blog-2.jpg';
import serviceThumb3 from '/images/blog-3.jpg';
import serviceIcon from '/images/service_icon1.png';
import serviceIcon2 from '/images/service_icon2.png';
import serviceShape from '/images/service_shape1.png';
import serviceShape2 from '/images/service_shape2.png';
import ServiceCard from './ServiceCard';
import { GoArrowUpRight } from 'react-icons/go';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ServiceNavigation from './ServiceNavigation';

const ServiceData = [
  {
    id: 1,
    serviceIcon: serviceIcon,
    serviceSubTitle: 'Finance',
    serviceTitle: 'Investment Idea',
    serviceDesc: 'Seamlessly expedite extensible methodologies benchmark ',
    serviceUrl: '/service_details',
    btnContent: 'View Details',
    btnIcon: <GoArrowUpRight />,
    serviceThumb: serviceThumb,
  },
  {
    id: 2,
    serviceIcon: serviceIcon2,
    serviceSubTitle: 'Service',
    serviceTitle: 'IT Solution Services',
    serviceDesc: 'Seamlessly expedite extensible methodologies benchmark ',
    serviceUrl: '/service_details',
    btnContent: 'View Details',
    btnIcon: <GoArrowUpRight />,
    serviceThumb: serviceThumb2,
  },
  {
    id: 3,
    serviceIcon: serviceIcon,
    serviceSubTitle: 'Offer',
    serviceTitle: 'Marketing Services',
    serviceDesc: 'Seamlessly expedite extensible methodologies benchmark ',
    serviceUrl: '/service_details',
    btnContent: 'View Details',
    btnIcon: <GoArrowUpRight />,
    serviceThumb: serviceThumb3,
  },
  {
    id: 4,
    serviceIcon: serviceIcon2,
    serviceSubTitle: 'Finance',
    serviceTitle: 'Investment Idea',
    serviceDesc: 'Seamlessly expedite extensible methodologies benchmark ',
    serviceUrl: '/service_details',
    btnContent: 'View Details',
    btnIcon: <GoArrowUpRight />,
    serviceThumb: serviceThumb2,
  },
];

const Service = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    initialSlide: 1,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <section className='relative z-10 pt-28 pb-[120px] bg-BodyBg4-0'>
      <div className='absolute -z-10 top-40 left-0 hidden 2xl:block'>
        <div className='relative animate-wiggle'>
          <img
            src={serviceShape2}
            draggable='false'
          />
          <img
            src={serviceShape}
            draggable='false'
            className='absolute top-[40%] left-28 animate-rotational'
          />
        </div>
      </div>
      <div className='Container'>
        <div className='mb-4 md:-mb-[100px] lg:-mb-[120px]'>
          <h5 className='font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-3'>
            // SERVICES WE PROVIDE
          </h5>
          <h1 className='font-FiraSans font-semibold text-HeadingColor-0 text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[40px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[52px] mb-4'>
            Individuals offer Professional <br /> Services we Provide
          </h1>
        </div>
      </div>
      <div className='Container'>
        <Swiper {...settings}>
          {ServiceData.map(
            ({
              id,
              serviceIcon,
              serviceSubTitle,
              serviceTitle,
              serviceDesc,
              btnContent,
              serviceUrl,
              btnIcon,
              serviceThumb,
            }) => {
              return (
                <>
                  <SwiperSlide
                    key={id}
                    className='pt-24 md:pt-[120px] lg:pt-[150px]'
                  >
                    <ServiceCard
                      serviceIcon={serviceIcon}
                      serviceSubTilte={serviceSubTitle}
                      serviceTitle={serviceTitle}
                      serviceDesc={serviceDesc}
                      btnContent={btnContent}
                      serviceUrl={serviceUrl}
                      btnIcon={btnIcon}
                      serviceThumb={serviceThumb}
                    />
                  </SwiperSlide>
                </>
              );
            }
          )}
          <ServiceNavigation />
        </Swiper>
      </div>
    </section>
  );
};

export default Service;
