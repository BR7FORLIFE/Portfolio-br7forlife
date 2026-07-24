import { motion } from "framer-motion";
import { FiMail, FiPhone, FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CustomTitle } from "./title/title";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full px-6 py-6 md:px-12 lg:px-20"
    >
      <div className="max-w-5xl mx-auto">

        <CustomTitle content="Contacto" pos="LEFT" />

        <div className="mt-10 flex flex-col gap-8">

          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-tight text-neutral-900">
              ¿Construimos algo juntos?
            </h2>

            <p className="mt-5 leading-relaxed text-neutral-600">
              Siempre estoy abierto a conversar sobre oportunidades,
              proyectos de software, arquitectura backend,
              cloud e inteligencia artificial.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              rounded-3xl
              border
              border-neutral-200
              bg-white
              p-8
              shadow-sm
            "
          >
            <div className="space-y-5">

              <a
                href="mailto:diazpachecobrayan@gmail.com"
                className="group flex items-center justify-between rounded-xl border border-transparent p-4 transition hover:border-neutral-300 hover:bg-neutral-50"
              >
                <div className="flex items-center gap-4">
                  <FiMail className="text-2xl text-neutral-700" />

                  <div>
                    <p className="text-sm text-neutral-500">
                      Correo
                    </p>

                    <p className="font-medium text-neutral-900">
                      diazpachecobrayan@gmail.com
                    </p>
                  </div>
                </div>

                <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href="tel:+573233375315"
                className="group flex items-center justify-between rounded-xl border border-transparent p-4 transition hover:border-neutral-300 hover:bg-neutral-50"
              >
                <div className="flex items-center gap-4">
                  <FiPhone className="text-2xl text-neutral-700" />

                  <div>
                    <p className="text-sm text-neutral-500">
                      Teléfono
                    </p>

                    <p className="font-medium text-neutral-900">
                      +57 323 337 5315
                    </p>
                  </div>
                </div>

                <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

            </div>

            <div className="mt-8 flex gap-4">

              <a
                href="https://github.com/BR7FORLIFE"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-neutral-300
                  transition
                  hover:-translate-y-1
                  hover:border-black
                "
              >
                <FaGithub className="text-xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/brayan-diaz-pacheco"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-neutral-300
                  transition
                  hover:-translate-y-1
                  hover:border-black
                "
              >
                <FaLinkedin className="text-xl text-[#0A66C2]" />
              </a>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}