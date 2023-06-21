import Image from 'next/image';
import possibility from '../../../public/assets/images/Arrow 1.png';

const Possibilities = () => {
  return (
    <section className="bg-[#040d19] pt-20 pb-16 lg:py-28 xl:py-20">
      <div className="main-container">
        <div
          className="lg:flex justify-center lg:justify-start items-center"
          data-aos="fade-down"
          data-aos-duration="500"
        >
          <h1 className="font-crimson text-2xl leading-[23px] lg:text-6xl lg:leading-[64px] font-bold lg:font-semibold text-center lg:px-0 capitalize">
            The possibilities <br className="hidden lg:block" /> are
            <br className="lg:hidden" /> beyond{' '}
            <span className="lg:hidden">your imagination</span>
          </h1>
          <Image
            src={possibility}
            alt="possibility"
            className="h-6 lg:mt-14  hidden lg:block"
          />
          <h1 className="font-crimson lg:text-6xl lg:leading-[64px] lg:ml-20 lg:mt-28 font-semibold hidden lg:block capitalize">
            {' '}
            your <br /> <span className="lg:-ml-40">imagination</span>
          </h1>
        </div>
        {/* <div
          className="flex justify-start md:justify-center lg:justify-start lg:ml-60 lg:mt-3"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <p className="font-inter font-medium lg:font-normal lg:text-xl lg:leading-7 mt-3 text-left lg:text-left lg:mt-4 lg:w-[483px]">
            AI chatbots can revolutionize how influencers engage with their
            followers. They adapt to the influencer's brand voice, provide
            personalization and handle a large volume of messages. This frees up
            time for the influencer to focus on other important aspects of their
            business, all while generating income through the use of an AI
            chatbot.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Possibilities;
