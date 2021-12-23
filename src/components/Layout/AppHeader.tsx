import * as React from 'react';
import Link from 'next/link';

import {
  HeaderWrapper,
} from './Layout.styles';

const AppHeader = () => {
  return (

    <HeaderWrapper>
      <Link href="/" shallow={true}>
        <a className='LinkHome' title="Le Blog">Le Blog</a>
      </Link>

      <Link href="/category" shallow={true}>
        <a title="Catégories">Voir les catégories</a>
      </Link>
    </HeaderWrapper>
  );
};

export default AppHeader;
