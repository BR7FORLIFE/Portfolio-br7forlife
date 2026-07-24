import { FaJava, FaNodeJs, FaDocker, FaReact, FaAws } from "react-icons/fa";

import {
  SiSpringboot,
  SiNestjs,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiApachekafka,
  SiNetlify,
  SiRailway,
  SiRender,
  SiVercel,
  SiAngular,
  SiAstro,
} from "react-icons/si";

export const backendTech = [
  {
    name: "Java",
    icon: FaJava,
    color: "text-orange-500",
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    color: "text-green-500",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-400",
  },
  {
    name: "NestJS",
    icon: SiNestjs,
    color: "text-red-500",
  },
];

export const databaseTech = [
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-600",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "text-sky-500",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-blue-500",
  },
  {
    name: "Redis",
    icon: SiRedis,
    color: "text-red-600",
  },
];

export const devopsTech = [
  {
    name: "AWS",
    icon: FaAws,
    color: "text-amber-500",
  },
  {
    name: "Docker",
    icon: FaDocker,
    color: "text-sky-500",
  },
  {
    name: "Apache Kafka",
    icon: SiApachekafka,
    color: "text-white",
  },
  {
    name: "Netlify",
    icon: SiNetlify,
    color: "text-cyan-400",
  },
  {
    name: "Railway",
    icon: SiRailway,
    color: "text-violet-400",
  },
  {
    name: "Render",
    icon: SiRender,
    color: "text-indigo-400",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "text-white",
  },
];

export const frontendTech = [
  {
    name: "React",
    icon: FaReact,
    color: "text-cyan-400",
  },
  {
    name: "Angular",
    icon: SiAngular,
    color: "text-red-600",
  },
  {
    name: "Astro",
    icon: SiAstro,
    color: "text-orange-400",
  },
];
