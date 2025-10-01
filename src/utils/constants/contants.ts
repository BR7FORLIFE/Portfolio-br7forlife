import type {
    StructureExperience,
    NavBar,
    Phrases,
    SocialMediaAnchors,
} from "@Utils/interfaces/interfaces";

//about.astro
export const structureExperience: StructureExperience[] = [
    {
        title: "Trainne en Elyon Yireh (Práctica), Cartagena",
        dateOfWork: "Febrero 2025",
        description: [
            {
                content:
                    "Implementación de Patrones de diseño y Patrones de Arquitectura en proyectos backend",
            },
            {
                content: "Sistemas Linux (Debian, Ubuntu) ",
            },
        ],
    },

    {
        title: "Desarrollo de Software - DistributorStore (4 íntegrantes aplicando principios SCRUM)",
        dateOfWork: "Junio 2025",
        description: [
            {
                content:
                    "Aplicativo web y mobile  orientado solucionar y facilitar el desarrollo de las pequeñas, medianas y grandes empresas dedicada a la oferta de productos a sus clientes de manera limpia y organizada.",
            },
            { content: "Implementacion de frontend con Angular" },
            {
                content:
                    "Bases de datos relacional (PostgreSQl, MySQl) y no relacional (MongoDB)",
            },
        ],
    },
];

//header.astro
export const navBar: NavBar[] = [
    { id: "#home", label: "Home" },
    { id: "#experience", label: "Experience" },
    { id: "#Ppoject", label: "Project" },
    { id: "#skills", label: "Skills" },
    { id: "#education", label: "Education" },
    { id: "#contact", label: "Contact" },
    { id: "#blog", label: "Blog" },
];

export const socialMediaAnchors: SocialMediaAnchors[] = [
    {
        href: "https://github.com/BR7FORLIFE",
        images: {
            src: "assets/github.svg",
            alt: "github icon",
            class: "size-8 animation",
        },
    },
    {
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=diazpachecobrayan@gmail.com",
        images: {
            src: "assets/gmail-logo.png",
            alt: "gmail icon",
            class: "size-8 animation",
        },
    },
    {
        href: "https://www.linkedin.com/in/brayan-diaz-pacheco",
        images: {
            src: "assets/linkedin.png",
            alt: "linkedin icon",
            class: "size-8 animation",
        },
    },
];

//Main.astro
export const phrases: Phrases[] = [
    {
        paragraph:
            "Si conocieramos la belleza de plasmar una buena idea, no tendriamos que replantearla dos veces.",
    },

    {
        paragraph:
            "Me gusta aprender desde la base, entendiendo cómo y por qué funciona la tecnología, soy persistente hasta dominar su uso y disfruto compartir lo aprendido.",
    },
];
