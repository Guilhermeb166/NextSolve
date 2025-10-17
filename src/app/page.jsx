//Home
import styles from "./home.module.css";
import ImageHome from "@/components/Home/ImageHome/ImageHome";
import DescriptionH from "@/components/Home/Description/DescritionHome";
import ImageIlustration from "@/components/ImageContent/Ilustration";
import Title from "@/components/Title/Title";
import CardsServices from "@/components/Home/CardsServices/CardsServices";
import Reviews from "@/components/Home/Reviews/Reviews";

export default function Home() {
  return (
    <div className={styles.page}>
      <ImageIlustration />
      <Title text="Sobre nossa Empresa" noPaddingBottom  />
      <section className={styles.divisionContent} id="quem-somos">
        <DescriptionH />
        <ImageHome />
      </section>
      <Title text="Serviços que Oferecemos" />
      <CardsServices />
      <Title text="Comentários de Clientes" />
      <Reviews/>

    </div>
  );
}
