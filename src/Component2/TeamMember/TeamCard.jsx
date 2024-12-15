/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TeamCard = ({
  teamThumb,
  socialIcon,
  socialIcon2,
  socialIcon3,
  socialIcon4,
  teamTitle,
  teamDesc,
}) => {
  return (
    <div className='group relative'>
      <div className='relative rounded-md overflow-hidden'>
        <img
          src={teamThumb}
          className='w-full rounded-md xl:w-[inherit] m-auto'
        />
          <ul>
            <li className='absolute z-20 top-7 right-7 transition-all duration-300 group-hover:top-[74px]'>
              <Link to={'/'}>
                <button className='size-9 text-sm flex justify-center items-center rounded-full overflow-hidden relative bg-white transition-all duration-500 hover:text-white text-HeadingColor-0 z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-Secondarycolor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                  {socialIcon}
                </button>
              </Link>
            </li>
            <li className='absolute z-20 top-5 right-7 transition-all duration-500 group-hover:top-[119px]'>
              <Link to={'/'}>
                <button className='size-9 text-sm flex justify-center items-center rounded-full overflow-hidden relative bg-white transition-all duration-500 hover:text-white text-HeadingColor-0 z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-Secondarycolor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                  {socialIcon2}
                </button>
              </Link>
            </li>
            <li className='absolute z-20 top-5 right-7 transition-all duration-700 group-hover:top-[166px]'>
              <Link to={'/'}>
                <button className='size-9 text-sm flex justify-center items-center rounded-full overflow-hidden relative bg-white transition-all duration-500 hover:text-white text-HeadingColor-0 z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-Secondarycolor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                  {socialIcon3}
                </button>
              </Link>
            </li>
            <li className='absolute z-20 top-5 right-7 transition-all duration-700 group-hover:top-[200px]'>
              <Link to={'/'}>
                <button className='size-9 text-sm flex justify-center items-center rounded-full overflow-hidden relative bg-white transition-all duration-500 hover:text-white text-HeadingColor-0 z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-Secondarycolor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                  {socialIcon4}
                </button>
              </Link>
            </li>
          </ul>
      </div>
      <div className='relative transition-all duration-500 text-center pt-[22px]'>
        <h5 className='font-FiraSans font-semibold text-2xl text-HeadingColor-0 transition-all duration-500 pb-1'>
          {teamTitle}
        </h5>
        <p className='font-FiraSans text-TextColor2-0 transition-all duration-500'>
          {teamDesc}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
