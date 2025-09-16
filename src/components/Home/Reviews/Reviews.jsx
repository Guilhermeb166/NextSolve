'use client'
import styles from './Reviews.module.css'
import { useEffect, useState } from "react";
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Autoplay}  from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import ReviewForm from './ReviewForm/ReviewForm';

export default function Reviews() {
  const [showForm, setShowForm] = useState(false);
  const reviews = [
    {
      id:  1,
      name:"Sarah Johnson",
      role:"Cliente",
      text:"Lorem ipsum dolor sit amet consectetur. Arcu viverra ut tortor...",

    },
    {
      id: 2,
      name: "Michael Smith",
      role: "Cliente",
      text: "In mi elit pellentesque id fermentum sollicitudin maecenas quis...",

    },
  ]

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
    <section className={styles.ReviewsComponent} data-aos="fade-up"
          data-aos-delay="0">
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
                      '--swiper-navigation-color': '#64C9FF6C',
                      '--swiper-pagination-color': '#64C9FF6C',
                  }}

          className={styles.swiper}
          
        >
          {reviews.map((r) => (
            <SwiperSlide key={r.id} className={styles.slide}>
              <div className={styles.card}>
                <span className={styles.quote}>“</span>
                <p className={styles.text}>{r.text}</p>
                <div>
                  <p className={styles.name}>{r.name}</p>
                  <p className={styles.role}>{r.role}</p>
                </div>
                <button type='button' onClick={() => setShowForm(true)}>Deixe sua avaliação</button>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
        {showForm && <ReviewForm onClose={() => setShowForm(false)} />}
    </section>
  )
}
