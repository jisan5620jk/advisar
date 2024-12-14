import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './banner.css';
import { HiOutlineArrowRight } from 'react-icons/hi';

const Banner = () => {
  const settings = {
    loop: true,
    speed: 2000,
    effect: 'fade',
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    duration: 3000,
  };
  return (
    <div className='relative'>
      <Swiper {...settings}>
        <SwiperSlide>
          <section className="bg-[url('/images/banner.jpg')] bg-cover bg-center bg-no-repeat text-center h-[600px] sm:h-[700px] md:h-[600px] lg:h-[760px] xl:h-[900px] flex items-center">
            <div className='Container'>
              <div className='relative banner-content'>
                <h5 className='font-FiraSans font-medium text-xl sm:text-[26px] md:text-3xl text-white mb-1'>
                  // Best Consulting Agency
                </h5>
                <h1 className='font-FiraSans font-semibold text-white text-[28px] sm:text-[46px] md:text-[68px] xl:text-[80px] 2xl:text-[110px]'>
                  From Our Agency
                </h1>
                <p className='font-FiraSans text-white sm:text-lg mb-[44px] mt-1'>
                  Continually plagiarize virtual web services with resource
                  maximizing action items.
                </p>
                <div className='flex flex-col sm:flex-row justify-center items-center gap-3'>
                  <Link to={'/contact'}>
                    <button className='primary-btn5 group'>
                      {`Contact Us`}
                      <HiOutlineArrowRight
                        size={'20'}
                        className='-rotate-45 transition-all duration-500 group-hover:rotate-0'
                      />
                    </button>
                  </Link>
                  <Link to={'/about'}>
                    <button className='primary-btn5 group !bg-Secondarycolor-0'>
                      {`How It Works`}
                      <HiOutlineArrowRight
                        size={'20'}
                        className='-rotate-45 transition-all duration-500 group-hover:rotate-0'
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-[url('/images/banner-Img2.jpg')] bg-cover bg-center bg-no-repeat text-center h-[600px] sm:h-[700px] md:h-[600px] lg:h-[760px] xl:h-[900px] flex items-center">
            <div className='Container'>
              <div className='relative banner-content'>
                <h5 className='font-FiraSans font-medium text-xl sm:text-[26px] md:text-3xl text-white mb-1'>
                  // Take Business Advice
                </h5>
                <h1 className='font-FiraSans font-semibold text-white text-[28px] sm:text-[46px] md:text-[68px] xl:text-[80px] 2xl:text-[110px]'>
                  For Your Business
                </h1>
                <p className='font-FiraSans text-white sm:text-lg mb-[44px] mt-1'>
                  Continually plagiarize virtual web services with resource
                  maximizing action items.
                </p>
                <div className='flex flex-col sm:flex-row justify-center items-center gap-3'>
                  <Link to={'/contact'}>
                    <button className='primary-btn5 group'>
                      {`Contact Us`}
                      <HiOutlineArrowRight
                        size={'20'}
                        className='-rotate-45 transition-all duration-500 group-hover:rotate-0'
                      />
                    </button>
                  </Link>
                  <Link to={'/about'}>
                    <button className='primary-btn5 group !bg-Secondarycolor-0'>
                      {`How It Works`}
                      <HiOutlineArrowRight
                        size={'20'}
                        className='-rotate-45 transition-all duration-500 group-hover:rotate-0'
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
