import Image from 'next/image';
import bekaImage from '../../../public/assets/images/Ellipse 2483.png';
import Styles from '../../styles/newsletter.module.css';

const Newsletter = () => {
  return (
    <div className={`${Styles.newsletterbg} py-14 lg:py-36 relative `}>
      <Image
        src={bekaImage}
        alt="beka"
        className="absolute top-0 right-0 h-[200px] w-[150px] lg:h-[385px] lg:w-[310px] -z-50 lg:z-0"
      />
      <div className="main-container flex justify-center items-center flex-col gap-y-4 lg:gap-y-10 z-50 lg:z-0">
        <h2 className="font-giahfita font-bold text-2xl leading-[27px] lg:text-6xl lg:leading-[74px] lg:tracking-normal">
          Subscribe to Newsletter
        </h2>
        <div className="mx-auto lg:mx-0">
          <form className="relative">
            <input
              type="email"
              className="w-[90vw] lg:w-[600px] h-12 lg:h-14 pl-10 text-sm border rounded-full bg-[#161a25] border-none focus:outline-none lg:-ml-3 bg-opacity-60"
              placeholder="e.g. hello@dreamtalk.ai"
              required
            />
            <button
              type="submit"
              className="gradientBg absolute -ml-[90px] lg:-ml-32 py-1 lg:py-2.5 mt-2 lg:mt-1.5 px-2 lg:px-5 rounded-full text-white lg:font-semibold lg:text-[1.1rem] lg:tracking-wider"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
