import React from 'react';
import styled from 'styled-components';

interface OpenSourceListPropsT {
  packages: {
    name: string;
    description: string;
    link: string;
  }[];
}

const PackageStyled = styled.div`
  text-align: center;
  color: #686868;
  max-width: 370px;
  display: inline-block;
  margin: 20px;
  vertical-align: top;

  h2 {
    color: black;
  }

  a {
    color: #2E88C7;
    display: block;
    margin: 10px;
  }
`;

const PackagesStyled = styled.div`
  text-align: center;
  margin-top: -50px;
`;

export default function OpenSourceList(props: OpenSourceListPropsT) {
  return (
    <PackagesStyled>
      {
        props.packages.map((packageItem) => (
          <PackageStyled>
            <h2>{packageItem.name}</h2>
            {packageItem.description}
            <a href={packageItem.link} target="_blank">open on github</a>
          </PackageStyled>
        ))
      }
    </PackagesStyled>
  );
}
