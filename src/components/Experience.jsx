import { experience } from "../content/experience";
import { ExperienceCard } from "./ui/experience-card";
import { CustomTitle } from "./title/title";

function Experience() {
  return (
    <section
      id="experience"
      className="w-full h-auto px-6 md:px-12 lg:px-20 flex flex-col gap-8"
    >
      <CustomTitle content="Experiencia" />
      <article className="flex flex-col gap-12">
        {experience.map(({ id, title, organization, description }) => {
          return (
            <ExperienceCard
              key={id}
              title={title}
              organization={organization}
              descriptions={description}
            />
          );
        })}
      </article>
    </section>
  );
}

export default Experience;
