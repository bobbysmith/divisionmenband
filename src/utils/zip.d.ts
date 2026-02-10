interface ZipEntry {
    name: string;
    data: Uint8Array;
}
export declare function createZip(entries: ZipEntry[]): Blob;
export {};
//# sourceMappingURL=zip.d.ts.map