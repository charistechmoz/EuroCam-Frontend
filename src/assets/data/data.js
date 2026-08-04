import MembrosPicture from "../images/membros.jpg";
import cci_france from "../images/cci_france.jpg";
import cm_espanha from "../images/cm_espanha.png";
import cm_grecia from "../images/cm_grecia.png";
import cm_italia from "../images/cm_italia.jpeg";
import cm_portugal from "../images/cm_portugal.png";
import chipre from "../images/chipre.jpg";
import ireland from "../images/ireland.jpg";
import suecia from "../images/suecia.jpg";
import finland from "../images/finland.jpg"
import PaiseBaixos from "../images/paise_baixos.PNG"

import galeria1 from "../images/galeria-1.jpeg";
import galeria2 from "../images/galeria-2.jpeg";
import galeria3 from "../images/galeria-3.jpeg";
import galeria4 from "../images/galeria-4.jpeg";
import galeria5 from "../images/galeria-5.jpeg";
import galeria6 from "../images/galeria-6.jpeg";
import galeria7 from "../images/galeria-7.jpeg";
import galeria8 from "../images/galeria-8.jpeg";
import galeria9 from "../images/galeria-9.jpeg";

import video1 from "../videos/video-1.mp4";
import video2 from "../videos/video-2.mp4";

export const camarasLogos = [
  { src: cci_france, alt: "Câmara de Comércio e Indústria França-Moçambique" },
  { src: cm_espanha, alt: "Câmara de Comércio Espanha-Moçambique" },
  { src: cm_grecia, alt: "Câmara de Comércio Grécia-Moçambique" },
  { src: cm_italia, alt: "Câmara de Comércio Itália-Moçambique" },
  { src: cm_portugal, alt: "Câmara de Comércio Portugal-Moçambique" },
  { src: chipre, alt: "Câmara de Comércio Chipre-Moçambique" },
  { src: ireland, alt: "Câmara de Comércio Irlanda-Moçambique" },
  { src: suecia, alt: "Câmara de Comércio Suécia-Moçambique" },
  { src: finland, alt: "Câmara de Comércio Finlândia-Moçambique" },
  { src: PaiseBaixos, alt: "Câmara de Comércio Países Baixos-Moçambique" },
];


export const fotosGaleria = [
  { src: "/galeria-1.jpg", alt: "Evento EuroCam 1" },
  { src: "/galeria-2.jpg", alt: "Evento EuroCam 2" },
  { src: "/galeria-3.jpg", alt: "Evento EuroCam 3" },
  { src: "/galeria-4.jpg", alt: "Evento EuroCam 4" },
  { src: "/galeria-5.jpg", alt: "Evento EuroCam 5" },
  { src: "/galeria-6.jpg", alt: "Evento EuroCam 6" },
]

export const galeriaItems = [
  { id: 1, type: "image", src: galeria1, category: "Eventos", title: "", span: "row-span-2" },
  { id: 2, type: "image", src: galeria2, category: "Missões", title: "", span: "" },
  { id: 3, type: "image", src: galeria3, category: "Feiras", title: "", span: "" },
  { id: 4, type: "image", src: galeria4, category: "Eventos", title: "", span: "" },
  { id: 5, type: "image", src: galeria5, category: "Missões", title: "", span: "row-span-2" },
  { id: 6, type: "image", src: galeria6, category: "Feiras", title: "", span: "" },
  { id: 7, type: "image", src: galeria7, category: "Eventos", title: "", span: "" },
  { id: 8, type: "image", src: galeria8, category: "Missões", title: "", span: "row-span-2" },
  { id: 9, type: "image", src: galeria9, category: "Feiras", title: "", span: "" },
  { id: 10, type: "video", src: video1, category: "Vídeos", title: "", span: "", poster: galeria4 },
  { id: 11, type: "video", src: video2, category: "Vídeos", title: "", span: "", poster: galeria9 },
];

export { MembrosPicture };