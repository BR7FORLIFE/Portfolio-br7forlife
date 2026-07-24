import { motion } from "framer-motion";

export default function TechCard({
  name,
  icon: Icon,
  color,
}) {
  return (
    <motion.div
      whileHover={{
        y: -2,
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.18,
      }}
      className="
        group
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        border-neutral-300
        bg-white
        px-4
        py-2.5
        transition-all
        hover:border-black
        hover:bg-neutral-50
        cursor-default
      "
    >
      <Icon
        className={`
          text-xl
          ${color}
          transition-transform
          duration-200
          group-hover:scale-110
          group-hover:rotate-6
        `}
      />

      <span
        className="
          text-sm
          font-medium
          tracking-wide
          text-neutral-700
        "
      >
        {name}
      </span>
    </motion.div>
  );
}