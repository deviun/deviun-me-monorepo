import React from 'react';
import styled from 'styled-components';

import skillLevels from '../../constants/skill-levels';

export interface SkillItemT {
  imagePath: string;
  level: number;
}

interface SkillsListPropsT {
  data: SkillItemT[];
}

const SkillLevelStyled = styled.div`
  ${(props: {
    color: string;
    opacity?: string;
  }) => `
    margin: 20px 0;
    position: relative;
    display: inline-block;
    color: #${props.color};
    width: 0px;
    height: 0px;
    border-right: 100px solid transparent;
    border-bottom: 70px solid #${props.color};
    border-left: 100px solid transparent;
    transform: rotate(35deg) scale(0.15, 0.15);
    transition: 0.1s;
    opacity: ${props.opacity || '0.3'};

    &:before {
      border-bottom: 80px solid #${props.color};
      border-left: 30px solid transparent;
      border-right: 30px solid transparent;
      position: absolute;
      height: 0;
      width: 0;
      top: -45px;
      left: -65px;
      display: block;
      content: '';
      transform: rotate(-35deg);
    }

    &:after {
      position: absolute;
      display: block;
      color: #${props.color};
      top: 3px;
      left: -105px;
      width: 0px;
      height: 0px;
      border-right: 100px solid transparent;
      border-bottom: 70px solid #${props.color};
      border-left: 100px solid transparent;
      transform: rotate(-70deg);
      content: '';
    }
  `}
`;

const SkillsWrapper = styled.div`
  text-align: center;
`;

const SkillItem = styled.div`
  padding: 10px;
  display: inline-block;
  border-radius: 36px;
  transition: 0.1s;

  img {
    transition: 0.1s;
    max-height: 150px;
    margin: 20px;
    vertical-align: middle;
  }

  .skill-level {
    vertical-align: middle;
  }

  &:hover {
    background: #F7F7F7;
    box-shadow: 0 2px 4px 0 rgba(200,200,200,0.50);
    transform: scale(1.05, 1.05);

    img {
      opacity: 0.9;
    }

    .skill-level {
      transform: rotate(35deg) scale(0.3, 0.3);
      opacity:1;
    }
  }
`;

export default function SkillsList(props: SkillsListPropsT) {
  return (
    <SkillsWrapper>
      {
        props.data.map((skill) => (
          <SkillItem>
            <img src={skill.imagePath} />
            <SkillLevelStyled className="skill-level" color={skillLevels[skill.level]} />
          </SkillItem>
        ))
      }
    </SkillsWrapper>
  );
}
