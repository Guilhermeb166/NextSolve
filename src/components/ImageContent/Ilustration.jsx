"use client";
import Image from "next/image";
import styles from "./styles/Ilustration.module.css";

export default function ImageIlustration() {
  return (
    <section className={styles.boxImage}>
      <div className={styles.dimensionImage}>
        <Image
          className={styles.ImageIlustration}
          src={"/images/tec.png"}
          alt="Image-NextSolve"
          fill
        />
      </div>
    </section>
  );
}
