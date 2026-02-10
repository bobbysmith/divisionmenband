import { albumCovers, heroImage, pressPhotos } from '../assets/images';
import { albums } from '../data/albums';
import { albumLinks, socialLinks } from '../data/links';
import { musicians } from '../data/musicians';
import { translations } from '../i18n/translations';
import type { Locale, TranslationStrings } from '../i18n/types';
import { createZip } from './zip';

async function fetchAsBytes(url: string): Promise<Uint8Array> {
  const res = await fetch(url);
  return new Uint8Array(await res.arrayBuffer());
}

function extensionFrom(url: string): string {
  const match = url.match(/\.(jpe?g|png|webp|gif)/i);
  return match ? match[0] : '.jpg';
}

function getTranslation(locale: Locale): TranslationStrings {
  return translations[locale] ?? translations.en;
}

function buildInfoText(locale: Locale): string {
  const t = getTranslation(locale);
  const lines: string[] = [];
  const hr = '='.repeat(80);

  lines.push('THE DIVISION MEN');
  lines.push('Motor Music');
  lines.push('');
  lines.push(hr);
  lines.push('ABOUT');
  lines.push(hr);
  lines.push('');
  lines.push(t['about.text']);
  lines.push('');
  lines.push(hr);
  lines.push('BIOGRAPHY');
  lines.push(hr);
  lines.push('');
  lines.push(t['bio.p1']);
  lines.push('');
  lines.push(t['bio.p2']);
  lines.push('');
  lines.push(t['bio.p3']);
  lines.push('');
  lines.push(t['bio.p4']);
  lines.push('');
  lines.push(hr);
  lines.push('DISCOGRAPHY');
  lines.push(hr);
  lines.push('');
  for (const album of albums) {
    const date = new Date(album.releaseDate + 'T00:00:00');
    const formatted = new Intl.DateTimeFormat('en', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
    const links = albumLinks[album.slug];
    const urls = [links?.spotify, links?.bandcamp, links?.apple].filter(Boolean);
    lines.push(`${album.title} (${album.label}, ${formatted})`);
    for (const url of urls) {
      lines.push(`  ${url}`);
    }
  }
  lines.push('');
  lines.push(hr);
  lines.push('FEATURED MUSICIANS');
  lines.push(hr);
  lines.push('');
  for (const m of musicians) {
    lines.push(`${m.name} — ${m.knownFrom}`);
  }
  lines.push('');
  lines.push(hr);
  lines.push('LINKS');
  lines.push(hr);
  lines.push('');
  for (const link of socialLinks) {
    if (link.url) {
      lines.push(`${link.platform.padEnd(14)} ${link.url}`);
    }
  }
  lines.push('');
  lines.push(hr);
  lines.push('PHOTO CREDITS');
  lines.push(hr);
  lines.push('');
  for (let i = 0; i < pressPhotos.length; i++) {
    const photo = pressPhotos[i];
    if (photo.credit) {
      lines.push(`Photo ${i + 1}: ${photo.credit}`);
    }
  }
  lines.push('');

  return lines.join('\n');
}

export async function generatePressKit(locale: Locale = 'en'): Promise<Blob> {
  const encoder = new TextEncoder();
  const prefix = 'The Division Men Press Kit';
  const entries: { name: string; data: Uint8Array }[] = [];

  entries.push({
    name: `${prefix}/THE DIVISION MEN - Press Info.txt`,
    data: encoder.encode(buildInfoText(locale)),
  });

  for (let i = 0; i < pressPhotos.length; i++) {
    const photo = pressPhotos[i];
    const ext = extensionFrom(photo.src);
    entries.push({
      name: `${prefix}/photos/press-photo-${i + 1}${ext}`,
      data: await fetchAsBytes(photo.src),
    });
  }

  if (heroImage) {
    const ext = extensionFrom(heroImage.src);
    entries.push({
      name: `${prefix}/photos/hero${ext}`,
      data: await fetchAsBytes(heroImage.src),
    });
  }

  for (const album of albums) {
    const cover = albumCovers[album.slug];
    if (cover) {
      const ext = extensionFrom(cover.src);
      entries.push({
        name: `${prefix}/album-art/${album.slug}${ext}`,
        data: await fetchAsBytes(cover.src),
      });
    }
  }

  return createZip(entries);
}
