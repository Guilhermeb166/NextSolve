'use client'
import { useEffect } from "react";
import FormContact from "./formContact/FormContact";
import styles from './Contact.module.css'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {

   useEffect(() => {
      AOS.init({
        duration: 800,
        easing: "ease-out-quad",
        once: false,
        offset: 50,
        useClassNames: true,
      });
  
      AOS.refresh();
    }, []);

  return (
    <div className={styles.contactPage} data-aos="fade-up"
        data-aos-delay="0">
          <h2 className={styles.title}>Entre em contato</h2>
        <FormContact/>
    </div>
  )
}
