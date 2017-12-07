import adamPic from './assets/adam.jpg';
import erikPic from './assets/erik.jpg';

import avatar from './assets/avatar.png';


export const LINETEAM = [
  {
    name: 'Adam Pielbusch',
    picture: adamPic,
    email: 'adampi@kth.se',
    linkedin: 'https://www.linkedin.com/in/adam-pielbusch-b28026140/',
    github: 'https://github.com/Pielen',
    blog: 'http://dh2650pielen.wordpress.com',
    contribution: ['Did this', 'Did that', 'Also this'],
  },
  {
    name: 'Erik Lindbom',
    picture: erikPic,
    email: 'elindbom@kth.se',
    linkedin: 'https://www.linkedin.com/in/erik-lindbom-42585913a',
    github: 'https://github.com/elindbom',
    blog: '',
    contribution: ['Did this', 'Did that', 'Also this'],
  },
  {
    name: 'Fredrik Spansk',
    picture: avatar,
    email: '',
    linkedin: '',
    github: '',
    blog: '',
    contribution: ['Did this', 'Did that', 'Also this'],
  },
  {
    name: 'Gustav Fridh',
    picture: avatar,
    email: '',
    linkedin: '',
    github: '',
    blog: '',
    contribution: ['Did this', 'Did that', 'Also this'],
  },
  {
    name: 'Johan Thorell',
    picture: avatar,
    email: '',
    linkedin: '',
    github: '',
    blog: '',
    contribution: ['Did this', 'Did that', 'Also this'],
  },
  {
    name: 'Marcus Frisell',
    picture: avatar,
    email: '',
    linkedin: '',
    github: '',
    blog: '',
    contribution: ['Did this', 'Did that', 'Also this'],
  }
];


export const ABOUT = [
  {
    title: 'What?',
    text: 'Kälk-Nisse is basically Linerider, but in AR. If you haven´t checked out Linerider you can do that ',
    link: 'https://www.linerider.com/',
    linktext: 'here!',
  },
  {
    title: 'Why?',
    text: 'Linerider is considered as one of the most important games in history. The rumor has it that the game have ' +
    'single handedly saved millions of kids from being bored in school. Hence we felt it was of great importance to adopt it '+
    'to the modern world with AR.',
  },
  {
    title: 'How?',
    text: 'Kälk-Nisse is developed in Unity with the AR kit plugin. A lot of time has been spent on developing a line recognition ' +
    'algorithm. ',
  }
];
