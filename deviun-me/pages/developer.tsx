import React, { Fragment } from 'react';
import styled from 'styled-components';

import Head from './components/common/Head';
import Cover from './components/common/Cover';
import PageWidthWrapper from './components/common/PageWidthWrapper';

const AvatarStyled = styled.img`
  border-radius: 100%;
  width: 150px;
  height: 150px;
  border: 8px solid white;
  position: relative;
  top: -80px;
  left: 50px;
  box-shadow: 0 2px 4px 0 rgba(181,181,181,0.50);
`;

export default function MusicPage() {
  return (
    <Fragment>
      <Head
        title="Developer"
      />
      <Cover
        image="/static/images/annie-spratt-439326-unsplash.jpg"
        height="525px"
      />
      <PageWidthWrapper
        maxWidth={1440}
      >
        <AvatarStyled
          src="/static/images/developer-avatar.JPG"
        />
      </PageWidthWrapper>
    </Fragment>
  );
}
