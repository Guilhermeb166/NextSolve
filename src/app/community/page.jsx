// Configuração da primária da página da Comunidade
"use client";
import React from "react";
import styles from "./community.module.css";

// Importação dos components da página  
import ImageIlustration from "@/components/ImageContent/Ilustration";
import Description from "./DescriptionCommunity/Description";

export default function Community() {
  return (
    <section className={styles.pageCommnunity}>
      <Description />
    </section>
  );
}
