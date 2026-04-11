import CardProject from "./ui/CardProject"

const projects = [
    {
        image: {
            img: './projects/br7-marketplace.png',
            alt: 'imagen del proyecto backend marketplace'
        },
        topics: ['Flux', 'Security', 'Reactive', 'Spring', 'Backend'],
        title: 'BR7-MARKETPLACE-BACKEND',
        description: 'Un proyecto reactivo en spring que desarrolla un modelo de negocio e-commerce, con diseño de distemas escalables y distribuido.',
        link: {
            github: 'https://github.com/BR7FORLIFE/BR7-MARKETPLACE-BACKEND',
            web: 'https://br7-marketplace-backend.onrender.com/api/status'
        }
    },
    {
        image: {
            img: './projects/la-fragancia.png',
            alt: 'imagen del proyecto la fragancia'
        },
        topics: ['Production', 'Frontend', 'Astro', 'Business Logic'],
        title: 'La fragancia JM',
        description: 'Una Landing Page para un cliente para mostrar sus perfumes. Hecha con Astro y implementacion con las nuevas tecnologias como los Astro collections.',
        link: {
            github: 'https://github.com/BR7FORLIFE/lafraganciajm',
            web: 'https://lafragancia.store/es'
        }
    },
    {
        image: {
            img: './projects/districore.png',
            alt: 'imagen del proyecto districore'
        },
        topics: ['Spring', 'DevOps', 'Clean Code', 'Cloud', 'Backend'],
        title: 'DISTRICORE',
        description: 'Una inciativa para ayudar a las grandes y medianas distribuidoras para su flujo de negocios. Como lo es el manejo de preventistas, pedidos, rutas y tiendas, de una forma centralizada y escalable.',
        link: {
            github: '',
            web: ''
        }
    },
    {
        image: {
            img: './projects/kafka-ollama.png',
            alt: 'imagen del proyecto kafka ollama'
        },
        topics: ['Spring', 'Ollama', 'Kafka', 'WebSockets', 'Backend'],
        title: 'ChatBot con IA con cola de mensajes',
        description: 'Aplicación backend reactiva que utiliza WebSockets para comunicación en tiempo real y Apache Kafka como sistema de mensajería distribuida, permitiendo procesar solicitudes de chat de forma desacoplada, escalable y resiliente con un modelo en local de ollama.',
        link: {
            github: 'https://github.com/BR7FORLIFE/BackendProjects/tree/main/IA-Websockets',
            web: ''
        }
    },
]

function Projects(){
    return (
        <section id="projects" className="w-full h-auto px-6 md:px-12 lg:px-20">

            <div className="max-w-2xl flex flex-col gap-4">
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                    Lo que he construido
                </h1>

                <p className="text-neutral-600 leading-relaxed">
                    Más allá de palabras, estos proyectos muestran lo que puedo hacer.
                    <br className="hidden sm:block" />
                    Explora cada uno y descubre el proceso detrás.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {projects.map(({ image, topics, title, description, link }, index) => (
                    <CardProject
                        key={index}
                        img={image.img}
                        alt={image.alt}
                        topics={topics}
                        title={title}
                        description={description}
                        link={link}
                    />
                ))}

            </div>

        </section>
    )
}

export default Projects