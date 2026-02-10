export interface Musician {
  name: string;
  knownFrom: string;
}

export const musicians: Musician[] = [
  { name: 'Peter Hayes', knownFrom: 'Black Rebel Motorcycle Club' },
  {
    name: 'Alain Johannes',
    knownFrom: 'Eleven, Them Crooked Vultures, Queens of the Stone Age, PJ Harvey',
  },

  { name: 'Rafael Gayol', knownFrom: 'Leonard Cohen' },
  { name: 'Leah Shapiro', knownFrom: 'Black Rebel Motorcycle Club' },
  { name: 'Jay Reynolds', knownFrom: 'Asleep at the Wheel' },
  {
    name: 'Rick G Nelson',
    knownFrom: 'Afghan Whigs, Twilight Singers, Polyphonic Spree, St. Vincent',
  },
  { name: 'Fredo Ortiz', knownFrom: 'Beastie Boys, Los Lobos' },

  { name: 'Beto Martinez', knownFrom: 'Grupo Fantasma' },
  { name: 'Barb Hunter', knownFrom: 'Afghan Whigs, Pigface' },
  { name: 'Dana Colley', knownFrom: 'Vapors of Morphine, Morphine' },
  { name: 'Asya Sorshneva', knownFrom: 'CocoRosie, Udo J\u00FCrgens' },
  { name: 'Roscoe Beck', knownFrom: 'Leonard Cohen, Robben Ford, Eric Johnson' },
  { name: 'Jacob Valenzuela', knownFrom: 'Calexico, Sergio Mendoza y la Orkestra' },
  {
    name: 'Eric Gorfain',
    knownFrom: 'Sam Phillips, Def Leppard, Queens of the Stone Age, Foo Fighters',
  },
];
