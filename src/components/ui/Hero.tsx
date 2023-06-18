import Image from 'next/image';
import logo from '../../../public/assets/images/logo.png';
import Styles from '../../styles/hero.module.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className={`${Styles.herobackground} h-screen lg:h-screen`}>
        <div className="herotextcontainer main-container flex flex-col ">
          <div
            className="flex justify-start items-center gap-x-2  lg:pt-1"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <Image
              src={logo}
              alt="logo"
              className="w-[30px] lg:w-[52px] h-[59px] lg:h-[100px]"
            />
            <h2 className=" gradientText text-[1.2rem] lg:text-3xl mt-2 font-adieu font-light lg:font-bold">
              DreamTalk
            </h2>
          </div>
          <div className="mainbannertext mt-[42vh] sm:mt-36 lg:mt-32">
            <h1 className="font-giahfita text-4xl lg:text-7xl leading-[20px] sm:leading-[30px] xl:leading-[36px] tracking-wide lg:tracking-normal font-bold lg:font-semibold">
              <div data-aos="fade-down" data-aos-duration="1000">
                Interact
              </div>{' '}
              <br />{' '}
              <div data-aos="fade-down" data-aos-duration="1500">
                Inspire{' '}
              </div>{' '}
              <br />{' '}
              <div data-aos="fade-down" data-aos-duration="2500">
                Innovate
              </div>
            </h1>
            <p
              className="lg:w-[631px] font-inter font-[500] lg:font-normal text-sm lg:text-xl lg:leading-7 mt-4 lg:mt-5 mb-3 lg:mb-7"
              data-aos="fade-down"
              data-aos-duration="2500"
            >
              Introducing an AI chatbot on Telegram, designed specifically for
              Instagram influencers. The chatbot provides a unique platform for
              interacting with fans through{' '}
            </p>
            <div
              className=""
              data-aos="fade-up"
              data-aos-duration="2500"
              data-aos-offset="1"
            >
              <form className="relative">
                <input
                  type="email"
                  className={`${Styles.heroinput} w-[86vw] sm:w-[60vw] lg:w-[600px] h-12 lg:h-14 pl-5 lg:pl-10 text-sm border rounded-full bg-[rgba(24,33,46,1)] lg:bg-[#161a25] border-none focus:outline-none -ml-1 lg:-ml-3`}
                  placeholder="e.g. hello@dreamtalk.ai"
                  required
                />
                <button
                  type="submit"
                  className="gradientBg absolute -ml-28 lg:-ml-32 py-1.5 lg:py-2 mt-1.5 lg:mt-2 px-3 rounded-full text-white lg:font-semibold lg:text-[1.1rem]"
                >
                  Join Waitlist
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
