import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import YMEvent from '../common/YMEvent';

import {
 mobileMediaProp,
} from '../../constants/style';

export interface SocialNetworkItemT {
  svgPath: string;
  link: string;
  target?: string;
  internal?: boolean;
  title: string;
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

interface ActiveTitleStyledPropsT {
  show: boolean | number;
}

const ActiveTitleStyled = styled.div`
  ${(props: ActiveTitleStyledPropsT) => `
    opacity: ${ props.show ? '1' : '0' };
  `}
  margin: 20px;
  position: absolute;
  left: 0px;
  right: 0px;
  margin-top: -50px;
  text-align: center;
  transition: 0.5s;

  span {
    background: black;
    color: white;
    padding: 15px;
    border-radius: 100px;
    font-size: 14px;
  }
`;

const LinkWrapper = styled.div`
  display: inline-block;
`;

export default function SocialNetworks({
  items = [],
}: SocialNetworksPropsT) {
  const [activeTitle, setActiveTitle] = useState('');
  const [showTitle, setShowTitle] = useState(false);

  return (
    <SocialNetworkStyled>
      <ActiveTitleStyled
        show={showTitle}
      >
        <span>
          {activeTitle}
        </span>
      </ActiveTitleStyled>
      {
        items.map((item) => (
          <LinkWrapper
            onMouseOver={() => {
              setActiveTitle(item.title);
              setShowTitle(true);
            }}
            onMouseOut={() => setShowTitle(false)}
          >
            {
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
                    onClick={() => YMEvent('goToSocialLink')}
                    target={item.target || '_blank'}
                  >
                    <img src={item.svgPath} />
                  </a>
                )
            }
          </LinkWrapper>
        ))
      }
    </SocialNetworkStyled>
  );
}
