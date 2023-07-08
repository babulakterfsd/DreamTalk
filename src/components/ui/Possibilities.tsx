import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';

const Possibilities = () => {
  return (
    <section className="bg-[#040d19] pt-20 pb-16 lg:py-28 xl:py-20 relative">
      <div className="main-container">
        {/* <div
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
          <h1 className="font-crimson lg:text-6xl lg:leading-[64px] lg:ml-20  lg:mt-28 font-semibold hidden lg:block capitalize">
            {' '}
            your <br /> <span className="lg:-ml-40">imagination</span>
          </h1>
        </div> */}
        <div
          className="flex justify-center items-center"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="flex -ml-2 lg:-ml-20">
            <BiSolidQuoteAltLeft className="text-2xl lg:text-6xl mr-2 lg:mr-12 lg:block"></BiSolidQuoteAltLeft>
            <h1 className="font-crimson text-2xl leading-[32px] lg:text-6xl lg:leading-[64px] font-bold lg:font-semibold text-center lg:px-0 capitalize lg:-ml-10">
              <span className="block">The only limitation is</span>
              <span className="block">your imagination</span>
            </h1>
            <BiSolidQuoteAltRight className="text-2xl lg:text-6xl self-end lg:block -ml-6 lg:-ml-[60px]"></BiSolidQuoteAltRight>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Possibilities;
