import type { ComponentType, SVGProps } from 'react';

import { albums as a } from './slugs';

import {
  AppleMusic,
  Bandcamp,
  Facebook,
  IconGlobe,
  Instagram,
  MotorMusic,
  Reverbnation,
  SoundCloud,
  Spotify,
  Youtube,
} from '../assets/icons';

// ---------------------------------------------------------------------------
// Social / Web Presence
// ---------------------------------------------------------------------------

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface SocialLink {
  platform: string;
  url: string | null;
  icon?: IconComponent;
}

export const socialLinks: SocialLink[] = [
  {
    platform: 'Motor Music',
    url: 'https://motormusic.de/artists/the-division-men/',
    icon: MotorMusic,
  },
  { platform: 'divisionmen.com', url: 'https://www.divisionmen.com/', icon: IconGlobe },
  { platform: 'Facebook', url: 'https://www.facebook.com/divisionmen', icon: Facebook },
  { platform: 'Instagram', url: 'https://www.instagram.com/divisionmenband/', icon: Instagram },
  {
    platform: 'Reverbnation',
    url: 'https://www.reverbnation.com/thedivisionmen',
    icon: Reverbnation,
  },
  {
    platform: 'Bandcamp',
    url: 'https://divisionmen.bandcamp.com/album/hymns-and-fiery-dances',
    icon: Bandcamp,
  },
  { platform: 'SoundCloud', url: 'https://soundcloud.com/divisionmen', icon: SoundCloud },
  {
    platform: 'Spotify',
    url: 'https://open.spotify.com/artist/4e9RhlBFg4bhFtXZO99wrD',
    icon: Spotify,
  },
  {
    platform: 'Apple Music',
    url: 'https://music.apple.com/us/artist/the-division-men/941893636',
    icon: AppleMusic,
  },
  { platform: 'YouTube', url: 'https://youtube.com/@divisionmen5130', icon: Youtube },
];

// ---------------------------------------------------------------------------
// Video Embeds
// ---------------------------------------------------------------------------

export interface VideoLink {
  title: string;
  embedUrl: string | null;
}

export const videoLinks: VideoLink[] = [
  {
    title: 'The Night Calls',
    embedUrl: 'https://www.youtube.com/embed/T0D6Jwcnf7Q?si=Bmv0Z9QfF6TWcZfV',
  },
  {
    title: 'The Undertow',
    embedUrl: 'https://www.youtube.com/embed/bRBmuP-Ai6o?si=SKnTeeTulYoly7h0',
  },
  { title: 'San Saba', embedUrl: 'https://www.youtube.com/embed/czAyjJk4I4w?si=Usn8bDyIFQibW8aW' },
  { title: 'Leonora', embedUrl: 'https://www.youtube.com/embed/CSR6bpF6ADI?si=lbcQlVskqKxNzNvE' },
  {
    title: 'Heaven Knows Why',
    embedUrl: 'https://www.youtube.com/embed/EoFMrGA7FpY?si=rk9c3pdpJUbrI5-o',
  },
  {
    title: "Ol' Dirt Road",
    embedUrl: 'https://www.youtube.com/embed/lGNN-P1wHFI?si=qIg3BhlAK1ruU8j5',
  },
  { title: 'Criminal', embedUrl: 'https://www.youtube.com/embed/k1St_feRgcU?si=GILJKjWBXAbaHiwp' },
  { title: 'Prelude', embedUrl: 'https://www.youtube.com/embed/yhpwEgVZqTY?si=6oPRLTsS5e5FrrQM' },
  { title: 'Always', embedUrl: 'https://www.youtube.com/embed/akiJdM2X_-Q?si=UMdNi1DHhM3EeERp' },
  {
    title: 'Can I Sleep In Your Arms',
    embedUrl: 'https://www.youtube.com/embed/QP3lUgmcQjs?si=7D8rFIyANnTtk_W1',
  },
  {
    title: 'I Love You All The Time',
    embedUrl: 'https://www.youtube.com/embed/BqaD9QVp4wI?si=ApW2W-xl1sVN_Wb3',
  },
  {
    title: 'Marionette',
    embedUrl: 'https://www.youtube.com/embed/6xBLr53Hw9U?si=Mo8_iC9nUoYOrH2k',
  },
  {
    title: 'Dying To Get By',
    embedUrl: 'https://www.youtube.com/embed/DiuSIn6LDRE?si=TrU9B6ewnRJtXpst',
  },
];

// ---------------------------------------------------------------------------
// Album Streaming / Purchase Links
// ---------------------------------------------------------------------------

export interface AlbumLinks {
  spotify?: string;
  bandcamp?: string;
  apple?: string;
}

export const albumLinks: Record<string, AlbumLinks> = {
  [a.HYMNS]: {
    bandcamp: 'https://divisionmen.bandcamp.com/album/hymns-and-fiery-dances',
    spotify: 'https://open.spotify.com/album/1TOHnz9KUfyb70bOdIhgtS?si=POfb2EdyTEKIxFCUcovhmQ',
    apple: 'https://music.apple.com/us/album/hymns-and-fiery-dances/1818870484',
  },
  [a.NINOS]: {
    bandcamp: 'https://divisionmen.bandcamp.com/album/ni-os-del-sol',
    spotify: 'https://open.spotify.com/album/7dXvEZ199oaysvHvdbBUWb?si=Hi8qpPZjQ8qPO73EzhpaZQ',
    apple: 'https://music.apple.com/us/album/ni%C3%B1os-del-sol/1359859294',
  },
  [a.GUN]: {
    bandcamp: 'https://divisionmen.bandcamp.com/album/under-the-gun',
    spotify: 'https://open.spotify.com/album/0e5qnVLCPvhn39IhYO7HyI?si=ZQ5i5BhLSuue5MT44JPRaQ',
    apple: 'https://music.apple.com/us/album/under-the-gun/941893509',
  },
  [a.THUNDER]: {
    bandcamp: 'https://divisionmen.bandcamp.com/album/live-clap-of-thunder',
  },
};
