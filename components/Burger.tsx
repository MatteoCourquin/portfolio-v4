import { LanguageContext } from '@/layout/default';
import { useMagnet, useResetMagnet } from '@/utils/animations';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import Link from 'next/link';
import { useContext, useRef, useState } from 'react';
import Typography, { TYPOGRAPHY_TYPE } from './atoms/Typography';
import Language from './Language';

const Burger = () => {
  const { language, setLanguage, data } = useContext(LanguageContext);

  const [isOpen, setIsOpen] = useState(false);

  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const text4Ref = useRef(null);
  const buttonLanguageRef = useRef(null);
  const wrapperRef = useRef(null);
  const backgroundRef = useRef(null);

  const { contextSafe } = useGSAP();

  const openBurger = contextSafe(() => {
    const timelineOpen = gsap.timeline({ paused: true });
    timelineOpen
      .add(
        gsap.to(wrapperRef.current, {
          visibility: 'visible',
          scale: 1,
          duration: 0,
        }),
      )
      .add(
        gsap.to(backgroundRef.current, {
          scale: 60,
          duration: 0.8,
          ease: 'power3.inOut',
        }),
      )
      .add(
        gsap.to([text1Ref.current, text2Ref.current, text3Ref.current, text4Ref.current], {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power4.inOut',
          stagger: 0.1,
        }),
        '-=0.6',
      )
      .add(
        gsap.to(buttonLanguageRef.current, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power4.inOut',
        }),
        '-=0.6',
      )
      .play();

    return timelineOpen;
  });

  const closeBurger = contextSafe(() => {
    const timelineClose = gsap.timeline({ paused: true });
    timelineClose
      .add(
        gsap.to(buttonLanguageRef.current, {
          x: -16,
          opacity: 0,
          duration: 1,
          ease: 'power4.inOut',
        }),
      )
      .add(
        gsap.to(
          [text1Ref.current, text2Ref.current, text3Ref.current, text4Ref.current].reverse(),
          {
            y: -16,
            opacity: 0,
            duration: 1,
            ease: 'power4.inOut',
            stagger: 0.1,
          },
        ),
        '-=0.6',
      )
      .add(
        gsap.to(backgroundRef.current, {
          scale: 0,
          duration: 0.8,
          ease: 'power3.inOut',
        }),
        '-=0.7',
      )
      .add(
        gsap.to(wrapperRef.current, {
          visibility: 'hidden',
          scale: 0,
          duration: 0,
        }),
      )
      .play();

    return timelineClose;
  });

  const handdleOpen = () => {
    setIsOpen(true);
    openBurger();
  };

  const handdleClose = () => {
    setIsOpen(false);
    closeBurger();
  };

  return (
    <>
      <div
        ref={wrapperRef}
        className="invisible fixed left-0 right-0 top-0 z-[90] h-screen w-screen scale-0"
      >
        <div
          ref={backgroundRef}
          className="absolute right-10 top-10 aspect-square h-16 w-16 scale-100 rounded-full bg-black sm:right-x-default sm:h-20 sm:w-20 sm:translate-x-10"
        ></div>
        <div className="absolute left-10 top-y-default flex h-20 -translate-y-1/2 items-center sm:left-x-default sm:-translate-x-1/2">
          <div ref={buttonLanguageRef} className="-translate-x-4 opacity-0">
            <Language />
          </div>
        </div>
        <nav className="z-[90] flex h-screen w-screen flex-col items-center justify-center gap-8 uppercase text-white">
          <Link ref={text1Ref} href="/" onClick={handdleClose}>
            <Typography
              type={TYPOGRAPHY_TYPE.TEXT}
              as={TYPOGRAPHY_TYPE.HEADING3}
              className="whitespace-nowrap"
            >
              {data.nav.home}
            </Typography>
          </Link>
          <Link ref={text2Ref} href="/projects" onClick={handdleClose}>
            <Typography
              type={TYPOGRAPHY_TYPE.TEXT}
              as={TYPOGRAPHY_TYPE.HEADING3}
              className="whitespace-nowrap"
            >
              {data.nav.projects}
            </Typography>
          </Link>
          <Link ref={text3Ref} href="/about" onClick={handdleClose}>
            <Typography
              type={TYPOGRAPHY_TYPE.TEXT}
              as={TYPOGRAPHY_TYPE.HEADING3}
              className="whitespace-nowrap"
            >
              {data.nav.about}
            </Typography>
          </Link>
          <Link ref={text4Ref} href="/contact" onClick={handdleClose}>
            <Typography
              type={TYPOGRAPHY_TYPE.TEXT}
              as={TYPOGRAPHY_TYPE.HEADING3}
              className="whitespace-nowrap"
            >
              {data.nav.contact}
            </Typography>
          </Link>
        </nav>
      </div>
      <div className="fixed right-10 top-y-default z-[100] -translate-y-1/2 sm:right-x-default sm:translate-x-10">
        <div
          onClick={() => (isOpen ? handdleClose() : handdleOpen())}
          onMouseMove={(e) => useMagnet(e, 1)}
          onMouseOut={(e) => useResetMagnet(e)}
          className={clsx(
            isOpen ? 'border-white bg-black' : 'border-black bg-white',
            'group flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border transition-colors sm:h-20 sm:w-20',
          )}
        >
          <div
            className="flex h-full w-full items-center justify-center"
            onMouseMove={(e) => useMagnet(e, 0.4)}
            onMouseOut={(e) => useResetMagnet(e)}
          >
            <div className="flex h-3 w-8 flex-col items-end justify-between">
              <div
                className={clsx(
                  'h-[2px] rounded-full transition-all duration-300',
                  isOpen ? 'w-full translate-y-[5px] rotate-45 bg-white' : 'w-full bg-black',
                )}
              ></div>
              <div
                className={clsx(
                  'h-[2px] rounded-full transition-all duration-300',
                  isOpen
                    ? 'w-full -translate-y-[5px] -rotate-45 bg-white'
                    : 'w-2/3 bg-black group-hover:w-full',
                )}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Burger;
