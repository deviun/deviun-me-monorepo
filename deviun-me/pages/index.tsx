import React, { Fragment } from 'react';

import Cover from '../components/Cover';
import Head from './components/common/Head';
import HeaderCoverContent from './components/main/HeaderCoverContent';
import PhotoGrid from './components/main/PhotoGrid';
import MainTitle from './components/main/MainTitle';
import Description from './components/main/Description';
import PageWidthWrapper from './components/common/PagaWidthWrapper';
import SocialNetworks from './components/main/SocialNetworks';
import Notes from './components/main/Notes';

export default function mainPage() {
  return (
    <PageWidthWrapper
      maxWidth={1440}
    >
      <Head />
      <Cover
        image="/static/images/DSC_0158-2.jpg"
        color="black"
        height="850px"
        key="main"
      >
        <HeaderCoverContent />
      </Cover>
      <MainTitle>I am a superhero</MainTitle>
      <PhotoGrid grid={[
        ['/static/images/DSC_0006-4.jpg'],
        [
          '/static/images/anton-danilov-666032-unsplash.jpg',
          '/static/images/EbQx-8ZdOxg.jpg',
        ],
      ]} />
      <MainTitle>About</MainTitle>
      <Description>
        {` Основная моя деятельность — разработка веб-сервисов. Увлекся этим еще в 13 лет, в 17 переехал в Санкт-Петербург и с тех пор уже успел проработать в нескольких компаниях. **Узнать** больше…
        
        Помимо задротства одно время писал музыку, сейчас это происходит очень редко, послушать мои старания можно на soundcloud. А сейчас я активно коллекционирую музыку в iTunes. Открыть коллекции…

        Конечно, еще нельзя незаметить мой интерес к фотографиям. Здесь ничего серьезного, всего лишь одержимость образами людей.

        Если захотеть, со мной можно встретиться и пообщаться, всем нравится, и тебе советую. Часто люди получают новый опыт общения со мной! Ниже можешь найти мои соц.сети, где можно что-то со мной сделать — лайкнуть, написать или просто посмотреть.`}
      </Description>
      <SocialNetworks
        items={[
          {
            svgPath: '/static/images/social-network/vk.svg',
            link: 'https://vk.com/deviun',
          },
          {
            svgPath: '/static/images/social-network/soundcloud.svg',
            link: 'https://soundcloud.com/anton-deviun',
          },
          {
            svgPath: '/static/images/social-network/github.svg',
            link: 'https://github.com/deviun',
          },
          {
            svgPath: '/static/images/social-network/telegram.svg',
            link: 'https://t.me/deviun',
          },
          {
            svgPath: '/static/images/social-network/instagram.svg',
            link: 'https://instagram.com/adeviun',
          },
          {
            svgPath: '/static/images/social-network/unsplash.svg',
            link: 'https://unsplash.com/@deviun',
          },
          {
            svgPath: '/static/images/social-network/youtube.svg',
            link: 'https://www.youtube.com/channel/UCj1rgpTFk16H6nsktitCplQ',
          },
        ]}
      />
      <MainTitle>Notes</MainTitle>
      <Notes
        items={[
          {
            title: 'История: Начало',
            link: 'https://vk.com/wall-159364181_1',
            cover: 'https://pp.userapi.com/c845421/v845421151/118b5e/F5fhmiW6pbY.jpg'
          },
          {
            title: 'История: Часть ||',
            link: 'https://vk.com/wall-159364181_2',
            cover: 'https://pp.userapi.com/c840329/v840329126/742ff/hkwq83fYws4.jpg'
          },
          {
            title: 'День рождения в 2016. До переезда в Санкт-Петербруг.',
            link: 'https://vk.com/wall-159364181_3',
            cover: 'https://pp.userapi.com/c845323/v845323561/11bc52/izxtDQp80KQ.jpg'
          },
          {
            title: 'DEVIUN 2018',
            link: 'https://tgraph.io/DEVIUN-2018-12-07',
            cover: 'https://pp.userapi.com/c852036/v852036631/63ecd/BlP3eNr1xGA.jpg'
          },
        ]}
      />
    </PageWidthWrapper>
  );
}
