export interface Album {
  slug: string;
  title: string;
  label: string;
  releaseDate: string;
}

export const albums: Album[] = [
  {
    slug: 'hymns-and-fiery-dances',
    title: 'Hymns and Fiery Dances',
    label: 'Motor Music',
    releaseDate: '2025-08-22',
  },
  { slug: 'ninos-del-sol', title: 'Ni\u00F1os Del Sol', label: 'S/R', releaseDate: '2018-04-20' },
  { slug: 'under-the-gun', title: 'Under The Gun', label: 'S/R', releaseDate: '2014-05-19' },
  {
    slug: 'live-at-clap-of-thunder',
    title: 'Live at Clap of Thunder',
    label: 'S/R',
    releaseDate: '2012-06-06',
  },
];
