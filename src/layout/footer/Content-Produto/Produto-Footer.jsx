"use client"
import React from 'react'
import Link from 'next/link';
import styles from './Product-Footer.module.css'

// Importação individual dos ícones
/* import MdLocationOn from "react-icons/md/MdLocationOn";
import MdEmail from "react-icons/md/MdEmail";
import MdSupport from "react-icons/md/MdSupport";
import MdDesign from "react-icons/md/MdDesign";
 */
export default function ProdutoFooter() {
  const ServiceLinks = [
    { nome: "Startup: North Shopping Prédio II - Fortaleza-CE", /* icon: <MdLocationOn />, */ href: "/webSite" },
    { nome: "E-mail comercial: equipe.nextsolvesolution@gmail.com", /* icon: <MdEmail /> */ href: "/desApp" },
    { nome: "Contato para Suporte (Agente IA): 85 99727-6499", /* icon: <MdSupport />, */ href: "/webPag" },
    { nome: "Serviços de Design e Marketing", /* icon: <MdDesign />, */ href: "/sociMid" },
  ];

  return (
    <section className={styles.Box_Services_Footer}>
      <h1 className={styles.Title_Contact} data-aos="fade-left" data-aos-delay="100">
        Contato Direto
      </h1>
      <ul className={styles.List_Contact_Footer}>
        {ServiceLinks.map((service, index) => (
          <li 
            className={styles.listFooter} 
            key={service.nome}
            data-aos="fade-left" 
            data-aos-delay={(index + 2) * 100}
          >
            <Link className={styles.link} href={service.href}>
              {service.icon} {service.nome}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}