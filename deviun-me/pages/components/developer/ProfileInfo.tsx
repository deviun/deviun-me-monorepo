import React, { Fragment } from 'react';
import styled from 'styled-components';

interface labelItem {
  text: string;
  ageLabel: string;
}

interface ProfileInfoPropsT {
  name: string;
  age: number;
  position: string;
  labelList: labelItem[];
}

const MainInfoStyled = styled.div`
  color: #767676;

  b {
    color: black;
  }
`;

const LabelListStyled = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  margin-top: 25px;
`;

const AgeLabelStyled = styled.span`
  color: #767676;
`;

export default function ProfileInfo(props: ProfileInfoPropsT) {
  return (
    <Fragment>
      <MainInfoStyled><b>{props.name}, {props.age},</b> {props.position}</MainInfoStyled>
      <LabelListStyled>
        {
          props.labelList.map((item) => (
            <li>
              {item.text}
              <AgeLabelStyled>{item.ageLabel}</AgeLabelStyled>
            </li>
          ))
        }
      </LabelListStyled>
    </Fragment>
  );
}
