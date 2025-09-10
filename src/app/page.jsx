//Home
import Image from "next/image";
import styles from "./page.module.css";
import ImageHome from "@/components/Home/ImageHome";
import DescriptionH from "@/components/Home/DescritionHome";

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.divisionContent}>
        <DescriptionH />
        <ImageHome />
      </section>
    </div>
  );
}
