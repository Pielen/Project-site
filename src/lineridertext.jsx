import adamPic from './assets/adam.jpg';
import erikPic from './assets/erik.jpg';
import fredrikPic from './assets/fredrik.jpg';
import johanPic from './assets/johan.jpg';
import gustavPic from './assets/gustav.png';
import marcusPic from './assets/marcus.jpg';

export const LINETEAM = [
  {
    name: 'Adam Pielbusch',
    picture: adamPic,
    email: 'adampi@kth.se',
    linkedin: 'https://www.linkedin.com/in/adam-pielbusch-b28026140/',
    github: 'https://github.com/Pielen',
    blog: '',
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
    picture: fredrikPic,
    email: 'fspansk@kth.se',
    linkedin: 'https://www.linkedin.com/in/fredrik-spansk-01512451/',
    github: 'https://github.com/fspansk',
    blog: '',
    contribution: ['Image recognition', 'Image processing'],
  },
  {
    name: 'Gustav Fridh',
    picture: gustavPic,
    email: 'gfridh@kth.se',
    linkedin: 'https://www.linkedin.com/in/gustav-fridh-909a1b11b/',
    github: 'https://github.com/gfridh',
    blog: '',
    contribution: ['Image recognition', 'Image processing'],
  },
  {
    name: 'Johan Thorell',
    picture: johanPic,
    email: 'jthorel@kth.se',
    linkedin: 'https://www.linkedin.com/in/johan-torell-13253314b/',
    github: 'https://github.com/jthorel',
    blog: '',
    contribution: ['AR integration/interaction', 'Game mechanics/programming'],
  },
  {
    name: 'Marcus Frisell',
    picture: marcusPic,
    email: 'mfrisell@kth.se',
    linkedin: 'https://www.linkedin.com/in/marcusfrisell/',
    github: 'https://github.com/mfrisell',
    blog: '',
    contribution: ['Image processing', 'UI'],
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
