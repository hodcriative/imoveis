import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a className="floating-whatsapp" href="https://wa.me/[WHATSAPP]" target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp">
      <MessageCircle size={25} />
      <span>Fale comigo</span>
    </a>
  );
}