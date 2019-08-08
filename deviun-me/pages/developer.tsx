import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import metaData from '../constants/meta-data';

import Head from '../components/common/Head';
import Cover from '../components/common/Cover';
import PageWidthWrapper from '../components/common/PageWidthWrapper';
import ProfileInfo from '../components/developer/ProfileInfo';
import Padding from '../components/common/Padding';
import MainTitle from '../components/common/MainTitle';
import CVBlock from '../components/developer/CVBlock';
import OpenSourceList from '../components/developer/OpenSourceList';
import SkillsList from '../components/developer/SkillsList';
import DeveloperCloud from '../components/developer/DeveloperCloud';

import { loadDeveloperProfile, DeveloperProfileT } from '../actions/developerProfile';
import { loadCVHistory, CVHistoryT } from '../actions/CVHistory';
import { loadOpenSourceList, OpenSourceListT } from '../actions/openSourceList';
import { loadSkillList, SkillListT } from '../actions/skillLists';

interface mapStateT {
  developerProfile: DeveloperProfileT;
  CVHistory: CVHistoryT;
  openSourceList: OpenSourceListT;
  skillList: SkillListT;
}

interface MusicPagePropsT {
  developerProfile: DeveloperProfileT;
  CVHistory: CVHistoryT['cv'];
  openSourceList: OpenSourceListT['projects'];
  skillList: SkillListT['skills'];
}

const AvatarStyled = styled.img`
  border-radius: 100%;
  width: 150px;
  height: 150px;
  border: 8px solid white;
  position: relative;
  top: -80px;
  box-shadow: 0 2px 4px 0 rgba(181,181,181,0.50);
`;

class MusicPage extends Component<MusicPagePropsT> {
  static async getInitialProps({ reduxStore }: any) {
    await Promise.all([
      loadDeveloperProfile(reduxStore.dispatch),
      loadCVHistory(reduxStore.dispatch),
      loadOpenSourceList(reduxStore.dispatch),
      loadSkillList(reduxStore.dispatch),
    ]);
    return {};
  }
  
  render() {
    const {
      developerProfile,
      CVHistory,
      openSourceList,
      skillList,
    } = this.props;
    return (
      <>
        <Head
          metaData={metaData['developer']}
        />
        <Cover
          image="/static/images/developer-cover.jpg"
          height="425px"
          mobileHeight="250px"
        />
        <PageWidthWrapper
          maxWidth={1100}
        >
          <Padding
            left="50px"
            right="50px"
            bottom="50px"
          >
            <AvatarStyled
              src={developerProfile.avatarUrl}
            />
            <DeveloperCloud />
            <ProfileInfo
              name={developerProfile.name}
              age={developerProfile.age}
              position={developerProfile.position}
              labelList={developerProfile.labelList}
            />
            <MainTitle>
              CV
            </MainTitle>
            <CVBlock
              data={CVHistory}
            />
            <MainTitle>Open Source</MainTitle>
            <OpenSourceList
              packages={openSourceList}
            />
            <MainTitle>Skills</MainTitle>
            <SkillsList
              data={skillList}
            />
          </Padding>
        </PageWidthWrapper>
      </>
    );
  }
}

const mapStateToProps = ({
  developerProfile,
  CVHistory,
  openSourceList,
  skillList,
}: mapStateT) => ({
    developerProfile,
    CVHistory: CVHistory.cv,
    openSourceList: openSourceList.projects,
    skillList: skillList.skills,
});

export default connect(mapStateToProps)(MusicPage);
