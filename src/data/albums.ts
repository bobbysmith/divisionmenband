import { albums as s } from './slugs';

export interface Album {
  slug: string;
  title: string;
  label: string;
  releaseDate: string;
}

export const albums: Album[] = [
  {
    slug: s.HYMNS,
    title: 'Hymns and Fiery Dances',
    label: 'Motor Music',
    releaseDate: '2025-08-22',
  },
  { slug: s.NINOS, title: 'Ni\u00F1os Del Sol', label: 'S/R', releaseDate: '2018-04-20' },
  { slug: s.GUN, title: 'Under The Gun', label: 'S/R', releaseDate: '2014-05-19' },
  {
    slug: s.THUNDER,
    title: 'Live at Clap of Thunder',
    label: 'S/R',
    releaseDate: '2012-06-06',
  },
];