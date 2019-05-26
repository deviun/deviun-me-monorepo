import React from 'react';
import styled from 'styled-components';

interface SocialNetworkItemT {
  svgPath: string;
  link: string;
  target?: string;
}

interface SocialNetworksPropsT {
  items: SocialNetworkItemT[];
}

const SocialNetworkStyled = styled.div`
  text-align: center;
  padding: 80px 0px;

  img {
    margin: 0px 15px;
    width: 45px;
  }
`;

export default function SocialNetworks({
  items = [],
}: SocialNetworksPropsT) {
  return (
    <SocialNetworkStyled>
      {
        items.map((item) => (
          <a
            href={item.link}
            target={item.target || '_blank'}
          >
            <img src={item.svgPath} />
          </a>
        ))
      }
    </SocialNetworkStyled>
  );
}
