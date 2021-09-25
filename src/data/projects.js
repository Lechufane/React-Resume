import MercadoLiebre from "../assets/MercadoLiebre.jpg";
import Nicotine from "../assets/Nicotine.jpg";
import OnlineResume from "../assets/OnlineResume.jpg";

const PROJECTS = [{
        id: 1,
        title: "Mercado Liebre",
        description: "Un clon de mercado libre utilizando conceptos avanzados de NodeJs, MVC, CRUD, Flexbox, y varias dependencias de Node.",
        link: "https://diego-villafane-mercado-liebre.herokuapp.com/",
        image: MercadoLiebre,
    },
    {
        id: 2,
        title: "Nicotine",
        description: "Ecommerce para proyecto integrador final, en proceso, trabajamos con Scrum como metodología, aplicando lo que aprendemos en nuestros estudios.",
        link: "http://nicotine.herokuapp.com/",
        image: Nicotine,
    },
    {
        id: 3,
        title: "Resume Online",
        description: "Primer portfolio online, hecho con HTML, CSS, media queries y flex, Ejs como motor de vistas, aplicando animaciones y conceptos avanzados de CSS y HTML",
        link: "https://d-v-online-resume.herokuapp.com/",
        image: OnlineResume,
    },
];

export default PROJECTS;