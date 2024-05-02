declare module "react-tiff-to-png" {
  export function getPNGfromFile(file: File): Promise<string[]>;
  export function getPNGfromBlob(blob: Blob): Promise<string[]>;
  export function getPNGfromURL(imageUrl: string): Promise<string[]>;
}
