import Link from "next/link";
import React from "react";

const BackButton = ({ className }) => {
  return (
    <Link href={"/profile"} className={className}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 512 512"
        height="30px"
        width="30px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={32}
          d="M249.38 336 170 256l79.38-80m-68.35 80H342"
        />
        <path
          fill="none"
          strokeMiterlimit={10}
          strokeWidth={32}
          d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
        />
      </svg>
    </Link>
  );
};

export default BackButton;
