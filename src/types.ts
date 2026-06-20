export interface Location {
    id: number;
    name: string;
    icon: string;
    kind: string;
    type?: string;
    fileType?: string;
    position?: string;
    windowPosition?: string;
    href?: string;
    imageUrl?: string;
    image?: string;
    subtitle?: string;
    description?: string[];
    children?: Location[];
}
