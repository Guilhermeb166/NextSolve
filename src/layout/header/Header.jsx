"use client"
import { useEffect, useState } from 'react'
import styles from './Header.module.css'
import Link from 'next/link'
import NavigationH from './nav/NavigationH'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <header className={`${styles.Header} ${scrolled ? styles.HeaderScrolled : ""}`}>
            <section className='section_global'>
                <section className={styles.contentHeader}>
                    <Link href="/" className={styles.titleLink}><h1>Next<span className='color_cyan'>Solve</span></h1></Link>

                    <NavigationH />

                    <Link href="/" className={styles.linkButton}><button className={styles.BtnHeader}>Contato</button></Link>
                </section>
            </section>
        </header>
    )
}