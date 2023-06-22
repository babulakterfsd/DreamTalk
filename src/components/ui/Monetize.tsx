import Image from 'next/image';
import redelips from '../../../public/assets/images/Ellipse 2484.png';
import rightarrow from '../../../public/assets/images/arrow-right.png';
import Styles from '../../styles/monetize.module.css';

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
            Amplify Your <br /> Fanbase With
          </h1>
          <h1
            className={`${Styles.drmtalk} gradientText font-crimson font-bold lg:text-6xl lg:leading-[74px] lg:tracking-normal lg:mt-4 hidden lg:block `}
          >
            DreamTalk AI
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-x-4 xl:gap-x-20 items-center lg:relative">
          <iframe
            title="dreamtalk.ai - Introduction"
            src="https://player.vimeo.com/video/838030231"
            allow="autoplay; fullscreen; picture-in-picture"
            className={` rounded-2xl rounded-bl-xl h-80 px-3 md:px-0  -mt-10 md:-mt-0`}
            style={{ borderRadius: '2rem' }}
          ></iframe>
          <h1
            className="font-crimson font-bold text-[1.5rem] lg:text-6xl lg:leading-[74px] lg:tracking-normal mt-4 block lg:hidden"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Amplify Your Fanbase With{' '}
            <span className="gradientText">DreamTalk AI</span>
          </h1>
          <Image
            src={redelips}
            alt="monetize"
            className="lg:absolute -top-24 -left-40 hidden lg:block"
          />
          <div
            className="textcontainer flex justify-between flex-col"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <p
              className={` ${Styles.fckparagraph} mb-7 lg:mb-14 font-crimson lg:w-[400px] font-medium lg:font-normal text-center lg:text-left lg:text-xl mt-4 lg:mt-0`}
            >
              Let us aid you in maximizing your reach.{' '}
              <span className="inline-block my-4">
                Connect with your fans on a deeper level, offering them
                exclusive premium content that keeps them coming back for more.
              </span>{' '}
              Explore the potential of integrating DreamTalk into your your
              digital presence.
            </p>
            <div className="flex flex-row  justify-center lg:justify-start items-center">
              <a href="#herosection">
                <button
                  type="submit"
                  className="gradientBg py-1 lg:py-2 mt-1  rounded-full text-white font-normal lg:text-[1.1rem] flex gap-x-1 justify-center items-center px-3 lg:px-6"
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
