'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Image from 'next/image';
import logo from '../../../public/assets/images/logo.png';
import Styles from '../../styles/hero.module.css';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

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
        .then((res) => {
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
        .catch((err) => {
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
      <div className={`${Styles.herobackground} h-screen lg:h-screen`}>
        <div className="herotextcontainer main-container flex flex-col ">
          <div
            className="flex justify-start items-center gap-x-2  lg:pt-1 cursor-pointer"
            data-aos="fade-down"
            data-aos-duration="500"
            onClick={() => router.push('/')}
          >
            <Image
              src={logo}
              alt="logo"
              className="w-[30px] lg:w-[52px] h-[59px] lg:h-[100px]"
            />
            <h2 className=" gradientText text-[1.2rem] lg:text-3xl mt-2 font-adieu font-light lg:font-bold">
              DreamTalk
            </h2>
          </div>
          <div className="mainbannertext mt-[38vh] sm:mt-36 lg:mt-28">
            <h1 className="font-crimson text-4xl lg:text-7xl leading-[20px] sm:leading-[30px] lg:leading-[36px] tracking-wide lg:tracking-normal font-bold lg:font-semibold">
              <div data-aos="fade-down" data-aos-duration="500">
                Interact
              </div>{' '}
              <br />{' '}
              <div data-aos="fade-down" data-aos-duration="1000">
                Inspire{' '}
              </div>{' '}
              <br />{' '}
              <div data-aos="fade-down" data-aos-duration="2000">
                Innovate
              </div>
            </h1>
            <p
              className="lg:w-[631px] font-inter font-semibold lg:font-normal lg:text-xl lg:leading-7 mt-4 lg:mt-5 mb-3 lg:mb-7"
              data-aos="fade-down"
              data-aos-duration="500"
            >
              Introducing an AI chatbot on Telegram, designed specifically for
              Instagram influencers. The chatbot provides a unique platform for
              interacting with fans through{' '}
            </p>
            <div
              className=""
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-offset="1"
            >
              <form className="relative" onSubmit={handleSubmit}>
                <input
                  type="email"
                  className={`${Styles.heroinput} w-[86vw] sm:w-[60vw] lg:w-[600px] h-14 pl-5 lg:pl-10 text-sm border rounded-full bg-[rgba(24,33,46,1)] lg:bg-[#161a25] border-none focus:outline-none -ml-1 lg:-ml-3`}
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
