import "./globals.css";
import Header from "@/layout/header/Header";
import Footer from "@/layout/footer/Footer";
import ChatWidget from '@/components/Chatbot/ChatWidget.jsx';



export default function RootLayout({ children }) {
  const [isChatOpen, setIsChatOpen] = useState(false);

 
  const toggleChat = () => {
    console.log("FUNÇÃO toggleChat FOI CHAMADA no layout.jsx!");
    setIsChatOpen(!isChatOpen);
  };

  return (
    <html lang="pt">
      <body>
        <Header onChatToggle={toggleChat} />
        {children}
        <Footer />
        <ChatWidget isOpen={isChatOpen} onClose={toggleChat} />
      </body>
    </html>
  );
}