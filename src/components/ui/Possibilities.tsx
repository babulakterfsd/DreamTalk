import Image from 'next/image';
import possibility from '../../../public/assets/images/Arrow 1.png';

const Possibilities = () => {
  return (
    <section className="bg-[#040d19] pt-44 pb-16 lg:py-20">
      <div className="main-container">
        <div className="lg:flex justify-start items-center">
          <h1 className="font-giahfita text-2xl leading-[23px] lg:text-6xl lg:leading-[64px] lg:ml-24 font-bold lg:font-semibold text-center lg:text-left  px-8 lg:px-0">
            The possibilities <br className="hidden lg:block" /> are
            <br className="block lg:hidden" /> beyond
            <span className="block lg:hidden">your imagination</span>
          </h1>
          <Image
            src={possibility}
            alt="possibility"
            className="h-6 lg:mt-14 lg:-ml-28 hidden lg:block"
          />
          <h1 className="font-giahfita lg:text-6xl lg:leading-[64px] lg:ml-8 lg:mt-28 font-semibold hidden lg:block">
            {' '}
            your <br /> <span className="lg:-ml-40">imagination</span>
          </h1>
        </div>
        <div className="flex justify-start lg:ml-60 lg:mt-3">
          <p className="font-inter font-normal text-sm lg:text-xl lg:leading-7 mt-3 text-center lg:text-left lg:mt-4 lg:w-[483px]">
            Lorem ipsum dolor sit amet consectetur. Gravida a pretium id id
            lacus tellus mauris quis scelsque. amet consectetur mauris quis
            sceleri.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Possibilities;
