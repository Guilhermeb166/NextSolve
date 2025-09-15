import Link from "next/link";
import styles from "./NavigationH.module.css";

export default function NavigationH() {
  const links = [
    { href: "/", label: "Início" }, 
    { href: "#quem-somos", label: "Quem Somos" },
    { href: "#cards-services", label: "Serviços" }, 
    { href: "/community", label: "Comunidade" },
    { href: "/projetos", label: "Iniciativas" }, 
  ]
  return (
    <nav className={styles.navContainer}>
      {links.map((link) => (
        <Link key={link.href} href={link.href} className={styles.navLink}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
