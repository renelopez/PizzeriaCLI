import React from 'react';
import Link from 'next/link';

export default () =>(
  <div>
    <Link href='/'><a>Index</a></Link>
    <Link href='/about'><a>About</a></Link>
  </div>
);
