import { musicians as s } from './slugs';

export interface Musician {
  slug: string;
  name: string;
  knownFrom: string;
  url: string;
}

export const musicians: Musician[] = [
  {
    slug: s.PETER_HAYES,
    name: 'Peter Hayes',
    knownFrom: 'Black Rebel Motorcycle Club',
    url: 'https://en.wikipedia.org/wiki/Black_Rebel_Motorcycle_Club',
  },
  {
    slug: s.ALAIN_JOHANNES,
    name: 'Alain Johannes',
    knownFrom: 'Eleven, Them Crooked Vultures, Queens of the Stone Age, PJ Harvey',
    url: 'https://en.wikipedia.org/wiki/Alain_Johannes',
  },
  {
    slug: s.RAFAEL_GAYOL,
    name: 'Rafael Gayol',
    knownFrom: 'Leonard Cohen',
    url: 'https://en.wikipedia.org/wiki/Leonard_Cohen',
  },
  {
    slug: s.LEAH_SHAPIRO,
    name: 'Leah Shapiro',
    knownFrom: 'Black Rebel Motorcycle Club',
    url: 'https://en.wikipedia.org/wiki/Black_Rebel_Motorcycle_Club',
  },
  {
    slug: s.JAY_REYNOLDS,
    name: 'Jay Reynolds',
    knownFrom: 'Asleep at the Wheel',
    url: 'https://en.wikipedia.org/wiki/Asleep_at_the_Wheel',
  },
  {
    slug: s.RICK_G_NELSON,
    name: 'Rick G Nelson',
    knownFrom: 'Afghan Whigs, Twilight Singers, Polyphonic Spree, St. Vincent',
    url: 'https://en.wikipedia.org/wiki/The_Afghan_Whigs',
  },
  {
    slug: s.FREDO_ORTIZ,
    name: 'Fredo Ortiz',
    knownFrom: 'Beastie Boys, Los Lobos',
    url: 'https://en.wikipedia.org/wiki/Los_Lobos',
  },
  {
    slug: s.BETO_MARTINEZ,
    name: 'Beto Martinez',
    knownFrom: 'Grupo Fantasma',
    url: 'https://en.wikipedia.org/wiki/Grupo_Fantasma',
  },
  {
    slug: s.BARB_HUNTER,
    name: 'Barb Hunter',
    knownFrom: 'Afghan Whigs, Pigface',
    url: 'https://barbhuntercello.com/',
  },
  {
    slug: s.DANA_COLLEY,
    name: 'Dana Colley',
    knownFrom: 'Vapors of Morphine, Morphine',
    url: 'https://en.wikipedia.org/wiki/Morphine_(band)',
  },
  {
    slug: s.ASYA_SORSHNEVA,
    name: 'Asya Sorshneva',
    knownFrom: 'CocoRosie, Udo J\u00FCrgens',
    url: 'https://www.youtube.com/@asyasorsh',
  },
  {
    slug: s.ROSCOE_BECK,
    name: 'Roscoe Beck',
    knownFrom: 'Leonard Cohen, Robben Ford, Eric Johnson',
    url: 'https://en.wikipedia.org/wiki/Leonard_Cohen',
  },
  {
    slug: s.JACOB_VALENZUELA,
    name: 'Jacob Valenzuela',
    knownFrom: 'Calexico, Sergio Mendoza y la Orkestra',
    url: 'https://en.wikipedia.org/wiki/Calexico_(band)',
  },
  {
    slug: s.ERIC_GORFAIN,
    name: 'Eric Gorfain',
    knownFrom: 'Sam Phillips, Def Leppard, Queens of the Stone Age, Foo Fighters',
    url: 'https://www.ericgorfain.com/',
  },
  {
    slug: s.LAURA_SCARBOROUGH,
    name: 'Laura Scarborough',
    knownFrom: '',
    url: 'https://www.laurascarborough.com/',
  },
];
