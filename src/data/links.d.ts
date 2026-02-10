import type { ComponentType, SVGProps } from 'react';
export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;
export interface SocialLink {
    platform: string;
    url: string | null;
    icon?: IconComponent;
}
export declare const socialLinks: SocialLink[];
export interface VideoLink {
    title: string;
    embedUrl: string | null;
}
export declare const videoLinks: VideoLink[];
export interface AlbumLinks {
    spotify?: string;
    bandcamp?: string;
    apple?: string;
}
export declare const albumLinks: Record<string, AlbumLinks>;
//# sourceMappingURL=links.d.ts.map