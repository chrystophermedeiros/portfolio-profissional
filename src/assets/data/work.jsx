import {skills} from './skills'
import imgFreeLancer from '../img/work/frelancer.svg'
import imgUPA from '../img/work/upa24h.svg'
const currentDate = new Date().getFullYear();

export const work = [
  {
    id: 1,
    institution: "Freelancer",
    office: "Desenvolvedor Front-end",
    img: imgFreeLancer,
    about:
      "Sou especializado em HTML, CSS, JavaScript e frameworks como React. Tenho habilidades comprovadas como freelancer, entregando soluções de alta qualidade, além disso, possuo experiência em desenvolvimento de aplicações web responsivas e interativas, interfaces amigáveis e funcionais que proporcionam uma excelente experiência do usuário.",
    startdate: 2020,
    enddate: currentDate,

  
    techs: [
      { id: 1, name: "HTML", title: skills[0].title, img: skills[0].img },
      { id: 2, name: "CSS", title: skills[1].title, img: skills[1].img },
      { id: 3, name: "JavaScript", title: skills[2].title, img: skills[2].img },
      { id: 4, name: "React", title: skills[3].title, img: skills[3].img },
    ],
  },

  {
    id: 2,
    institution: "UPA",
    office: "Analista de TI",
    img: imgUPA,
    about:
      "Conhecimento em: VMware vSphere, Servidor Windows Server 2008 R2, Active Directory, PFSENSE, automação com Python, estrutura de rede, acesso remoto (AnyDesk e TeamViewer), compartilhamento de arquivos, , manutenção de equipamentos  e controle de sistemas  garantindo a eficiência e qualidade da infraestrutura de TI da empresa. ",
    startdate: 2021,
    enddate: currentDate,

    techs: [
      { id: 1, name: "HTML", title: skills[0].title, img: skills[0].img },
      { id: 2, name: "CSS", title: skills[1].title, img: skills[1].img },
      { id: 3, name: "JavaScript", title: skills[2].title, img: skills[2].img },
      { id: 4, name: "React", title: skills[3].title, img: skills[3].img },
    ],
  },
];





