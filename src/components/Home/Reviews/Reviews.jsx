"use client";
import styles from "./Reviews.module.css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import ReviewForm from "./ReviewForm/ReviewForm";
import { SlUserFollowing } from "react-icons/sl";

export default function Reviews() {
  const [showForm, setShowForm] = useState(false);

  //As Avaliações genericas
  const reviews = [
    {
      id: 1,
      name: "Yasmin Toscano",
      role: "Cliente",
      text: "Otimos profissionais, recomendo demais!!.",
    },
    {
      id: 2,
      name: "Kamilla Tavóra",
      role: "Cliente",
      text: "Total confiança e responsabilidade, empresa está de Parabéns",
    },

    {
      id: 3,
      name: "Vandinho Bezerra",
      role: "Cliente",
      text: "Solucionaram e fizeram reajustes no meu sistema, otima empresa!!",
    },
  ];

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
    <section
      className={styles.ReviewsComponent}
      data-aos="fade-up"
      data-aos-delay="0"
    >
      {/* O Carrossel de Avaliações */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        style={{
          "--swiper-navigation-color": "#64C9FF6C",
          "--swiper-pagination-color": "#64C9FF6C",
        }}
        className={styles.swiper}
      >
        {reviews.map((r) => (
          <SwiperSlide key={r.id} className={styles.slide}>
            {/*Cards de avaliações */}
            <div className={styles.card}>
              <span className={styles.quote}><SlUserFollowing /></span>
              <p className={styles.text}>{r.text}</p>
              <div>
                <p className={styles.name}>{r.name}</p>
                <p className={styles.role}>{r.role}</p>
              </div>
              <button
                type="button"
                onClick={() => setShowForm(true)}
                className={styles.btnReview}
              >
                Deixe sua avaliação
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {showForm && <ReviewForm onClose={() => setShowForm(false)} />}
    </section>
  );
}
