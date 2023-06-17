import Image from 'next/image';
import possibility from '../../../public/assets/images/Arrow 1.png';

const Possibilities = () => {
  return (
    <section className="bg-[#040d19] lg:py-20 overflow-x-hidden">
      <div className="main-container">
        <div className="flex justify-start items-center">
          <h1 className="font-giahfita lg:text-6xl lg:leading-[64px] lg:ml-24 font-semibold">
            The possibilities <br /> are beyond
          </h1>
          <Image
            src={possibility}
            alt="possibility"
            className="h-6 lg:mt-14 lg:-ml-28"
          />
          <h1 className="font-giahfita lg:text-6xl lg:leading-[64px] lg:ml-8 lg:mt-28 font-semibold">
            {' '}
            your <br /> <span className="lg:-ml-40">imagination</span>
          </h1>
        </div>
        <div className="flex justify-start lg:ml-60 lg:mt-3">
          <p className="font-inter font-normal lg:text-xl lg:leading-7 lg:mt-4 lg:w-[483px]">
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
