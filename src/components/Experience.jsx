import { experience } from "../content/experience";
import { ExperienceCard } from "./ui/experience-card";

function Experience() {
  return (
    <section id="experience" className="w-full h-auto px-6 md:px-12 lg:px-20 flex flex-col gap-8">
      <div className="font-Geist text-4xl border-l-4 border-black pl-4 font-semibold">
        Experiencia
      </div>
      <article className="flex flex-col gap-12">
        {experience.map(({ id, title, organization, date, description }) => {
          return (
            <ExperienceCard
              key={id}
              title={title}
              organization={organization}
              date={date}
              descriptions={description}
            />
          );
        })}
      </article>
    </section>
  );
}

export default Experience;
