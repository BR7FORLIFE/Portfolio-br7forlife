//about.astro
interface Description {
    content: string;
}

//about.astro
export interface StructureExperience {
    title: string;
    dateOfWork: string;
    description: Description[];
}

//header.astro
export interface NavBar {
    id: string;
    label: string;
}

interface SocialMediaImages {
    src: string;
    alt: string;
    class: string;
}

export interface SocialMediaAnchors {
    href: string;
    images: SocialMediaImages
}

// main.astro
export interface Phrases {
    paragraph: string;
}
