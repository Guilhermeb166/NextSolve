import { db } from "./firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function enviarFeedback(name, review) {
  if (!review.trim()) {
    throw new Error("Mensagem não pode ser vazia.");
  }

  await addDoc(collection(db, "comentarios"), {
    name: name.trim() || "Anônimo",
    review: review.trim(),
    createdAt: serverTimestamp(),
  });
}
