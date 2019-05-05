import React, { Fragment } from 'react';

import Cover from '../components/Cover';
import Head from './components/common/Head';
import HeaderCoverContent from './components/main/HeaderCoverContent';

export default function mainPage() {
  return (
    <Fragment>
      <Head />
      <Cover
        image="/static/images/DSC_0158-2.jpg"
        height="850px"
      >
        <HeaderCoverContent />
      </Cover>
    </Fragment>
  );
}
