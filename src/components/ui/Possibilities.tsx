import Image from 'next/image';
import possibility from '../../../public/assets/images/Arrow 1.png';

const Possibilities = () => {
  return (
    <section className="bg-[#040d19] pt-20 pb-16 lg:py-28 xl:py-20 relative">
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
          <h1 className="font-crimson lg:text-6xl lg:leading-[64px] lg:ml-20  lg:mt-28 font-semibold hidden lg:block capitalize">
            {' '}
            your <br /> <span className="lg:-ml-40">imagination</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Possibilities;
