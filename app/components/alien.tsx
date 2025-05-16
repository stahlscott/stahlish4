'use client'

import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export const Alien = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('y2k')
    } else if (theme === 'y2k') {
      setTheme('light')
    }
  }

  return (
    <Image
      src={`${process.env.BASE_URL}/assets/dancing-alien.gif`}
      alt="theme"
      width={20}
      height={20}
      onClick={handleClick}
    />
  )
}
