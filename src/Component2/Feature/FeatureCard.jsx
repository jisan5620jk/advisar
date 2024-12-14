/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import './feature.css';

const FeatureCard = ({
  featureIcon,
  featureTitle,
  featureDesc,
  featureBtnLink,
  featureBtnContent,
  featureBtnIcon,
}) => {
  return (
    <div className='feature_box transition-all duration-500 overflow-hidden group px-8 lg:px-4 xl:px-8 pt-[54px] pb-10 rounded-md bg-BodyBg4-0 relative z-10 after:absolute after:-right-28 after:-top-28 after:h-[224px] after:w-[225px] after:bg-white after:scale-0 after:opacity-10 after:rounded-full after:transition-all after:duration-500 after:-z-10 hover:before:w-full hover:after:scale-100 hover:before:left-0'>
      <div className='relative z-10 size-20 rounded-full flex items-center justify-center bg-PrimaryColor-0'>
        <img
          src={featureIcon}
          draggable='false'
          className='transition-all duration-500'
        />
        <span className='round-circle'></span>
      </div>
      <h4 className='font-FiraSans font-semibold text-2xl sm:text-[22px] lg:text-xl xl:text-[22px] text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0 mt-6 mb-2'>
        {featureTitle}
      </h4>
      <p className='font-FiraSans text-TextColor2-0 transition-all duration-500 mb-6'>
        {featureDesc}
      </p>
      <Link to={featureBtnLink}>
        <button className='flex items-center gap-2 text-HeadingColor-0 font-FiraSans font-semibold transition-all duration-500'>
          <span className='size-[30px] rounded-full flex justify-center items-center bg-PrimaryColor-0 text-white text-xs'>{featureBtnIcon}</span>
          {featureBtnContent}
        </button>
      </Link>
    </div>
  );
};

export default FeatureCard;
