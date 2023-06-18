'use client';
import axios from 'axios';
import { useState } from 'react';

import Image from 'next/image';
import bekaImage from '../../../public/assets/images/Ellipse 2483.png';
import Styles from '../../styles/newsletter.module.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

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
    <div className={`${Styles.newsletterbg} py-14 lg:py-36 relative `}>
      <Image
        src={bekaImage}
        alt="beka"
        className="absolute top-0 right-0 h-[200px] w-[150px] lg:h-[385px] lg:w-[310px] -z-50 xl:z-0"
      />
      <div className="main-container flex justify-center items-center flex-col gap-y-4 lg:gap-y-10 z-50 xl:z-0">
        <h2
          className="font-crimson font-bold text-2xl leading-[27px] lg:text-6xl lg:leading-[74px] lg:tracking-normal"
          data-aos="fade-down"
          data-aos-duration="500"
        >
          Subscribe to Newsletter
        </h2>
        <div
          className="mx-auto lg:mx-0"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-offset="1"
        >
          <form className="relative" onSubmit={handleSubmit}>
            <input
              type="email"
              className="w-[88vw] sm:w-[60vw] lg:w-[600px] h-12 lg:h-14 pl-10 text-sm border rounded-full bg-[#161a25] border-none focus:outline-none lg:-ml-3 bg-opacity-60"
              placeholder="e.g. hello@dreamtalk.ai"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="gradientBg absolute -ml-[90px] lg:-ml-32 py-1 lg:py-2.5 mt-2 lg:mt-1.5 px-2 lg:px-5 rounded-full text-white lg:font-semibold lg:text-[1.1rem] lg:tracking-wider"
            >
              Subscribe
            </button>
          </form>
          {showResult ? (
            <div className="flex justify-center lg:justify-start items-center">
              <div className="bg-[#0a071d] rounded-full px-3 cursor-auto mx-auto my-4 py-1 absolute mt-28 lg:mt-20 z-50">
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
  );
};

export default Newsletter;
