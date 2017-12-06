import adamPic from './assets/adam.jpg';
import erikPic from './assets/erik.jpg';
import eliasPic from './assets/elias.jpeg';

import screenshot1 from './assets/screenshot1.png';
import screenshot2 from './assets/screenshot2.png';
import saturnPic from './assets/saturn.png';

export const DOSTEAM = [
  {
    name: 'Adam Pielbusch',
    picture: adamPic,
    email: 'adampi@kth.se',
    linkedin: 'https://www.linkedin.com/in/adam-pielbusch-b28026140/',
    github: 'https://github.com/Pielen',
    blog: 'http://dh2650pielen.wordpress.com',
    contribution: ['Concept, much of the games core concept and story',
    'UI, most of the UI used in the game with corresponding game logic.',
    'Website, creator of this website',
    'GDD, author of the game design document',
    'General, presentations to the class and being active in the group'],
  },
  {
    name: 'Eduardo Rodes Pastor',
    picture: '',
    email: 'edrp@kth.se',
    linkedin: 'https://es.linkedin.com/in/erodes',
    github: '',
    blog: 'http://defenseofsaturn.blogspot.se',
    contribution: ['Did this', 'Did that', 'Also this'],
  },
  {
    name: 'Elias Lousseief',
    picture: eliasPic,
    email: 'elias.lousseief@gmail.com',
    linkedin: 'https://se.linkedin.com/in/elias-lousseief-7b997556',
    github: 'https://github.com/fast-reflexes',
    blog: 'http://www.collow.se',
    contribution: ['Investigated flame thrower, first person view and strategic grid structures.',
    'Implemented game over and player wins scene',
    'Participated in discussions around directions of development.'],
  },
  {
    name: 'Erik Lindbom',
    picture: erikPic,
    email: 'elindbom@kth.se',
    linkedin: 'https://www.linkedin.com/in/erik-lindbom-42585913a',
    github: 'https://github.com/elindbom',
    blog: 'https://computergamedesignbyerik.wordpress.com',
    contribution: ['Did this', 'Did that', 'Also this'],
  },
  {
    name: 'Jonatan Cöster',
    picture: '',
    email: 'jonatanc@kth.se',
    linkedin: '',
    github: '',
    blog: '',
    contribution: ['Modeled the turrets, bases and Saturn.',
    'Created the terrain and the "spawn portal".',
    'Built the intro and main menu scenes.',
    'Created the targeting systems for the turrets, as well as the laser beams.',
    'Created the background music and the laser sound, and added the other sound effects.',
    'Wrote a shader to simulate atmospheric scattering on Saturn.',
    'Added an easter egg.'],
  }
];

export const ABOUT = [
  {
    title: 'What?',
    text: 'Defence of Saturn is a competitive tower defence game. In order to beat your opponent you have to master ' +
    'your strategy as well as your mechanical skills. Build towers at strategical positions, control the minions attacking ' +
    'your opponent and much more.',
  },
  {
    title: 'Why?',
    text: 'E-sports is getting bigger and bigger, and we believe there is room for one more title on the market '+
    'that gives tower defence a place in the spotlight at big E-sport events.',
  },
  {
    title: 'How?',
    text: 'Defence of Saturn is built by 5 students for the course Computer Game Design (DH2650) at KTH, Stockholm. ' +
    'The game is created in Unity with most models being created in Maya.',
  }
];

export const IMAGES = [
  {
    original: screenshot2,
    thumbnail: screenshot2,
  },
  {
    original: screenshot1,
    thumbnail: screenshot1,
  },
  {
    original: saturnPic,
    thumbnail: saturnPic,
  }
]
