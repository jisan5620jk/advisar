import featureIcon1 from '/images/feature_1.png';
import featureIcon2 from '/images/feature_2.png';
import featureIcon3 from '/images/feature_3.png';
import featureIcon4 from '/images/feature_4.png';
import FeatureCard from './FeatureCard';
import { FaPlus } from 'react-icons/fa6';

const processData = [
  {
    id: 1,
    featureIcon: featureIcon2,
    featureTitle: 'Cost-Effectiveness',
    featureDesc:
      'Seamlessly expedite extensible in methodologies business facilities benchmark for you.',
    featureBtnLink: '/service',
    featureBtnContent: 'Read More',
    featureBtnIcon: <FaPlus />,
  },
  {
    id: 2,
    featureIcon: featureIcon4,
    featureTitle: 'Innovative Technology',
    featureDesc:
      'Seamlessly expedite extensible in methodologies business facilities benchmark for you.',
    featureBtnLink: '/service',
    featureBtnContent: 'Read More',
    featureBtnIcon: <FaPlus />,
  },
  {
    id: 3,
    featureIcon: featureIcon3,
    featureTitle: 'Industry Expertise',
    featureDesc:
      'Seamlessly expedite extensible in methodologies business facilities benchmark for you.',
    featureBtnLink: '/service',
    featureBtnContent: 'Read More',
    featureBtnIcon: <FaPlus />,
  },
  {
    id: 4,
    featureIcon: featureIcon1,
    featureTitle: 'Scalability',
    featureDesc:
      'Seamlessly expedite extensible in methodologies business facilities benchmark for you.',
    featureBtnLink: '/service',
    featureBtnContent: 'Read More',
    featureBtnIcon: <FaPlus />,
  },
];

const Feature = () => {
  return (
    <section className='pb-28 relative z-10 -mt-28'>
      <div className='Container'>
        <div className='feature_boxs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 relative z-10'>
          {processData.map(
            ({
              id,
              featureIcon,
              featureTitle,
              featureDesc,
              featureBtnLink,
              featureBtnContent,
              featureBtnIcon,
            }) => {
              return (
                <div key={id}>
                  <FeatureCard
                    featureIcon={featureIcon}
                    featureTitle={featureTitle}
                    featureDesc={featureDesc}
                    featureBtnLink={featureBtnLink}
                    featureBtnContent={featureBtnContent}
                    featureBtnIcon={featureBtnIcon}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Feature;
