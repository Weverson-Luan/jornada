/* eslint-disable @typescript-eslint/ban-ts-comment */
/**
 * IMPORTS
 */
import * as React from 'react';
import Svg, { Path, Defs, G, ClipPath } from 'react-native-svg';

const SvgIconClosed = () => (
  // @ts-expect-error
  <Svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none'>
    <G
      stroke='#1e1e1e'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      clipPath='url(#a)'
    >
      <Path d='M17.562 4.813 4.917 17.188M17.562 17.188 4.917 4.813' />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#1e1e1e' d='M0 0h22.48v22H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

/**
 * EXPORTS
 */
export { SvgIconClosed };
