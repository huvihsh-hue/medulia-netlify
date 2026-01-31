import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User } from 'lucide-react';

const CHAT_AVATAR_URL =
  'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769072404/logo_1na1_tcczjy.png';

const FAQ = [
  { q: 'Jak wygląda pierwsza konsultacja?', a: 'Poznajemy się, diagnozuję poziom, omawiamy cele i układamy plan nauki pod maturę.' },
  { q: 'Jak wygląda płatność?', a: 'Płatność przelewem lub BLIK. Najczęściej z góry przed zajęciami; można też opłacić cały miesiąc.' },
  { q: 'Czy pracujesz z podstawą i rozszerzeniem?', a: 'Tak — pracuję zarówno z podstawą, jak i rozszerzeniem, dopasowując plan do Twoich celów.' },
  { q: 'Czy dostaję materiały poza zajęciami?', a: 'Tak — po zajęciach dostajesz materiały, notatki i zadania do ćwiczenia.' },
  { q: 'Ile osób jest w grupie?', a: 'Zwykle 2–6 osób — to optymalnie: jest dynamika i motywacja bez chaosu.' },
  { q: 'Jak odwołać lub przełożyć lekcję?', a: 'Najlepiej zgłosić najpóźniej dzień wcześniej — wtedy bez problemu ustalamy inny termin.' },
];

function ChatWidget() {
  const [chatOpen, setChatOpen] = useState(false);
  const [teaserVisible, setTeaserVisible] = useState(false);
  const [unread, setUnread] = useState(true);
  const [messages, setMessages] = useState([
    { from: 'bot', text: '👋 Chętnie odpowiem na Twoje pytania.' }
  ]);

  const chatEndRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setTeaserVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (chatEndRef.current) chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages, chatOpen]);

  const toggleChat = () => {
    setChatOpen((prev) => !prev);
    if (!chatOpen) setUnread(false);
  };

  const handleQuestionClick = (questionObj) => {
    setMessages((prev) => [
      ...prev,
      { from: 'user', text: questionObj.q },
      { from: 'bot', text: questionObj.a },
    ]);
  };

  return createPortal(
    <>
      {/* Chat Teaser / Bubble */}
      <AnimatePresence>
        {teaserVisible && !chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-[9999] p-2 rounded-full flex items-center gap-3 shadow-2xl transition-colors backdrop-blur-md cursor-pointer hover:scale-105"
            style={{
              background: 'rgba(18, 24, 38, 0.8)', // Lżejsze tło dla dymka
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
            onClick={toggleChat}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-white/5">
                <img
                  src={CHAT_AVATAR_URL}
                  alt="Julia - MEDULIA"
                  className="w-full h-full object-cover"
                />
              </div>
              {unread && (
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-[#121826]">
                  1
                </div>
              )}
            </div>
            <div className="pr-3 hidden sm:block">
              <p className="text-white font-bold text-sm">Masz pytania?</p>
              <p className="text-white/80 text-xs">Jestem online 👋</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-4 right-4 left-4 sm:left-auto sm:w-[360px] z-[10000] overflow-hidden shadow-2xl rounded-2xl border border-white/20 flex flex-col"
            style={{
              // ZMIANA: Zmniejszone opacity do 0.85 + mocniejszy blur (20px)
              // To zapewni czytelność, ale usunie wrażenie "ciężkiego kloca"
              background: 'rgba(18, 24, 38, 0.85)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)', // Wsparcie dla Safari
            }}
          >
            {/* Header */}
            <div className="bg-white/5 p-4 flex justify-between items-center border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-white/5">
                    <img
                      src={CHAT_AVATAR_URL}
                      alt="Julia - MEDULIA"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#121826]"></div>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Julia z Medulii</h4>
                  <p className="text-white/60 text-[11px]">Odpowiadam zazwyczaj w 1h</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="p-4 flex flex-col gap-4 h-[280px] sm:h-[320px] overflow-y-auto no-scrollbar bg-transparent">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-2 ${msg.from === 'user' ? 'justify-end' : ''}`}
                >
                  {msg.from === 'bot' && (
                    <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mt-1 bg-white/10 border border-white/10">
                      <img src={CHAT_AVATAR_URL} className="w-full h-full object-cover" alt="Avatar" />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 text-sm shadow-sm ${
                      msg.from === 'user'
                        ? 'bg-teal-600/40 border border-teal-500/30 text-white rounded-tr-none'
                        : 'bg-white/10 border border-white/10 text-white/95 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* FAQ Section */}
            <div className="p-4 pt-2 flex flex-col gap-2 border-t border-white/10 bg-white/5">
              <p className="text-white/40 text-[10px] uppercase tracking-[0.1em] font-bold mb-1">
                Najczęstsze pytania
              </p>
              <div className="flex flex-col gap-1.5 max-h-[120px] overflow-y-auto no-scrollbar">
                {FAQ.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuestionClick(item)}
                    className="text-left p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/90 text-xs transition-all active:scale-[0.98]"
                  >
                    {item.q}
                  </button>
                ))}
              </div>

              <Link
                to="/kontakt"
                onClick={() => setChatOpen(false)}
                className="w-full py-3 mt-3 bg-white text-black font-bold rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors shadow-lg"
              >
                Skontaktuj się ze mną
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    document.body
  );
}

export default ChatWidget;