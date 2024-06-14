import imgDelyzze from '../img/work/delyzze.jpg';
import imgFreeLancer from '../img/work/frelancer.svg';
import imgUPA from '../img/work/idab.png';
import { skills } from './skills';
const currentDate = new Date().getFullYear();

export const work = [
  {
    id: 1,
    institution: 'Delyzze',
    office: 'Desenvolvedor Front-end',
    img: imgDelyzze,
    about:
      'Desenvolvimento de interfaces de usuário responsivas e de alta qualidade utilizando Next.js, TypeScript e Material UI.Implementação eficaz de versionamento com Git, gerenciando branches e pull requests.Liderança no desenvolvimento da página inicial (landing page) da empresa, utilizando Next.js, TypeScript, Material UI e Styled Components, com foco na responsividade e experiência do usuário.',
    startdate: 2024,
    enddate: currentDate,

    techs: [
      { id: 1, name: 'React', title: skills[4].title, img: skills[4].img },
      { id: 2, name: 'TypeScript', title: skills[3].title, img: skills[3].img },
      { id: 3, name: 'NextJs', title: skills[5].title, img: skills[5].img },
    ],
  },
  {
    id: 2,
    institution: 'Freelancer',
    office: 'Desenvolvedor Front-end',
    img: imgFreeLancer,
    about:
      'Encarregado de desenvolver, implementar e sustentar várias aplicações usando ReactJS e NodeJS. Responsável por aprimorar o desempenho e a usabilidade de sistemas da web, otimizando o carregamento de páginas.Gerencia o controle de versão Git em um ambiente de desenvolvimento distribuído, garantindo o registro adequado de lançamentos e versões do projeto ',
    startdate: 2020,
    enddate: currentDate,

    techs: [
      { id: 1, name: 'React', title: skills[4].title, img: skills[4].img },
      { id: 2, name: 'TypeScript', title: skills[3].title, img: skills[3].img },
      { id: 3, name: 'JavaScript', title: skills[2].title, img: skills[2].img },
    ],
  },

  {
    id: 3,
    institution: 'IDAB',
    office: 'Analista de TI',
    img: imgUPA,
    about:
      'Conhecimento em: VMware vSphere, Servidor Windows Server 2008 R2, Active Directory, PFSENSE, automação com Python, estrutura de rede, acesso remoto (AnyDesk e TeamViewer), compartilhamento de arquivos, , manutenção de equipamentos  e controle de sistemas  garantindo a eficiência e qualidade da infraestrutura de TI da empresa. ',
    startdate: 2021,
    enddate: currentDate,

    techs: [
      { id: 1, name: 'HTML', title: skills[0].title, img: skills[0].img },
      { id: 2, name: 'CSS', title: skills[1].title, img: skills[1].img },
      { id: 3, name: 'JavaScript', title: skills[2].title, img: skills[2].img },
      { id: 4, name: 'React', title: skills[4].title, img: skills[4].img },
    ],
  },
];
