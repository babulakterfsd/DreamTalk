import Image from 'next/image';
import analytics from '../../../public/assets/images/dashboard.png';
import Styles from '../../styles/analytics.module.css';
const Analytics = () => {
  return (
    <div className={`${Styles.bg} py-20 lg:py-36 px-4 lg:px-0`}>
      <div className="main-container">
        <div className="title flex flex-col lg:flex-row justify-center gap-x-6 ">
          <h2
            className="font-giahfita font-bold text-2xl lg:text-6xl lg:leading-[74px] lg:tracking-normal"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            Unparalleled Insights <br />
            <span className="gradientText">Live Analytics</span>
          </h2>
          <p
            className="font-inter font-normal text-sm lg:text-xl lg:leading-7 lg:w-[483px] mt-4 lg:mt-28 lg:-ml-14 mb-7 lg:mb-16"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Revolutionize your Instagram influence with Unparalleled Insights &
            Live Analytics. Harness our AI chatbot on Telegram to foster deeper
            connections with fans, offer premium content, and sell merchandise
            directly through engaging conversations.
          </p>
        </div>
        <div
          className="flex justify-center items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Image
            src={analytics}
            alt="analytics"
            className="lg:h-[497px] lg:w-[769px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
