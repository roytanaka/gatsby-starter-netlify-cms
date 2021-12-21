import React from 'react';
import { Global, css } from '@emotion/react';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

const customStyles = css({
  body: {
    ...tw`antialiased`,
  },
  'section.container': {
    ...tw`prose max-w-5xl mx-auto mt-8 px-4`,
    '& h1': {
      ...tw`font-light text-6xl mb-4`,
    },
  },
  p: {
    ...tw`max-w-prose`,
  },
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
