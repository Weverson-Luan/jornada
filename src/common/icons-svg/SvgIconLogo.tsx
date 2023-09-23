/* eslint-disable @typescript-eslint/ban-ts-comment */
/**
 * IMPORTS
 */
import * as React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg';

const SvgIconLogo = () => (
  <Svg
    // @ts-expect-error
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width={24}
    height={24}
    fill='none'
  >
    <Path fill='url(#a)' d='M0 0h150v150H0z' />
    <Defs>
      <Pattern id='a' width={1} height={1} patternContentUnits='objectBoundingBox'>
        <Use xlinkHref='#b' transform='scale(.00667)' />
      </Pattern>
      <Image
        xlinkHref='data:image/png;base64,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'
        id='b'
        width={150}
        height={150}
      />
    </Defs>
  </Svg>
);

/**
 * EXPORTS
 */
export { SvgIconLogo };
