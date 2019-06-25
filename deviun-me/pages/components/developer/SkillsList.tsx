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
  }) => `
    margin: 50px 0;
    position: relative;
    display: block;
    color: #${props.color};
    width: 0px;
    height: 0px;
    border-right: 100px solid transparent;
    border-bottom: 70px solid #${props.color};
    border-left: 100px solid transparent;
    transform: rotate(35deg) scale(0.15, 0.15);

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

const SkillWrapperStyled = styled.div`
  padding: 10px;
  display: inline-block;
`;

export default function SkillsList(props: SkillsListPropsT) {
  return (
    <>
      {
        props.data.map((skill) => (
          <SkillWrapperStyled>
            <img src={skill.imagePath} />
            <SkillLevelStyled color={skillLevels[skill.level]} />
          </SkillWrapperStyled>
        ))
      }
    </>
  );
}
