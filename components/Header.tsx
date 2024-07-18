import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Header = () => {
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const text4Ref = useRef(null);
  const timelineRef = useRef(gsap.timeline({ paused: true }));

  const playAnimation = () => {
    if (!text1Ref.current || !text2Ref.current || !text3Ref.current || !text4Ref.current) return;

    timelineRef.current
      .add(
        gsap.to([text1Ref.current, text2Ref.current, text3Ref.current, text4Ref.current], {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power4.inOut',
          stagger: 0.1,
        }),
        2,
      )
      .play();
  };

  useEffect(() => {
    playAnimation();
  }, []);

  return (
    <header className="absolute left-0 top-0 z-[99] flex h-20 w-screen items-center justify-center gap-8">
      <Link
        ref={text1Ref}
        className="link link_white -translate-y-4 text-xl font-medium uppercase opacity-0"
        href="/"
      >
        Home
      </Link>
      <Link
        ref={text2Ref}
        className="link link_white -translate-y-4 text-xl font-medium uppercase opacity-0"
        href="/projects"
      >
        Projects
      </Link>
      <Link
        ref={text3Ref}
        className="link link_white -translate-y-4 text-xl font-medium uppercase opacity-0"
        href="/about"
      >
        About
      </Link>
      <Link
        ref={text4Ref}
        className="link link_white -translate-y-4 text-xl font-medium uppercase opacity-0"
        href="/contact"
      >
        Contact
      </Link>
    </header>
  );
};

export default Header;
