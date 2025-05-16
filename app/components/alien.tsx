'use client'

import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import alien from 'public/assets/dancing-alien.gif'

export const Alien = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeSwitch = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else if (theme === 'light') {
      setTheme('y2k')
    } else {
      setTheme('dark')
    }
  }

  return (
    <button onClick={handleThemeSwitch} className="cursor-pointer" aria-label="click me :)">
      <Image
        src={alien}
        alt="theme"
        width={20}
        height={20}
      />
    </button>
  )
}
