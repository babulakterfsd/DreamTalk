import Image from 'next/image';
import rightarrow from '../../../public/assets/images/arrow-right.png';
import feature1 from '../../../public/assets/images/feature1.png';
import feature2 from '../../../public/assets/images/feature2.png';
import feature3 from '../../../public/assets/images/feature3.png';

const Features = () => {
  return (
    <div
      className="py-20 lg:py-36"
      style={{
        background: 'linear-gradient(to bottom, rgba(4,13,25,1), #000)',
      }}
    >
      <div className="">
        <div
          className="title text-center"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <h2 className="font-giahfita text-2xl lg:text-6xl lg:leading-[67px] lg:tracking-wider font-bold">
            Features
          </h2>
          <div className="flex justify-center">
            <p className="lg:w-[631px] font-inter font-semibold lg:font-normal  lg:text-xl lg:leading-7 mt-1 lg:mt-4 mb-10 lg:mb-14 px-8 lg:px-0">
              Lorem ipsum dolor sit amet constur. Gravida pretium id id lacus
              tellus mauris quis scelerisque. amet{' '}
            </p>
          </div>
        </div>
        <div
          className="featurecontainer grid grid-cols-1 lg:grid-cols-3  lg:mb-16 ml-6 lg:-ml-1 px-6 gap-y-5 lg:px-0 sm:flex justify-center items-center flex-col lg:flex-row"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <div className="feature1 lg:border border-white flex gap-x-4 lg:gap-x-0 lg:flex-col lg:gap-y-8 lg:pl-16 lg:py-8">
            <Image
              src={feature1}
              alt="feature1"
              className="w-[40px] lg:w-[101px] h-[40px] lg:h-[100px]"
            />
            <p className=" lg:text-base font-inter lg:w-[75%]">
              Personalized experience tailored to each user's preferences
            </p>
          </div>
          <div className="feature2 lg:border border-white flex gap-x-4 lg:gap-x-0 lg:flex-col lg:gap-y-8 lg:pl-16 lg:py-8">
            <Image
              src={feature2}
              alt="feature2"
              className="w-[40px] lg:w-[101px] h-[40px] lg:h-[100px]"
            />
            <p className=" lg:text-base font-inter lg:w-[75%]">
              Sell physical and digital content directly through built-in store
            </p>
          </div>
          <div className="feature3 lg:border border-white flex gap-x-4 lg:gap-x-0 lg:flex-col lg:gap-y-8 lg:pl-16 lg:py-8 sm:-ml-10 lg:ml-0">
            <Image
              src={feature3}
              alt="feature3"
              className="w-[40px] lg:w-[101px] h-[40px] lg:h-[100px]"
            />
            <p className=" lg:text-base font-inter lg:w-[75%]">
              Integration with Instagram for seamless fan interaction
            </p>
          </div>
        </div>
        <div
          className="flex justify-center mt-8 lg:mt-0 lg:ml-28"
          data-aos="fade-down"
          data-aos-duration="2500"
        >
          <a href="https://features.dreamtalk.ai" target="_blank">
            <button
              type="submit"
              className="gradientBg absolute lg:-ml-32 py-1 lg:py-2 lg:mt-2 px-2 lg:px-6 rounded-full text-white font-normal lg:text-[1.1rem] flex gap-x-1 justify-center items-center"
            >
              <span>See All Features</span>
              <Image src={rightarrow} alt="rightarrow" className="mt-2" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features;
