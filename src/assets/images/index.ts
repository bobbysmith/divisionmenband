import { albums as a, musicians as m } from '../../data/slugs';
import hymns from './albums/hymns-and-fiery-dances.jpg';
import thunder from './albums/live-at-clap-of-thunder.jpg';
import ninos from './albums/ninos-del-sol.jpg';
import gun from './albums/under-the-gun.jpg';
import heroMain from './hero/hero.jpg';
import alainJohannes from './musicians/alain-johannes.jpg';
import asyaSorshneva from './musicians/asya-sorshneva.jpg';
import barbHunter from './musicians/barb-hunter.jpg';
import betoMartinez from './musicians/beto-martinez.jpg';
import danaColley from './musicians/dana-colley.jpg';
import ericGorfain from './musicians/eric-gorfain.jpg';
import fredoOrtiz from './musicians/fredo-ortiz.jpg';
import jacobValenzuela from './musicians/jacob-valenzuela.jpg';
import jayReynolds from './musicians/jay-reynolds.jpg';
import lauraScarborough from './musicians/laura-scarborough.jpg';
import leahShapiro from './musicians/leah-shapiro.jpg';
import peterHayes from './musicians/peter-hayes.jpg';
import rafaelGayol from './musicians/rafael-gayol.jpg';
import rickGNelson from './musicians/rick-g-nelson.jpg';
import roscoeBeck from './musicians/roscoe-beck.jpg';
import photo1 from './press/1.jpg';
import photo2 from './press/2.jpg';
import photo3 from './press/3.jpg';
import photo4 from './press/4.jpg';
import photo5 from './press/5.jpg';
import photo6 from './press/6.jpg';

// =============================================================================
// Image Asset Registry
// =============================================================================

export interface ImageAsset {
  src: string;
  alt: string;
  description?: string;
  credit?: string;
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

export const heroImage: ImageAsset | null = {
  src: heroMain,
  alt: 'The Division Men',
};

// ---------------------------------------------------------------------------
// Album Covers  (keyed by slug to match Album data)
// ---------------------------------------------------------------------------

export const albumCovers: Record<string, ImageAsset | null> = {
  [a.HYMNS]: { src: hymns, alt: 'Hymns and Fiery Dances' },
  [a.NINOS]: { src: ninos, alt: 'Ninos del Sol' },
  [a.GUN]: { src: gun, alt: 'Under The Gun' },
  [a.THUNDER]: { src: thunder, alt: 'Live at Clap of Thunder' },
};

// ---------------------------------------------------------------------------
// Musician Photos  (keyed by slug)
// ---------------------------------------------------------------------------

export const musicianPhotos: Record<string, ImageAsset | null> = {
  [m.PETER_HAYES]: { src: peterHayes, alt: 'Peter Hayes' },
  [m.ALAIN_JOHANNES]: { src: alainJohannes, alt: 'Alain Johannes' },
  [m.LAURA_SCARBOROUGH]: { src: lauraScarborough, alt: 'Laura Scarborough' },
  [m.RAFAEL_GAYOL]: { src: rafaelGayol, alt: 'Rafael Gayol' },
  [m.LEAH_SHAPIRO]: { src: leahShapiro, alt: 'Leah Shapiro' },
  [m.JAY_REYNOLDS]: { src: jayReynolds, alt: 'Jay Reynolds' },
  [m.RICK_G_NELSON]: { src: rickGNelson, alt: 'Rick G Nelson' },
  [m.FREDO_ORTIZ]: { src: fredoOrtiz, alt: 'Fredo Ortiz' },
  [m.BETO_MARTINEZ]: { src: betoMartinez, alt: 'Beto Martinez' },
  [m.BARB_HUNTER]: { src: barbHunter, alt: 'Barb Hunter' },
  [m.DANA_COLLEY]: { src: danaColley, alt: 'Dana Colley' },
  [m.ASYA_SORSHNEVA]: { src: asyaSorshneva, alt: 'Asya Sorshneva' },
  [m.ROSCOE_BECK]: { src: roscoeBeck, alt: 'Roscoe Beck' },
  [m.JACOB_VALENZUELA]: { src: jacobValenzuela, alt: 'Jacob Valenzuela' },
  [m.ERIC_GORFAIN]: { src: ericGorfain, alt: 'Eric Gorfain' },
};

// ---------------------------------------------------------------------------
// Press Photos
// ---------------------------------------------------------------------------

export const pressPhotos: ImageAsset[] = [
  {
    src: photo1,
    alt: 'Caroline Rippy Portillo and J Spencer Portillo',
    description: '(L-R) Caroline Rippy Portillo, J Spencer Portillo',
    credit: 'Photo: Caroline Rippy Portillo',
  },
  {
    src: photo2,
    alt: 'J. Spencer Portillo and Caroline Rippy Portillo',
    description: '(L-R) J. Spencer Portillo, Caroline Rippy Portillo',
    credit: 'Photo: Casey Chumbley',
  },
  {
    src: photo3,
    alt: 'Caroline Rippy Portillo and J Spencer Portillo',
    description: '(L-R) Caroline Rippy Portillo, J Spencer Portillo',
    credit: 'Photo: Caroline Rippy Portillo',
  },
  {
    src: photo4,
    alt: 'Caroline Rippy Portillo and J Spencer Portillo',
    description: '(L-R) Caroline Rippy Portillo, J Spencer Portillo',
    credit: 'Photo: Caroline Rippy Portillo',
  },
  {
    src: photo5,
    alt: 'Caroline Rippy Portillo and J Spencer Portillo',
    description: '(L-R) Caroline Rippy Portillo, J Spencer Portillo',
    credit: 'Photo: Caroline Rippy Portillo',
  },
  {
    src: photo6,
    alt: 'Caroline Rippy Portillo and J Spencer Portillo',
    description: '(L-R) Caroline Rippy Portillo, J Spencer Portillo',
    credit: 'Photo: Caroline Rippy Portillo',
  },
];
