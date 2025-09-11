'use client'
import styles from './styles/Ilustration.module.css'

export default function ImageIlustration() {
    return (
        <section className={styles.boxImage}>
            <div className={styles.dimensionImage}>
                <img className={styles.ImageIlustration} src={"/images/nextSolve.jpg"} alt="Image-NextSolve" />
            </div>
        </section>
    )
}
