import hymns from './albums/hymns-and-fiery-dances.jpg';
import thunder from './albums/live-at-clap-of-thunder.jpg';
import ninos from './albums/ninos-del-sol.jpg';
import gun from './albums/under-the-gun.jpg';
import heroMain from './hero/hero.jpg';
import photo1 from './photos/1.jpg';
import photo2 from './photos/2.jpg';
import photo3 from './photos/3.jpg';
import photo4 from './photos/4.jpg';
import photo5 from './photos/5.jpg';
import photo6 from './photos/6.jpg';

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
  'hymns-and-fiery-dances': { src: hymns, alt: 'Hymns and Fiery Dances' },
  'ninos-del-sol': { src: ninos, alt: 'Ninos del Sol' },
  'under-the-gun': { src: gun, alt: 'Under The Gun' },
  'live-at-clap-of-thunder': { src: thunder, alt: 'Live at Clap of Thunder' },
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
