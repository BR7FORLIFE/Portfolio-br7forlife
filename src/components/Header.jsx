function Header() {
    return (
        <header className="w-full border-b border-neutral-200 bg-white/80 backdrop-blur sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-20 flex items-center justify-between">

                <div className="flex flex-col leading-tight">
                    <h2 className="font-semibold font-permanent text-lg tracking-tight">
                        Bryan Diaz P
                    </h2>
                    <span className="text-sm text-neutral-500">
                        Fullstack Developer
                    </span>
                </div>

                <nav className="hidden md:block">
                    <ul className="flex items-center gap-10 text-sm font-medium tracking-tight">
                        <li>
                            <a href="#projects" className="hover:text-blue-500 transition">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#experience" className="hover:text-blue-500 transition">
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href="#tech" className="hover:text-blue-500 transition">
                                Tech Stack
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-blue-500 transition">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="flex items-center gap-4">
                    <img 
                        src="./header/console.svg" 
                        alt="console icon" 
                        className="w-7 h-auto opacity-70 hover:opacity-100 transition"
                    />

                    <a 
                    href="/Fullstack-abril.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-permanent border border-neutral-300 rounded-lg hover:border-black hover:bg-black hover:text-white transition-all duration-300">
                        Resume
                    </a>
                </div>

            </div>
        </header>
    )
}

export default Header
