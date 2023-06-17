import Image from 'next/image';
import logo from '../../../public/assets/images/logo.png';
import Styles from '../../styles/hero.module.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className={`${Styles.herobackground} lg:h-screen`}>
        <div className="herotextcontainer main-container flex flex-col">
          <div className="flex justify-start items-center gap-x-2  lg:pt-6">
            <Image src={logo} alt="logo" width={52} height={100} />
            <h2 className=" gradientText text-3xl mt-2 font-adieu font-bold">
              DreamTalk
            </h2>
          </div>
          <div className="mainbannertext lg:mt-16">
            <h1 className="font-giahfita font-normal lg:text-7xl lg:leading-[68px] lg:tracking-wider">
              Interact <br /> Inspire <br /> Innovate
            </h1>
            <p className="lg:w-[631px] font-inter font-normal lg:text-xl lg:leading-7 lg:mt-4 lg:mb-10">
              Introducing an AI chatbot on Telegram, designed specifically for
              Instagram influencers. The chatbot provides a unique platform for
              interacting with fans through{' '}
            </p>
            <div>
              <form className="relative">
                <input
                  type="email"
                  className="lg:w-[600px] h-14 pl-10 text-sm border rounded-full bg-[#161a25] border-none focus:outline-none lg:-ml-3 "
                  placeholder="e.g. hello@dreamtalk.ai"
                  required
                />
                <button
                  type="submit"
                  className="gradientBg absolute -ml-32 py-2 mt-2  px-3 rounded-full text-white font-semibold lg:text-[1.1rem]"
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
