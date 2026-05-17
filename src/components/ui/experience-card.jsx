export function ExperienceCard({
  title,
  organization,
  date,
  descriptions = [],
}) {
  return (
    <section className="group relative w-full flex items-start pl-8 pb-10 last:pb-0 bg-white transition-colors duration-300">
      
      <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-neutral-200 group-last:hidden"></div>

      <div className="absolute -left-1.25 top-2 w-3 h-3 rounded-full bg-neutral-300 border-2 border-white equilibrium group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300 z-10"></div>

      <article className="w-full flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 w-full">
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold text-neutral-900 tracking-tight group-hover:text-blue-500 transition-colors duration-300">
              {title}
            </h1>
            <span className="text-sm font-medium text-neutral-600">
              {organization}
            </span>
          </div>
          <span className="text-xs font-medium text-neutral-400 sm:text-right sm:pt-1">
            {date}
          </span>
        </div>
        
        <ul className="flex flex-col gap-3">
          {descriptions.map(({ id, content }) => {
            return (
              <li 
                key={id} 
                className="relative pl-5 text-sm font-light text-neutral-600 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-2.25 before:w-1.5 before:h-1.5 before:bg-neutral-400 before:rounded-full group-hover:before:bg-neutral-600 before:transition-colors"
              >
                {content}
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
}