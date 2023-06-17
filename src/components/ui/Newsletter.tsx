import Image from 'next/image';
import bekaImage from '../../../public/assets/images/Ellipse 2483.png';
import Styles from '../../styles/newsletter.module.css';

const Newsletter = () => {
  return (
    <div className={`${Styles.newsletterbg} lg:py-36 lg:relative`}>
      <Image src={bekaImage} alt="beka" className="lg:absolute top-0 right-0" />
      <div className="main-container flex justify-center items-center flex-col gap-y-10">
        <h2 className="font-giahfita font-bold lg:text-6xl lg:leading-[74px] lg:tracking-normal">
          Subscribe to Newsletter
        </h2>
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
              className="gradientBg absolute -ml-32 py-2.5 mt-1.5  lg:px-5 rounded-full text-white font-semibold lg:text-[1.1rem] lg:tracking-wider"
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
