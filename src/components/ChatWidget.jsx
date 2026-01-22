import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User } from 'lucide-react';

const CHAT_AVATAR_URL =
  'https://res.cloudinary.com/dyxif8hyp/image/upload/v1769072404/logo_1na1_tcczjy.png'; // <-- TU WKLEJ URL DO LOGO JULII

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
    const timer = setTimeout(() => setTeaserVisible(true), 15000);
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
      {/* Chat Teaser */}
      <AnimatePresence>
        {teaserVisible && !chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 18 }}
            className="medulia-chat-teaser !p-2 !rounded-full flex items-center gap-3 shadow-2xl transition-colors backdrop-blur-md cursor-pointer hover:scale-105"
            style={{
              background: 'rgba(18, 24, 38, 0.55)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
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
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-red-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-transparent shadow-sm">
                  1
                </div>
              )}
            </div>

            <div className="pr-2 hidden sm:block">
              <p className="text-white font-bold text-sm">Masz pytania?</p>
              <p className="text-white/90 text-xs">Jestem online 👋</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 14 }}
            className="medulia-chat-panel glass-panel !p-0 overflow-hidden shadow-2xl border-white/20"
            data-bg="image"
          >
            {/* Header */}
            <div className="bg-white/10 p-4 flex justify-between items-center border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 bg-white/5">
                    <img
                      src={CHAT_AVATAR_URL}
                      alt="Julia - MEDULIA"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-black/20"></div>
                </div>

                <div>
                  <h4 className="text-white font-bold text-sm">Julia z Medulii</h4>
                  <p className="text-white/60 text-xs">Odpowiadam zazwyczaj w 1h</p>
                </div>
              </div>

              <button
                onClick={toggleChat}
                className="text-white/60 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Zamknij czat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="p-4 flex flex-col gap-4 max-h-[300px] overflow-y-auto no-scrollbar">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-2 ${msg.from === 'user' ? 'justify-end' : ''}`}
                >
                  {msg.from === 'bot' && (
                    <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mt-1 bg-white/5 border border-white/10">
                      <img
                        src={CHAT_AVATAR_URL}
                        alt="Julia - MEDULIA"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div
                    className={`rounded-2xl p-3 text-sm shadow-md ${
                      msg.from === 'user'
                        ? 'bg-gradient-to-br from-teal-900/50 to-cyan-900/40 border border-teal-400/30 rounded-tr-none text-white'
                        : 'bg-gradient-to-br from-blue-900/50 to-purple-900/40 border border-blue-400/30 rounded-tl-none text-white/90'
                    }`}
                  >
                    <p>{msg.text}</p>
                  </div>

                  {msg.from === 'user' && (
                    <div className="w-6 h-6 rounded-full bg-teal-900 flex items-center justify-center flex-shrink-0 mt-1 text-white border border-teal-500/30">
                      <User className="w-3 h-3" />
                    </div>
                  )}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* FAQ + CTA */}
            <div className="p-4 pt-0 flex flex-col gap-2 border-t border-white/10 mt-2 bg-transparent">
              <p className="text-white/50 text-xs my-2 uppercase tracking-wider font-bold">
                Częste pytania
              </p>

              <div className="flex flex-col gap-2 max-h-[140px] overflow-y-auto pr-1 no-scrollbar">
                {FAQ.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuestionClick(item)}
                    className="text-left p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 text-xs transition-colors flex items-center justify-between group flex-shrink-0"
                  >
                    {item.q}
                    <Send className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-purple-400 flex-shrink-0 ml-2" />
                  </button>
                ))}
              </div>

              <Link
                to="/kontakt"
                onClick={() => setChatOpen(false)}
                className="w-full py-2.5 mt-2 btn-accent text-white rounded-lg text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-md"
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
