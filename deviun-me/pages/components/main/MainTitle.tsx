import React, { ReactNode } from 'react';

import TitleCenter from '../common/TitleCenter';
import Padding from '../common/Padding';

interface MainTitlePropsT {
  children: ReactNode;
}

export default function MainTitle({
  children,
}: MainTitlePropsT) {
  return (
    <Padding
      top="50px"
      bottom="50px"
    >
      <TitleCenter>
        {children}
      </TitleCenter>
    </Padding>
  );
}
