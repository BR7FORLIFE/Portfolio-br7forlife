import CardProject from "./ui/CardProject"
import { projects } from "../content/projects"

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