import Image from 'next/image';
import tumbler from '../../../public/assets/images/Vector.png';
import fb from '../../../public/assets/images/u_facebook.png';
import github from '../../../public/assets/images/u_github.png';

const Footer = () => {
  return (
    <div className="lg:pt-32 lg:pb-16 overflow-x-hidden">
      <div className="main-container">
        <div className="footercontainer flex">
          <div className="leftpart lg:mr-auto">
            <h3 className="gradientText lg:text-3xl lg:leading-[42px] lg:font-black">
              SET A TWO LINES TEXT <br />
              HERE TO LOOK COOL
            </h3>
            <div className="socialicons lg:mt-4 flex gap-x-6">
              <Image
                src={fb}
                alt="fb"
                className="border border-[rgba(236,112,112,1)] cursor-pointer p-3 rounded-full h-12 w-12"
              />
              <Image
                src={tumbler}
                alt="fb"
                className="border border-[rgba(236,112,112,1)] cursor-pointer p-3 rounded-full h-12 w-12"
              />
              <Image
                src={github}
                alt="fb"
                className="border border-[rgba(236,112,112,1)] cursor-pointer p-3 rounded-full h-12 w-12"
              />
            </div>
          </div>
          <div className="rightpart">
            <div className="flex justify-center items-center gap-x-16 md:gap-x-32">
              {/* policy */}
              <div className="grid-cols-1 lg:grid-cols-3">
                <h6 className="text-center mb-2 lg:mb-5 text-xl font-[700] text-[rgba(236,112,112,1)]">
                  Policy
                </h6>
                <div className="flex flex-col gap-y-1.5 md:gap-y-3 text-center text-sm">
                  <span className="font-light leading-[18px] tracking-[.02em] font-inter text-[rgba(206,211,224,1)] text-[15px]">
                    Terms
                  </span>
                  <span className="font-light leading-[18px] tracking-[.02em] font-inter text-[rgba(206,211,224,1)] text-[15px]">
                    Privacy
                  </span>
                  <span className="font-light leading-[18px] tracking-[.02em] font-inter text-[rgba(206,211,224,1)] text-[15px]">
                    Conditions
                  </span>
                </div>
              </div>
              {/* policy */}
              <div className="grid-cols-1 lg:grid-cols-3">
                <h6 className="text-center mb-2 lg:mb-5 text-xl font-[700] text-[rgba(236,112,112,1)]">
                  Contact
                </h6>
                <div className="flex flex-col gap-y-1.5 md:gap-y-3 text-center text-sm">
                  <span className="font-light leading-[18px] tracking-[.02em] font-inter text-[rgba(206,211,224,1)] text-[15px]">
                    Email
                  </span>
                  <span className="font-light leading-[18px] tracking-[.02em] font-inter text-[rgba(206,211,224,1)] text-[15px]">
                    Telegram
                  </span>
                  <span className="font-light leading-[18px] tracking-[.02em] font-inter text-[rgba(206,211,224,1)] text-[15px]">
                    Instagram
                  </span>
                </div>
              </div>
              {/* policy */}
              <div className="grid-cols-1 lg:grid-cols-3">
                <h6 className="text-center mb-2 lg:mb-5 text-xl font-[700] text-[rgba(236,112,112,1)]">
                  Company
                </h6>
                <div className="flex flex-col gap-y-1.5 md:gap-y-3 text-center text-sm">
                  <span className="font-light leading-[18px] tracking-[.02em] font-inter text-[rgba(206,211,224,1)] text-[15px]">
                    About
                  </span>
                  <span className="font-light leading-[18px] tracking-[.02em] font-inter text-[rgba(206,211,224,1)] text-[15px]">
                    Branding
                  </span>
                  <span className="font-light leading-[18px] tracking-[.02em] font-inter text-[rgba(206,211,224,1)] text-[15px]">
                    Customers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
