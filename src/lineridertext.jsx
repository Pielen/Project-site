import adamPic from './assets/adam.jpg';
import erikPic from './assets/erik.jpg';
import fredrikPic from './assets/linerider/members/fredrik.jpg';
import johanPic from './assets/linerider/members/johan.jpg';
import gustavPic from './assets/linerider/members/gustav.png';
import marcusPic from './assets/linerider/members/marcus.jpg';
import screenshot1 from './assets/linerider/linerider1.jpg';
import screenshot2 from './assets/linerider/linerider2.png';
import screenshot3 from './assets/linerider/linerider3.jpg';


export const LINETEAM = [
  {
    name: 'Adam Pielbusch',
    picture: adamPic,
    email: 'adampi@kth.se',
    linkedin: 'https://www.linkedin.com/in/adam-pielbusch-b28026140/',
    github: 'https://github.com/Pielen',
    blog: '',
    contribution: ['Early ARKit testing', 'Webmaster', 'Video editing'],
  },
  {
    name: 'Erik Lindbom',
    picture: erikPic,
    email: 'elindbom@kth.se',
    linkedin: 'https://www.linkedin.com/in/erik-lindbom-42585913a',
    github: 'https://github.com/elindbom',
    blog: '',
    contribution: ['Design/creation of Character and Logo', 'Special effects - animation/vibration', 'Sound and game programming'],
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
    contribution: ['AR integration/interaction', 'Game mechanics/programming', 'Actor/camera man for the video'],
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

{/*
Goal and motivation of the project
Explanation and Justification of the graphics and interaction technologies used and developed
Obstacles
Related work
"Making of" documentary (2 minutes)
Demo Reel (30 seconds)
*/}


export const ABOUT = [
  {
    title: 'What?',
    text: 'Kälk-Nisse is basically Linerider, but in AR. Draw lines on a normal piece of paper and see on your phone how ' +
    ' Kälk-Nisse slides on the line that you drew. If you haven´t checked out Linerider you can do that ',
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
    text: 'Kälk-Nisse is developed in Unity with the ARKit plugin. A lot of time has been spent on developing a line recognition ' +
    'algorithm. As this isn´t something that comes included with the ARKit we had to develop this from the ground. In short we look ' +
    'for any pixel that is not white and from this pixel we search for connecting non-white pixels and do so untill we have a line.',
  },
  {
    title: 'Challenges and lessons learned',
    text: 'The main focus on this project has been the advanced interaction aspect. As the core of the ' +
    'application is built on something we had to develop entirely on our own most of the challenges also came with that. ' +
    'It might seem trivial to find a line on a piece of paper. The human eyes does it in a matter of milli seconds and  ' +
    'the task is very straight forward. For a computer it´s not as easy. You have to make up rules for where to look, how to look ' +
    'and how to connect what you have seen to what you will see.',
    listtext: ['Mixing different technologies takes time.',
    'You better think twice before implementing your own image recognition algorithm as it´s crucial that is´s responsive',
    'We deepened our knowledge of Unity programming']
  },
  {
    title: 'Reactions',
    list: true,
    listtext: ['"I miss the good ol´ days of Line rider!"', '"I really like the idea!"',
    '"I don´t get it, it´s just a man sliding on a line."']
  }
];

export const IMAGES = [
  {
    original: screenshot2,
    thumbnail: screenshot2,
    description: "Kälk-nisse",
  },
  {
    original: screenshot3,
    thumbnail: screenshot3,
    description: "Open house @ VIC",
  },
  {
    original: screenshot1,
    thumbnail: screenshot1,
    description: "Development",
  },
]
