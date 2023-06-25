import Image from 'next/image';
import analytics from '../../../public/assets/images/webp/dreamtalk-dashboard-desktop.webp';
import Styles from '../../styles/analytics.module.css';
const Analytics = () => {
  return (
    <div className={`${Styles.bg} py-20 lg:py-36 px-4 lg:px-0`}>
      <div className="main-container">
        <div className="title flex flex-col lg:flex-row justify-center gap-x-6 ">
          <h2
            className="font-crimson font-bold text-2xl lg:text-6xl lg:leading-[74px] lg:tracking-normal"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            Unparalleled Insights <br />
            <span className="gradientText">Live Analytics</span>
          </h2>
          <p
            className="font-crimson font-normal lg:text-xl lg:leading-7 lg:w-[483px] mt-4 lg:mt-28 lg:-ml-14 mb-7 lg:mb-16"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Gain invaluable insights into your audience’s preferences, allowing
            for data-driven decisions that will further improve the user
            experience. The analytics dashboard provides you with a detailed
            breakdown of trends, insights and identifying the topics that
            resonate most with your fans
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
