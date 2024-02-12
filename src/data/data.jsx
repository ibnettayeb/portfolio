import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandReact,
  TbBrandBootstrap,
  TbBrandPython,
  TbBrandGithub,
  TbSql,
} from "react-icons/tb";
import { BiLogoTailwindCss, BiLogoDjango } from "react-icons/bi";
import { FaGit } from "react-icons/fa6";
import { SiMysql, SiPostgresql } from "react-icons/si";

export const firstName = "rachid";
export const lastName = "ibnettayeb";
export const job = "front-end developer";
export const shortDesc =
  "Passionate junior frontend developer proficient in HTML, CSS, JavaScript, and React.js. Dedicated to crafting engaging web experiences with a strong emphasis on design and user interaction.";

export const skills = [
  { text: "Html", icon: <TbBrandHtml5 size={20} /> },
  { text: "Css", icon: <TbBrandCss3 size={20} /> },
  { text: "JavaScript", icon: <TbBrandJavascript size={20} /> },
  { text: "React Js", icon: <TbBrandReact size={20} /> },
  { text: "TailwindCss", icon: <BiLogoTailwindCss size={20} /> },
  { text: "Bootstrap", icon: <TbBrandBootstrap size={20} /> },
  { text: "Python", icon: <TbBrandPython size={20} /> },
  { text: "Django", icon: <BiLogoDjango size={20} /> },
  { text: "Git", icon: <FaGit size={20} /> },
  { text: "Github", icon: <TbBrandGithub size={20} /> },
  { text: "Sql", icon: <TbSql size={20} /> },
  { text: "MySQL", icon: <SiMysql size={20} /> },
  { text: "PostgreSQL", icon: <SiPostgresql size={20} /> },
];

export const timeline = [
  {
    year: "February 2020",
    title: "job title",
    description: "some information here about this year",
    skills: ["html and css", "css", "python"],
  },
  {
    year: "February 2021",
    title: "job title",
    description: "some information here about this year",
    skills: ["html", "css", "python"],
  },
  {
    year: "February 2022",
    title: "job title",
    description: "some information here about this year",
    skills: ["html", "css", "python"],
  },
];
