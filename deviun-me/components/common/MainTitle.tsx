import React, { ReactNode } from 'react';

import TitleCenter from './TitleCenter';
import Padding from './Padding';

interface MainTitlePropsT {
  children: ReactNode;
}

export default function MainTitle({
  children,
}: MainTitlePropsT) {
  return (
    <Padding
      top="50px"
      bottom="30px"
    >
      <TitleCenter>
        {children}
      </TitleCenter>
    </Padding>
  );
}
