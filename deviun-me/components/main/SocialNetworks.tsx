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

  .link-image {
    margin: 0px 15px;
    width: 45px;
    transition: 0.15s;

    &.external-link-img:hover {
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
  cursor: pointer;
  transition: 0.10s;

  .link-image, .link-title {
    display: inline-block;
    vertical-align: middle;
  }

  &.internal-link {
    margin: 0px 10px;
  }

  &.internal-link:hover {
    transform: scale(0.95, 0.95);
    opacity: 0.7;
  }

  @media(${mobileMediaProp}) {
    &.internal-link {
      margin: 0px;

      .link-title {
        width: 120px;
        text-align: left;
      }
    }
  }
`;

const InternalLinksBox = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

const LinkTitle = styled.span``;

export default function SocialNetworks({
  items = [],
}: SocialNetworksPropsT) {
  const [activeTitle, setActiveTitle] = useState('');
  const [showTitle, setShowTitle] = useState(false);
  const internalLinks = [];

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
        items.map((item) => {
          if (item.internal) {
            internalLinks.push(
              <LinkWrapper className="internal-link">
                <Link
                  href={item.link}
                >
                  <span>
                    <img src={item.svgPath} className="link-image" />
                    <LinkTitle className="link-title">{item.title}</LinkTitle>
                  </span>
                </Link>
              </LinkWrapper>
            );

            return null;
          }

          return (
            <LinkWrapper
              onMouseOver={() => {
                setActiveTitle(item.title);
                setShowTitle(true);
              }}
              onMouseOut={() => setShowTitle(false)}
            >
              <a
                href={item.link}
                onClick={() => YMEvent('goToSocialLink')}
                target={item.target || '_blank'}
              >
                <img src={item.svgPath} className="link-image external-link-img" />
              </a>
            </LinkWrapper>
          );
        })
      }
      <InternalLinksBox>
        {internalLinks}
      </InternalLinksBox>
    </SocialNetworkStyled>
  );
}
