import React from 'react';
import { Alien } from './alien';

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        // TODO: fix SVG not displaying
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0 text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all primary-link"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">rss</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all primary-link"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.youtube.com/@sleeperstomb"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">synthesizers</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all primary-link"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/stahlscott"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all primary-link"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/stahlscott/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">linkedin</p>
          </a>
        </li>
        <li>
          <a
            className="flex shrink items-center transition-all primary-link"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/stahlscott/stahlish4"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">view source</p>
          </a>
        </li>
      </ul>
      <div className="flex flex-row justify-between items-end">
        <p className="mt-8 secondary-text">
          © {new Date().getFullYear()} MIT Licensed
        </p>
        <Alien />
      </div>
    </footer>
  )
}
