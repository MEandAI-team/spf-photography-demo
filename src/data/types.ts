export interface ImageData {
    id: string;
    src: string;
    alt: string;
    caption?: string;
    category: string;
    title: string;
    description: string;
    location?: string;
    date?: string;
    photographer?: string;
    settings?: {
        camera?: string;
        lens?: string;
        aperture?: string;
        shutter?: string;
        iso?: string;
    };
}
