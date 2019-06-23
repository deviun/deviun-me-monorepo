import React from 'react';
import styled from 'styled-components';

import Head from './components/common/Head';
import Cover from './components/common/Cover';
import PageWidthWrapper from './components/common/PageWidthWrapper';
import ProfileInfo from './components/developer/ProfileInfo';
import Padding from './components/common/Padding';
import MainTitle from './components/common/MainTitle';
import CVBlock from './components/developer/CVBlock';
import OpenSourceList from './components/developer/OpenSourceList';
import SkillsList from './components/developer/SkillsList';

const AvatarStyled = styled.img`
  border-radius: 100%;
  width: 150px;
  height: 150px;
  border: 8px solid white;
  position: relative;
  top: -80px;
  box-shadow: 0 2px 4px 0 rgba(181,181,181,0.50);
`;

export default function MusicPage() {
  return (
    <>
      <Head
        title="Developer"
      />
      <Cover
        image="/static/images/annie-spratt-439326-unsplash.jpg"
        height="525px"
      />
      <PageWidthWrapper
        maxWidth={1100}
      > 
        <Padding
          left="50px"
          right="50px"
        >
          <AvatarStyled
            src="/static/images/developer-avatar.JPG"
          />
          <ProfileInfo
            name="Anton Danilov"
            age={20}
            position="Software engineer"
            labelList={[
              {
                text: 'Coding since — 2012,',
                ageLabel: '13 y.o 😼',
              },
              {
                text: 'Job experience since — 2015,',
                ageLabel: '16 y.o 🚀',
              },
            ]}
          />
          <MainTitle>
            CV
          </MainTitle>
          <CVBlock
            data={[
              {
                dateRange: '2012 — 2015',
                text: [
                  'I learned to develop web services by cloning already popular social networks and sites. In the beginning I tried to clone interfaces with HTML, CSS and very simple JS. After learn PHP, tried to repeat backend features.',
                  'Cloned services: Facebook.com, VK.com, Telegram (with light end-to-end encryption). Childhood was funny =)',
                ],
              }, {
                dateRange: '2015 — 2016',
                text: [
                  'Era of the first cash. I got first offers to some projects. Those were telegram bots (games, services), blog for sports department of Kazakhstani, and API server for dating app on Node.js platform.',
                  'By the way, dating app had interesting tasks. Rating, integration with social network, algorithms to get random and unique people, integration with android and ios ecosystem (push-notifications, purchases) and very more. Most important for me was experience developing on Node.js, that became main for future work.',
                ],
              }, {
                dateRange: '2016 — 2017',
                text: [
                  'The beginning work in company with team. As junior full-stack JS Developer at document turnover product, responded to critical bugs. Later, developed new modules to handling documents. ',
                  'Got experience: respect for work and team.',
                ],
              },
            ]}
          />
          <MainTitle>Open Source</MainTitle>
          <OpenSourceList
            packages={[
              {
                name: 'just-mongo',
                description: 'Simple and fast wrapper for MongoDB.',
                link: 'https://github.com/deviun/just-mongo',
              }, {
                name: 'action-flow',
                description: 'Smart mutex manager.',
                link: 'https://github.com/deviun/action-flow',
              }, {
                name: 'datadog-logger',
                description: 'Logger via DataDog',
                link: 'https://github.com/deviun/datadog-logger',
              }
            ]}
          />
          <MainTitle>Skills</MainTitle>
          <SkillsList
            data={[
              {
                imagePath: '/static/images/skills/docker.svg',
                level: 2,
              },{
                imagePath: '/static/images/skills/golang.svg',
                level: 1,
              },{
                imagePath: '/static/images/skills/mongodb.svg',
                level: 2,
              },{
                imagePath: '/static/images/skills/mysql.svg',
                level: 2,
              },{
                imagePath: '/static/images/skills/nextjs.svg',
                level: 1,
              },{
                imagePath: '/static/images/skills/nodejs.svg',
                level: 3,
              },{
                imagePath: '/static/images/skills/reactjs.svg',
                level: 2,
              },{
                imagePath: '/static/images/skills/redis.svg',
                level: 3,
              },{
                imagePath: '/static/images/skills/ts.svg',
                level: 2,
              },
            ]}
          />
        </Padding>
      </PageWidthWrapper>
    </>
  );
}
