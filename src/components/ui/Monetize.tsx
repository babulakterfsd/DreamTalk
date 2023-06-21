import Image from 'next/image';
import redelips from '../../../public/assets/images/Ellipse 2484.png';
import rightarrow from '../../../public/assets/images/arrow-right.png';

const Monetize = () => {
  return (
    <div className="py-20 lg:py-36">
      <div className="main-container text-center">
        <div
          className="title lg:mb-10"
          data-aos="fade-down"
          data-aos-duration="500"
        >
          <h1 className="font-crimson font-bold lg:text-6xl lg:leading-[74px] lg:tracking-normal hidden lg:block">
            Monetize Your <br /> Fanbase with Our{' '}
          </h1>
          <h1 className=" gradientText font-crimson font-bold lg:text-6xl lg:leading-[74px] lg:tracking-normal lg:ml-80 lg:mt-4 hidden lg:block">
            AI Chatbot
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-start gap-x-4 xl:gap-x-20 items-center lg:relative">
          <iframe
            title="dreamtalk.ai - Introduction"
            src="https://player.vimeo.com/video/838030231"
            width="560"
            height="315"
            allow="autoplay; fullscreen; picture-in-picture"
            className={` rounded-2xl rounded-bl-xl h-80 w-full px-3 md:px-0 lg:w-[560px] -mt-10 md:-mt-0 `}
            style={{ borderRadius: '2rem' }}
          ></iframe>
          <h1
            className="font-crimson font-bold text-[1.5rem] lg:text-6xl lg:leading-[74px] lg:tracking-normal mt-4 block lg:hidden"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Monetize your fanbase with our{' '}
            <span className="gradientText">AI Chatbot</span>
          </h1>
          <Image
            src={redelips}
            alt="monetize"
            className="lg:absolute -top-24 -left-40 hidden lg:block"
          />
          <div
            className="textcontainer text-left"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <p className="mb-7 lg:mb-14 lg:w-[400px] font-semibold lg:font-normal text-center lg:text-left lg:text-xl mt-4 lg:mt-0">
              Monetize your fanbase with our AI chatbot on Telegram designed for
              influencers. Connect with fans like never before and offer premium
              content, while also selling physical and digital items directly
              through the chatbot.
            </p>
            <div className="flex flex-row  justify-center lg:justify-start items-center">
              <a href="#herosection">
                <button
                  type="submit"
                  className="gradientBg py-1 lg:py-2 mt-2  rounded-full text-white font-normal lg:text-[1.1rem] flex gap-x-1 justify-center items-center px-3 lg:px-6"
                >
                  <span>Join The Waitlist</span>
                  <Image src={rightarrow} alt="rightarrow" className="mt-2" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monetize;
