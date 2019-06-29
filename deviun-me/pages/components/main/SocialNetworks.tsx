import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import {
 mobileMediaProp,
} from '../../constants/style';

export interface SocialNetworkItemT {
  svgPath: string;
  link: string;
  target?: string;
  internal?: boolean;
}

export interface SocialNetworksPropsT {
  items: SocialNetworkItemT[];
}

const SocialNetworkStyled = styled.div`
  text-align: center;

  img {
    margin: 0px 15px;
    width: 45px;
    transition: 0.15s;
    cursor: pointer;

    &:hover {
      transform: scale(1.2, 1.2);
      opacity: 0.8;
    }

    @media(${mobileMediaProp}) {
      padding: 20px;
    }
  }
`;

export default function SocialNetworks({
  items = [],
}: SocialNetworksPropsT) {
  return (
    <SocialNetworkStyled>
      {
        items.map((item) => (
          item.internal
            ? (
              <Link
                href={item.link}
              >
                <img src={item.svgPath} />
              </Link>
            )
            : (
              <a
                href={item.link}
                target={item.target || '_blank'}
              >
                <img src={item.svgPath} />
              </a>
            )
        ))
      }
    </SocialNetworkStyled>
  );
}
