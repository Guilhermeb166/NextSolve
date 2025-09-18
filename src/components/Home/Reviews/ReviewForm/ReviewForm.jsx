//Formulário das Avaliações
'use client'
//Importações 
import styles from './ReviewForm.module.css'
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from 'react'

export default function ReviewForm({onClose}) {

    const [name, setName] = useState("")//nome que você digitar
    const [review, setReview] = useState("")//avaliação que você escrever

    const handleSubmit = (e) => {
        e.preventDefault()//nao recarrega a página ao enviar o form
        onClose()//chama a função de fechar o form
    }

    return (
        //Overlay - Cria um fundo escuro atrás do formulário
        <div className={styles.overlay}>
            <div className={styles.reviewForm}>
                {/*Icone que fecha o form */}
                <IoMdCloseCircle className={styles.closeBtn} onClick={onClose}/>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="text"
                        placeholder="Seu nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className={styles.inputForm}
                    />
                    <textarea
                        placeholder="Escreva sua avaliação..."
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        required
                        className={styles.textareaForm}
                    />
                    <button type="submit" className={styles.submitBtn}>
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    )
}
