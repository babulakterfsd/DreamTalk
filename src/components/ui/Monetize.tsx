import Image from 'next/image';
import redelips from '../../../public/assets/images/Ellipse 2484.png';
import rightarrow from '../../../public/assets/images/arrow-right.png';
import monetize from '../../../public/assets/images/video.png';

const Monetize = () => {
  return (
    <div className="lg:py-36">
      <div className="main-container text-center">
        <div className="title lg:mb-10">
          <h1 className="font-giahfita font-bold lg:text-6xl lg:leading-[74px] lg:tracking-normal">
            Monetize Your <br /> Fanbase with Our{' '}
          </h1>
          <h1 className=" gradientText font-giahfita font-bold lg:text-6xl lg:leading-[74px] lg:tracking-normal lg:ml-80 lg:mt-4">
            AI Chatbot
          </h1>
        </div>
        <div className="flex justify-start gap-x-20 items-center lg:relative">
          <Image
            src={monetize}
            alt="monetize"
            className="lg:h-[407px] lg:w-[547px]"
          />
          <Image
            src={redelips}
            alt="monetize"
            className="lg:absolute -top-24 -left-40"
          />
          <div className="textcontainer ">
            <p className="lg:mb-14 lg:w-[400px]">
              Monetize your fanbase with our AI chatbot on Telegram designed for
              Instagram influencers. Connect with fans like never before and
              offer premium content, while also selling physical and digital
              items directly through the chatbot.
            </p>
            <div className="flex flex-row gap-x-6 mx-auto justify-center items-center">
              <button
                type="submit"
                className="gradientBg  py-2 mt-2  rounded-full text-white font-normal lg:text-[1.1rem] flex gap-x-1 justify-center items-center lg:px-6"
              >
                <span>Join The Waitlist</span>
                <Image src={rightarrow} alt="rightarrow" className="mt-2" />
              </button>
              <button
                type="submit"
                className=" bg-[rgba(255,255,255,.11)]  py-2 mt-2   rounded-full text-white font-normal lg:text-[1.1rem] flex gap-x-1 justify-center items-center lg:px-6"
              >
                <span>Contact Us</span>
                <Image src={rightarrow} alt="rightarrow" className="mt-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monetize;
