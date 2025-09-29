'use client'
import Link from "next/link";
import styles from "./NavigationH.module.css";

export default function NavigationH({ isOpen, onClose }) {
  const links = [
    { href: "/", label: "Início" },
    { href: "/#quem-somos", label: "Quem Somos" },
    { href: "/#cards-services", label: "Serviços" },
    { href: "/community", label: "Comunidade" },
 /*    { href: "#footer", label: "Onde nos Encontrar" }, */
  ];

  return (

      <nav className={`${styles.navContainer} ${isOpen ? styles.navOpen : ""}`}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.navLink}
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="/contact"
          className={styles.mobileContactButton}
          onClick={onClose}
        >
          <button type="button" className={styles.BtnHeaderMobile}>
            Contato
          </button>
        </Link>
      </nav>
  );
}
