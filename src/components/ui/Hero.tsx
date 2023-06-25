'use client';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import logo from '../../../public/assets/images/logo.png';
import Styles from '../../styles/hero.module.css';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [bgtimer, setBgTimer] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setBgTimer(true);
    }, 1500);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validateEmail = (mail: string) => {
      return String(mail)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const isValidEmail = validateEmail(email);

    if (!isValidEmail) {
      setShowResult(true);
      setErrorMessage('Invalid email address');
      setTimeout(() => {
        setShowResult(false);
        setErrorMessage('');
      }, 3000);
      return;
    } else {
      axios
        .post('/api/waitlist', {
          email: email,
        })
        .then((res: any) => {
          if (res?.data?.statusCode === 200) {
            setEmail('');
            setShowResult(true);
            setSuccessMessage(res.data.message);
            setTimeout(() => {
              setShowResult(false);
              setSuccessMessage('');
              setErrorMessage('');
            }, 9000);
          } else if (res?.data?.statusCode === 400) {
            setShowResult(true);
            setErrorMessage(res.data.message);
            setTimeout(() => {
              setShowResult(false);
              setErrorMessage('');
              setSuccessMessage('');
            }, 3000);
          }
        })
        .catch((err: any) => {
          setShowResult(true);
          setErrorMessage(err);
          setTimeout(() => {
            setShowResult(false);
            setErrorMessage('');
          }, 3000);
        });
    }
  };

  return (
    <section id="herosection" className="hero">
      <div
        className={`${
          bgtimer ? Styles.herobackground : Styles.herobackgroundlight
        } `}
      >
        <div className="herotextcontainer main-container pb-8 lg:pb-20 flex flex-col lg:gap-y-16">
          <div
            className="flex justify-start items-center gap-x-2  lg:pt-10 cursor-pointer lg:w-24"
            onClick={() => router.push('/')}
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <Image
              src={logo}
              alt="logo"
              className="w-[30px] lg:w-[52px] h-[59px] lg:h-[100px]"
            />
          </div>
          <div className="mainbannertext mt-[44vh] sm:mt-36 lg:mt-20">
            <h1
              className="flex items-center gap-x-2 lg:h-20"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <span className="gradientText font-crimson font-black text-2xl lg:font-normal lg:text-[38px] lg:leading-[60px] lg:tracking-[-.03em]">
                DreamTalk
              </span>
              {/* <span className="font-crimson lg:font-medium lg:text-5xl lg:leading-[45px] lg:tracking-[.06em] capitalize lg:ml-4">
                Interacts
              </span> */}
              <span className="font-crimson font-extralight lg:font-medium text-2xl lg:text-5xl lg:leading-[45px] lg:tracking-[.06em] capitalize -mt-2 lg:-mt-4">
                <Typewriter
                  words={[
                    'Interacts',
                    'Engages',
                    'Inspires',
                    'Amazes',
                    'Tempts',
                    'Innovates',
                    'Connects',
                    'Transforms',
                    'Revolutions',
                    'Attracts',
                    'Entertains',
                    'Chats',
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p
              className="lg:w-[535px] font-crimson leading-[20px] font-normal lg:text-[1.2rem] mt-4 mb-3 lg:mb-7"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              Experience AI-driven fan engagements with{' '}
              <span className="font-bold lg:font-extrabold text-lg lg:text-2xl">
                DreamTalk.
              </span>{' '}
              <br />
              Create unforgettable, customized experiences, captivating your
              followers like never before. <br />
              <span className="mt-5 block lg:leading-[36px] font-bold lg:font-extrabold">
                {' '}
                The future of engagement has arrived.{' '}
              </span>
            </p>
            <div
              className=""
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-offset="1"
            >
              <form className="relative" onSubmit={handleSubmit}>
                <input
                  type="email"
                  className={`${Styles.heroinput} w-[87vw] sm:w-[60vw] lg:w-[600px] h-14 pl-5 lg:pl-10 text-sm border rounded-full bg-[rgba(24,33,46,1)] lg:bg-[#161a25] border-none focus:outline-none -ml-1 lg:-ml-3 font-crimson`}
                  placeholder="e.g. hello@dreamtalk.ai"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="gradientBg absolute -ml-28 lg:-ml-32 py-2 mt-2 px-3 rounded-full text-white lg:font-semibold lg:text-[1.1rem]"
                >
                  Join Waitlist
                </button>
              </form>
              {showResult ? (
                <div className="flex justify-center lg:justify-start items-center">
                  <div className="bg-[#0a071d] rounded-full px-3 cursor-auto mx-auto my-4 py-1 absolute mt-28 lg:mt-16 z-50">
                    {successMessage ? (
                      <div className="flex gap-x-1 items-center justify-center">
                        <svg
                          className="h-5 w-5 text-green-500"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="1"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />{' '}
                          <circle cx="12" cy="12" r="9" />{' '}
                          <path d="M9 12l2 2l4 -4" />
                        </svg>
                        <span className="text-green-600 font-semibold text-md text-center">
                          {' '}
                          {successMessage}
                        </span>
                      </div>
                    ) : (
                      <div className="flex gap-x-1 items-center justify-center">
                        <svg
                          className="h-5 w-5 text-red-500"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {' '}
                          <path stroke="none" d="M0 0h24v24H0z" />{' '}
                          <circle cx="12" cy="12" r="9" />{' '}
                          <path d="M10 10l4 4m0 -4l-4 4" />
                        </svg>
                        <span className="text-red-600 font-semibold text-md text-center">
                          {' '}
                          {errorMessage}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
