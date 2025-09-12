"use client";
import React from 'react'
import Link from "next/link";
import styles from './Service-Footer.module.css'

//importação dos icons
import { FaInstagram } from "react-icons/fa"; //Instagram
import { FaLinkedin } from "react-icons/fa6"; //LinkedIn
import { RiUserCommunityFill } from "react-icons/ri"; // Comunidade
import { MdEmail } from "react-icons/md"; // E-mail

const BtnLinks = [
  { nome: <FaInstagram />, href: "/", label: "Instagram" },
  { nome: <FaLinkedin />, href: "/", label: "LinkedIn" },
  { nome: <RiUserCommunityFill />, href: "/", label: "Comunidade" },
  { nome: <MdEmail />, href: "/", label: "E-mail" },
];

export default function Service_Footer() {
  return (
    <section className={styles.Box_Services_Footer}>
      <h1 className={styles.Title_Services_Footer} data-aos="fade-right" data-aos-delay="100">
        NextSolve Studio Vision.
      </h1>

      <p className={styles.Paragraf_Services_Footer} data-aos="fade-right" data-aos-delay="200">
        Geramos os melhores resultados para sua empresa. Com nossa equipe especializada, sua empresa alcança um novo patamar, contando com dados em tempo real e suporte humanizado 24 horas por dia.
      </p>

      <ul className={styles.List_iconsReds_Footer} data-aos="fade-right" data-aos-delay="300">
        {BtnLinks.map((link, index) => (
          <li className={styles.Link_RedScl_Footer} key={index}>
            <Link
              className={styles.Link_Footer}
              href={link.href}
              aria-label={link.label}
            >
              {link.nome}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}