import Link from "next/link"
import styles from "./NavigationH.module.css"

export default function NavigationH() {
 const links = [
  { href: "/home", label: "Início" },          // Mais atual e limpo que "Home"
  { href: "/sobre", label: "Quem Somos" },     // Mais institucional e acolhedor
  { href: "/comunidade", label: "Serviços" },  // Traz ideia de rede e pertencimento
  { href: "/servicos", label: "Soluções" },    // Soa mais moderno e orientado a valor
  { href: "/projetos", label: "Iniciativas" }  // Passa inovação e movimento
]

  return (
    <nav className={styles.navContainer}>
      {links.map((link) => (
        <Link key={link.href} href={link.href} className={styles.navLink}>
          {link.label}
        </Link>
      ))}
    </nav>
  )
}