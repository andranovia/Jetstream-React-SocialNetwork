import { Link } from '@inertiajs/react';
import React from 'react';
import image from '../../../public/img/one.webp';

export default function AuthenticationCardLogo() {
  return (
    <Link href="/">
      <img src={image} alt="" className='w-[12rem] h-auto' />
    </Link>
  );
}
