export interface metaDataItemT {
  title: string;
  description: string;
  ogImage: string;
}

export interface metaDataT {
  [property: string]: metaDataItemT;
}

export default {
  index: {
    title: 'Anton Danilov | Deviun Superhero',
    description: 'Page about Danilov Anton.',
    ogImage: '/static/images/DSC_0158-2.jpg',
  },
  music: {
    title: 'iTunes collections',
    description: 'The best iTunes collections. Each of playlist is collection of emotions. In strange playlist names I hiding my stories that I can not tell public, and music is soundtrack.',
    ogImage: '/static/images/music-cover.jpg',
  },
  developer: {
    title: 'Developer Anton Danilov | JS Developer',
    description: 'Anton Danilov. Software engineer. Read about my experience!',
    ogImage: '/static/images/developer-cover.jpg',
  },
} as metaDataT;
