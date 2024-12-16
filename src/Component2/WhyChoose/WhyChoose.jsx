import WhyChooseCard from './WhyChooseCard';
import whyChooseThumb from '/images/why-left-img.jpg';
import whyChooseIcon1 from '/images/feature_1.png';
import whyChooseIcon2 from '/images/feature_2.png';
import whyChooseIcon3 from '/images/feature_3.png';

const WhyChoose = () => {
  return (
    <section className='pb-[120px] pt-20 lg:pt-[120px] bg-[url(/images/why-choose-bg.jpg)] bg-no-repeat bg-cover bg-center relative z-20 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-HeadingColor-0 before:bg-opacity-90 before:-z-10'>
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 lg:gap-10 2xl:gap-16 items-center'>
          <div className='relative z-10 rounded-[20px] overflow-hidden'>
            <img
              src={whyChooseThumb}
              draggable='false'
            />
          </div>
          <div className='relative z-10'>
            <h5 className='font-FiraSans font-medium text-sm sm:text-base text-white uppercase mb-3'>
              // WHY CHOOSE US
            </h5>
            <h1 className='font-FiraSans font-semibold text-white text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[38px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[52px] relative pb-4'>
              For our skills and expertise <br /> clients choose us
            </h1>
            <div className='why_choose_boxs flex flex-col gap-5 mt-8'>
              <div>
                <WhyChooseCard
                  whyChooseIcon={whyChooseIcon3}
                  whyChooseTitle={'Customers Support Service'}
                  whyChooseDesc={
                    'Specializes in talent management, recruitment, training the organizational development is professional.'
                  }
                />
              </div>
              <div>
                <WhyChooseCard
                  whyChooseIcon={whyChooseIcon2}
                  whyChooseTitle={'Customized Solution'}
                  whyChooseDesc={
                    'Specializes in talent management, recruitment, training the organizational development is professional.'
                  }
                />
              </div>
              <div>
                <WhyChooseCard
                  whyChooseIcon={whyChooseIcon1}
                  whyChooseTitle={'Ensure High Quality Product'}
                  whyChooseDesc={
                    'Specializes in talent management, recruitment, training the organizational development is professional.'
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
