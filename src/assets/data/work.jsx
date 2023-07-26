import {skills} from './skills'
import imgFreeLancer from '../img/work/frelancer.svg'

export const work = [
  {
    id: 1,
    institution: "Freelancer",
    office: "Desenvolvedor Front-end",
    img: imgFreeLancer,
    about:
      "sou especializado em HTML, CSS, JavaScript e frameworks como React. Tenho habilidades comprovadas como freelancer, entregando soluções de alta qualidade para clientes diversos.",
    startdate: 2023,
    enddate: "Atual",

    techs: [
      { id: 1, name: "HTML", title: skills[0].title, img: skills[0].img },
      { id: 2, name: "CSS", title: skills[1].title, img: skills[1].img },
      { id: 3, name: "JavaScript", title: skills[2].title, img: skills[2].img },
      { id: 4, name: "React", title: skills[3].title, img: skills[3].img },
    ],
  },

  {
    id: 2,
    institution: "Freelancer",
    office: "Desenvolvedor Front-end",
    img: imgFreeLancer,
    about:
      "sou especializado em HTML, CSS, JavaScript e frameworks como React. Tenho habilidades comprovadas como freelancer, entregando soluções de alta qualidade para clientes diversos.",
    startdate: 2023,
    enddate: "Atual",

    techs: [
      { id: 1, name: "HTML", title: skills[0].title, img: skills[0].img },
      { id: 2, name: "CSS", title: skills[1].title, img: skills[1].img },
      { id: 3, name: "JavaScript", title: skills[2].title, img: skills[2].img },
      { id: 4, name: "React", title: skills[3].title, img: skills[3].img },
    ],
  },
];
