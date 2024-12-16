/* eslint-disable react/prop-types */

import './why-choose.css';

const WhyChooseCard = ({
  whyChooseIcon,
  whyChooseTitle,
  whyChooseDesc
}) => {
  return (
    <div className='why_choose_box flex flex-col sm:flex-row sm:items-center gap-7 transition-all duration-500 overflow-hidden group px-8 lg:px-4 xl:px-8 pt-8 pb-9 rounded-md bg-Secondarycolor-0 relative z-10 after:absolute after:right-0 after:top-0 after:h-full after:w-full after:bg-PrimaryColor-0 after:opacity-0 after:transition-all after:duration-500 after:-z-10 hover:after:opacity-60 md:hover:-translate-x-3'>
      <div className='relative z-10 size-[76px] rounded-full flex items-center justify-center bg-[#1c9a98]'>
        <img
          src={whyChooseIcon}
          draggable='false'
          className='transition-all duration-500'
        />
        <span className='round-circle2'></span>
      </div>
      <div className='flex-1'>
        <h4 className='font-FiraSans font-semibold text-2xl sm:text-[22px] lg:text-xl xl:text-[22px] text-white transition-all duration-500 mb-2'>
          {whyChooseTitle}
        </h4>
        <p className='font-FiraSans text-TextColor-0 transition-all duration-500'>
          {whyChooseDesc}
        </p>
      </div>
    </div>
  );
};

export default WhyChooseCard;
