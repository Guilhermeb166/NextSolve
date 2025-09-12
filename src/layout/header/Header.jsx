"use client";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import NavigationH from "./nav/NavigationH";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`${styles.Header} ${scrolled ? styles.HeaderScrolled : ""}`}
    >
      <section className="section_global">
        <section className={styles.contentHeader}>
          
          <Image className={styles.imgLogo} src="/images/NextSolve-logo.png" alt="logo NextSolve" width={250} height={50}/>
         

          <NavigationH />

          <Link href="/" className={styles.linkButton}>
            <button type="button" className={styles.BtnHeader}>
              Contato
            </button>
          </Link>
        </section>
      </section>
    </header>
  );
}
