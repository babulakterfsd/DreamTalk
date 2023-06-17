import Image from 'next/image';
import rightarrow from '../../../public/assets/images/arrow-right.png';
import feature1 from '../../../public/assets/images/feature1.png';
import feature2 from '../../../public/assets/images/feature2.png';
import feature3 from '../../../public/assets/images/feature3.png';

const Features = () => {
  return (
    <div
      className="lg:py-36"
      style={{
        background: 'linear-gradient(to bottom, rgba(4,13,25,1), #000)',
      }}
    >
      <div className="main-container">
        <div className="title text-center">
          <h2 className="font-giahfita lg:text-6xl lg:leading-[67px] lg:tracking-wider font-bold">
            Features
          </h2>
          <div className="flex justify-center">
            <p className="lg:w-[631px] font-inter font-normal lg:text-xl lg:leading-7 lg:mt-4 lg:mb-14">
              Lorem ipsum dolor sit amet constur. Gravida pretium id id lacus
              tellus mauris quis scelerisque. amet{' '}
            </p>
          </div>
        </div>
        <div className="featurecontainer grid grid-cols-1 lg:grid-cols-3 gap-x-12 lg:mb-16">
          <div className="feature1 border border-white flex flex-col gap-y-8 lg:pl-16 py-8">
            <Image src={feature1} alt="feature1" />
            <p className="text-base font-inter lg:w-[75%]">
              Personalized experience tailored to each user's preferences
            </p>
          </div>
          <div className="feature2 border border-white flex flex-col gap-y-8  lg:pl-16 py-8">
            <Image src={feature2} alt="feature2" />
            <p className="text-base font-inter lg:w-[75%]">
              Sell physical and digital content directly through built-in store
            </p>
          </div>
          <div className="feature3 border border-white flex flex-col gap-y-8  lg:pl-16 py-8">
            <Image src={feature3} alt="feature3" />
            <p className="text-base font-inter lg:w-[75%]">
              Integration with Instagram for seamless fan interaction
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:ml-28">
          <button
            type="submit"
            className="gradientBg absolute -ml-32 py-2 mt-2  lg:px-6 rounded-full text-white font-normal lg:text-[1.1rem] flex gap-x-1 justify-center items-center"
          >
            <span>See All Features</span>
            <Image src={rightarrow} alt="rightarrow" className="mt-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
