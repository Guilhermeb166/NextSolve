'use client'
import styles from './Title.module.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Title({ text }) {

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-quad',
      once: false,
      offset: 50,
    });
  }, []);

  return (
    <section className={styles.boxTitule}
      data-aos="fade-right"
      data-aos-delay="500"
    >
      <div className={styles.dimensionTitle}>
        <h2 className={styles.TitleInform}>{text}</h2>
      </div>
    </section>
  )
}
//ai tu pode alterar aqui, e quando for passar pro home, apenas passar <Title text="o que tu quiser"/>, ja deixei la  pra tu ver