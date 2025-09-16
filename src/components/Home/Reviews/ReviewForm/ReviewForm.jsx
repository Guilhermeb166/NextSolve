'use client'
import styles from './ReviewForm.module.css'
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from 'react'

export default function ReviewForm({onClose}) {

    const [name, setName] = useState("")
    const [review, setReview] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        onClose()
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.reviewForm}>
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
