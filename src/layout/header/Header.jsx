"use client";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link"; 
import NavigationH from "./nav/NavigationH";
import Sidebar from "./sideBar/SideBar";
import Image from "next/image";
import ChatWidget from "@/components/ChatBot/ChatWidget";
import { TbMessageChatbotFilled } from "react-icons/tb";


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => setIsChatOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`${styles.Header} ${scrolled ? styles.HeaderScrolled : ""}`}
    >
      <section className="section_global">
        <section className={styles.contentHeader}>
          <Image
            className={styles.imgLogo}
            src="/images/NextSolve-logo.png"
            alt="logo NextSolve"
            width={250}
            height={50}
          />

          {!isMobile && <NavigationH />}
          {isMobile && <Sidebar />}

          {!isMobile && (
            <div className={styles.buttonsContainer}>
              
              <Link href="/contact" className={styles.linkButton}>
                <button type="button" className={styles.BtnHeader}>
                  Contato
                </button>
              </Link>
              
               <TbMessageChatbotFilled onClick={toggleChat} className={styles.iconChat} />

            </div>
          )}
          
        </section>
      </section>
      <ChatWidget isOpen={isChatOpen} onClose={toggleChat} />
    </header>
  );
}