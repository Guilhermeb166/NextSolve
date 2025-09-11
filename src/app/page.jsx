//Home
import Image from "next/image";
import styles from "./page.module.css";
import ImageHome from "@/components/Home/ImageHome";
import DescriptionH from "@/components/Home/DescritionHome";
import ImageIlustration from "@/components/ImageContent/Ilustration";
import Title from "@/components/Title/Title";
import CardsServices from "@/components/Home/CardsServices";

export default function Home() {
  return (
    <div className={styles.page}>
      <ImageIlustration />
      <Title text="Sobre nossa Empresa" />
      <section className={styles.divisionContent}>
        <DescriptionH />
        <ImageHome />
      </section>
      <Title text="Serviços que Oferecemos" />
      <CardsServices />
    </div>
  );
}
