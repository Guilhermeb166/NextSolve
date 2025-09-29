"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import styles from "./Description.module.css";

export default function Description() {
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
    <div
      className={styles.boxDescription}
      data-aos="fade-right"
      data-aos-delay="550"
    >
      <div className={styles.description}>
        <h1 className={styles.titleDescription} data-aos="fade-right">
          Startup de Desenvolvimento Tecnológico
        </h1>
        <br />
        <p className={styles.paragraph} data-aos="fade-right">
          <span className="color_cyan">A solução</span> para os desafios da sua
          empresa começa aqui. Nossa equipe de desenvolvimento utiliza a
          tecnologia para criar soluções que destacam sua marca, organizam seus
          processos e ampliam sua presença nas redes sociais.
        </p>
        <br />
        <p
          className={styles.paragraph}
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <span className="color_cyan">Interessado?</span> Role para baixo e
          descubra mais sobre nossa empresa. Contamos com suporte 24 horas por
          dia e com o nosso assistente de IA, o Next, que está pronto para
          esclarecer suas dúvidas e ajudá-lo a se conectar conosco.
        </p>
        <br />
        <p
          className={styles.paragraph}
          data-aos="fade-right"
          data-aos-delay="600"
        >
          <span className="color_cyan">Não perca tempo!</span> fale com nossa
          equipe e leve sua empresa a novos patamares, transformando ideias em
          resultados concretos com o poder da tecnologia.
        </p>
        <br />
        <br />
        <div className={styles.btnsHom}>
          <Link href="/contact"
            
            className={styles.button}
          >
            Fale Conosco
          </Link>
          <button
            type="button"
            className={styles.button}    
          >
            Apresentar Proposta
          </button>
        </div>
      </div>
    </div>
  );
}
