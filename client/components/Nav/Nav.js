import React from 'react';
import Link from 'next/link';
import Button from '../Button/Button';
import './Nav.css';

export default () =>(
  <nav>
    <Link href='/' passHref><Button>Index</Button></Link>
    <Link href='/about' passHref><Button>About</Button></Link>
  </nav>
);
