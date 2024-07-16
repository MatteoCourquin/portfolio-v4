import clsx from 'clsx';

export const IconArrowTopRight = ({
  color = 'white',
  className,
}: {
  color?: 'black' | 'white';
  className?: string;
}) => (
  <svg
    className={clsx(`bg-${color}`, className)}
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="24.1133" y1="0.817627" x2="24.1133" y2="23.4679" stroke="white" stroke-width="3" />
    <line x1="22.6133" y1="2.31763" x2="0.641182" y2="2.31763" stroke="white" stroke-width="3" />
    <line
      y1="-1.5"
      x2="31.0646"
      y2="-1.5"
      transform="matrix(-0.700005 0.714138 -0.700005 -0.714138 22.6133 1.5083)"
      stroke="white"
      strokeWidth="3"
    />
  </svg>
);
