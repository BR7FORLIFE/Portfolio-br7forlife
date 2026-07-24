import { motion } from "framer-motion";

import { CustomTitle } from "./title/title";
import TechCard from "./ui/TechCard";

import {
  backendTech,
  frontendTech,
 databaseTech,
  devopsTech,
} from "../content/tech";

const sections = [
  {
    title: "Backend",
    technologies: backendTech,
  },
  {
    title: "Frontend",
    technologies: frontendTech,
  },
  {
    title: "Databases",
    technologies: databaseTech,
  },
  {
    title: "DevOps & Cloud",
    technologies: devopsTech,
  },
];

export default function Tech() {
  return (
    <section
      id="tech"
      className="
        w-full
        py-6
        px-6
        md:px-12
        lg:px-20
      "
    >
      <div className="max-w-6xl mx-auto">

        <CustomTitle
          content="Tech Stack"
          pos="LEFT"
        />

        <p className="mt-5 max-w-2xl text-neutral-500 leading-relaxed">
          Estas son las tecnologías con las que construyo aplicaciones,
          arquitecturas backend, sistemas cloud y soluciones de inteligencia
          artificial.
        </p>

        <div className="mt-16 space-y-14">

          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">

                <div className="h-px w-10 bg-neutral-300" />

                <h3
                  className="
                    uppercase
                    tracking-[0.25em]
                    text-xs
                    font-semibold
                    text-neutral-400
                  "
                >
                  {section.title}
                </h3>

              </div>

              <div className="flex flex-wrap gap-4">

                {section.technologies.map((tech) => (
                  <TechCard
                    key={tech.name}
                    {...tech}
                  />
                ))}

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}