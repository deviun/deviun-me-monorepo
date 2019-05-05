import React, { Fragment } from 'react';

import Cover from '../components/Cover';
import Head from './components/common/Head';
import HeaderCoverContent from './components/main/HeaderCoverContent';
import PhotoGrid from './components/main/PhotoGrid';
import MainTitle from './components/main/MainTitle';
import Description from './components/main/Description';

export default function mainPage() {
  return (
    <Fragment>
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
    </Fragment>
  );
}
