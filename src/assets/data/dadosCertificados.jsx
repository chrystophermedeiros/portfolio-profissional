import ImgCtDevClub from '../img/certificates/certificado-DevClub-FS.jpg'
import ImgCtCursoemvideo1 from '../img/certificates/certificado-HTML5-e-CSS3-modulo-1-de-5.jpg'
import ImgCtCursoemvideo2 from '../img/certificates/certificado-HTML5-e-CSS3-modulo-2-de-5.jpg'
import ImgCtCursoemvideo3 from '../img/certificates/certificado-HTML5-e-CSS3-modulo-3-de-5.jpg'

export const certificates = [
    {   id:1,
        name:"Certificado DevClub FS",
        img:ImgCtDevClub,
        date: 2023,
        hours: 120,
        institution:[
            {name:"DevClub"},
            {img:"/img/institution/devclub.png"}
        ] ,
    },

    {   id:2,
        name:"Certificado HTML5 e CSS3 modulo 1 de 5",
        img:ImgCtCursoemvideo1,
        date: 2020,
        hours: 40,
        institution:[
            {name:"Curso em Video"},
            {img:"/img/institution/devclub.png"}
        ] ,
    },

    {   id:3,
        name:"Certificado HTML5 e CSS3 modulo 2 de 5",
        img:ImgCtCursoemvideo2,
        date: 2020,
        hours: 40,
        institution:[
            {name:"Curso em Video"},
            {img:"/img/institution/devclub.png"}
        ] ,
    },

    {   id:4,
        name:"Certificado HTML5 e CSS3 modulo 3 de 5",
        img:ImgCtCursoemvideo3,
        date: 2020,
        hours: 40,
        institution:[
            {name:"Curso em Video"},
            {img:"/img/institution/devclub.png"}
        ] ,
    },
]
