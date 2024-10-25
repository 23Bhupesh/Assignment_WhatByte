// components/Header.js
import Image from 'next/image';
export default function Header() {
    return (
      <header className="w-full flex justify-between p-4 bg-white shadow border">
        <div className='flex'>
          <Image src="/images/logo.jpeg" alt="Logo" width={40} height={50} />
          <div className="text-3xl font-bold">WhatBytes</div>
        </div>
        <div className="flex items-center shadow border p-1 rounded-lg">
          <Image
            src="/images/profile.png" alt="Profile" width={300} height={5}
            className="w-8 h-8 rounded-full"
          />
          <span className="ml-2 font-semibold">Rahil Siddique</span>
        </div>
      </header>
    );
  }
  