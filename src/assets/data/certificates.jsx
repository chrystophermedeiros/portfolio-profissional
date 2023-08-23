import ImgCtDevClub from "../img/certificates/certificado-DevClub-FS.jpg";
import ImgCtCursoemvideo1 from "../img/certificates/certificado-HTML5-e-CSS3-modulo-1-de-5.jpg";
import ImgCtCursoemvideo2 from "../img/certificates/certificado-HTML5-e-CSS3-modulo-2-de-5.jpg";
import ImgCtCursoemvideo3 from "../img/certificates/certificado-HTML5-e-CSS3-modulo-3-de-5.jpg";
import ImgDiplomaADS from "../img/certificates/diploma-ads.jpg"
import ImgRockseatIaDevs from "../img/certificates/certificado-Rocketseat-IaDevs.png"
import skills from "./skills";

export const certificates = [


  {
    id: 2,
    name: "Diploma Análise e Desenvolvimento de Sistemas",
    img: ImgDiplomaADS,
    date: 2023,
    hours: 2102,
    tag: [
      { id: 1, name: "HTML", title: skills[0].title, img: skills[0].img },
      { id: 2, name: "CSS", title: skills[1].title, img: skills[1].img },
      { id: 3, name: "JavaScript", title: skills[2].title, img: skills[2].img },
      { id: 4, name: "React", title: skills[3].title, img: skills[3].img },
    ],

    institution: [{ name: "DevClub", img: "/img/institution/devclub.png" }],
  },
  {
    id: 3,
    name: "Certificado DevClub FS",
    img: ImgCtDevClub,
    date: 2023,
    hours: 120,
    tag: [
      { id: 1, name: "HTML", title: skills[0].title, img: skills[0].img },
      { id: 2, name: "CSS", title: skills[1].title, img: skills[1].img },
      { id: 3, name: "JavaScript", title: skills[2].title, img: skills[2].img },
      { id: 4, name: "React", title: skills[3].title, img: skills[3].img },
    ],

    institution: [{ name: "DevClub", img: "/img/institution/devclub.png" }],
  },

  {
    id: 4,
    name: "Certificado HTML5 e CSS3 modulo 1 de 5",
    img: ImgCtCursoemvideo1,
    date: 2020,
    hours: 40,
    tag: [
      { id: 1, name: "HTML", title: skills[0].title, img: skills[0].img },
      { id: 2, name: "CSS", title: skills[1].title, img: skills[1].img },
    ],
    institution: [
      { name: "Curso em Video", img: "/img/institution/devclub.png" },
    ],
  },

  {
    id: 5,
    name: "Certificado HTML5 e CSS3 modulo 2 de 5",
    img: ImgCtCursoemvideo2,
    date: 2020,
    hours: 40,
    tag: [
      { id: 1, name: "HTML", title: skills[0].title, img: skills[0].img },
      { id: 2, name: "CSS", title: skills[1].title, img: skills[1].img },
    ],
    institution: [
      { name: "Curso em Video", img: "/img/institution/devclub.png" },
    ],
  },

  {
    id: 6,
    name: "Certificado HTML5 e CSS3 modulo 3 de 5",
    img: ImgCtCursoemvideo3,
    date: 2020,
    hours: 40,
    tag: [
      { id: 1, name: "HTML", title: skills[0].title, img: skills[0].img },
      { id: 2, name: "CSS", title: skills[1].title, img: skills[1].img },
    ],
    institution: [
      { name: "Curso em Video", img: "/img/institution/devclub.png" },
    ],
  },

  {
    id: 11,
    name: "AI for Devs",
    img: ImgRockseatIaDevs,
    date: 2023,
    hours: 10,
    tag: [
      { id: 1, name: "HTML", title: skills[0].title, img: skills[0].img },
      { id: 2, name: "CSS", title: skills[1].title, img: skills[1].img },
    ],
    institution: [
      { name: "Rocketseat", img: "/img/institution/devclub.png" },
    ],
  },
];
