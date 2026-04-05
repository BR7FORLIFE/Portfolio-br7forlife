function CardProject({ img, alt, topics = [], title, description, link }) {
    return (
        <section className="group mt-10 w-full max-w-md rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">

            <div className="overflow-hidden">
                <img 
                    src={img} 
                    alt={alt} 
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="p-5 flex flex-col gap-4">

                <div className="flex flex-wrap gap-2">
                    {topics.map((topic, index) => (
                        <span 
                            key={index}
                            className="text-xs px-2 py-1 rounded-md bg-neutral-100 text-neutral-700 tracking-tight"
                        >
                            {topic}
                        </span>
                    ))}
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold tracking-tight">
                        {title}
                    </h3>

                    <p className="text-sm text-neutral-600 leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="flex gap-4 mt-2">

                    {(link?.github || link?.web) ? (
                        <>
                            {link?.github && (
                                <a 
                                    href={link.github}
                                    target="_blank"
                                    className="text-sm font-medium text-black hover:text-blue-500 transition"
                                >
                                    GitHub →
                                </a>
                            )}

                            {link?.web && (
                                <a 
                                    href={link.web}
                                    target="_blank"
                                    className="text-sm font-medium text-black hover:text-purple-500 transition"
                                >
                                    Live →
                                </a>
                            )}
                        </>
                    ) : (
                        <span className="text-sm text-neutral-400 italic tracking-tight">
                            En desarrollo...
                        </span>
                    )}
                </div>
            </div>
        </section>
    )
}

export default CardProject
