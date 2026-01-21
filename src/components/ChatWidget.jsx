import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User } from 'lucide-react';

const CHAT_AVATAR_URL = "https://images.unsplash.com/photo-1581726690015-c9861fa5057f?w=200";

const FAQ = [
  { q: 'Z jakim wyprzedzeniem można odwołać lub przełożyć lekcję?', a: 'Lekcję można odwołać lub przełożyć najpóźniej dzień wcześniej.' },
  { q: 'Czy w razie choroby dziecka zajęcia można odrobić w innym terminie?', a: 'Tak — w razie choroby spokojnie ustalamy termin odrobienia zajęć.' },
  { q: 'Jak i kiedy rodzic może się z Tobą skontaktować?', a: 'Najlepiej kontaktować się codziennie w godzinach 8:00–20:00.' },
  { q: 'Czy po zajęciach informujesz rodzica o postępach dziecka?', a: 'Tak — jeśli rodzic tego potrzebuje, zawsze informuję o postępach.' },
  { q: 'Czy ustalany jest stały plan zajęć czy elastyczne terminy?', a: 'Pracujemy w stałym planie (regularne terminy).' },
  { q: 'Czy dziecko musi przygotować się do lekcji wcześniej?', a: 'Nie — wszystko tłumaczę na zajęciach i dopasowuję do poziomu ucznia.' },
  { q: 'Jakie formy płatności są dostępne i czy płatność jest z góry czy po zajęciach?', a: 'Płatność: przelew na konto lub BLIK. Płatność z góry przed zajęciami; można też opłacić cały miesiąc. Jeśli kogoś nie będzie — zwracam za odwołaną lekcję zgodnie z ustaleniami.' },
  { q: 'Czy mogę wybrać poziom rozszerzenia czy tylko podstawę?', a: 'Pracuję zarówno z podstawą, jak i rozszerzeniem — dostosowuję do Twoich potrzeb i planu matury.' },
  { q: 'Jaki jest minimalny czas współpracy?', a: 'Nie ma sztywnego minimum — możemy pracować od jednej lekcji, ale polecam co najmniej 2–3 miesiące przed maturą.' },
  { q: 'Czy dostaję materiały do nauki poza zajęciami?', a: 'Tak — po każdych zajęciach dostajesz materiały, notatki i zadania do ćwiczenia.' },
  { q: 'Czy są prace domowe i jak się je sprawdza?', a: 'Zadaję zadania do ćwiczenia, ale nie są obowiązkowe. Jeśli chcesz, mogę je sprawdzić i dać feedback.' },
  { q: 'Ile osób jest w grupie i jak wygląda dynamika?', a: 'Grupy liczą 2–6 osób — to idealna wielkość do wspólnej nauki i motywacji bez chaosu.' },
  { q: 'Jak wygląda pierwsza konsultacja?', a: 'Poznajemy się, diagnozuję Twój poziom, omawiamy cele i układamy plan nauki pod maturę.' }
];

function ChatWidget() {
  const [chatOpen, setChatOpen] = useState(false);
  const [teaserVisible, setTeaserVisible] = useState(false);
  const [unread, setUnread] = useState(true);
  const [messages, setMessages] = useState([
    { from: 'bot', text: '👋 Chętnie odpowiem na Twoje pytania.' }
  ]);
  const [showFAQ, setShowFAQ] = useState(true);
  const chatEndRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTeaserVisible(true);
    }, 15000); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, chatOpen, showFAQ]);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
    if (!chatOpen) {
      setUnread(false);
    }
  };

  const handleQuestionClick = (questionObj) => {
    setMessages(prev => [
      ...prev,
      { from: 'user', text: questionObj.q },
      { from: 'bot', text: questionObj.a }
    ]);
    setShowFAQ(false);
  };

  const resetChat = () => {
    setShowFAQ(true);
  };

  return createPortal(
    <>
      {/* Chat Teaser */}
      <AnimatePresence>
        {teaserVisible && !chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="medulia-chat-teaser !p-3 !rounded-full flex items-center gap-3 shadow-2xl transition-colors backdrop-blur-md cursor-pointer hover:scale-105"
            style={{
              background: 'rgba(124, 77, 255, 0.85)',
              border: '1px solid rgba(200, 150, 255, 0.4)'
            }}
            onClick={toggleChat}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
                <img src={CHAT_AVATAR_URL} alt="Julia - MEDULIA" className="w-full h-full object-cover" />
              </div>
              {unread && (
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-red-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-transparent shadow-sm">1</div>
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
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="medulia-chat-panel glass-panel !p-0 overflow-hidden shadow-2xl border-white/20"
            data-bg="image"
          >
            {/* Chat Header */}
            <div className="bg-white/10 p-4 flex justify-between items-center border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
                    <img src={CHAT_AVATAR_URL} alt="Julia - MEDULIA" className="w-full h-full object-cover" />
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
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Content */}
            <div className="p-4 flex flex-col gap-4 max-h-[300px] overflow-y-auto no-scrollbar">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-2 ${msg.from === 'user' ? 'justify-end' : ''}`}
                >
                  {msg.from === 'bot' && (
                    <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mt-1">
                      <img src={CHAT_AVATAR_URL} alt="Julia - MEDULIA" className="w-full h-full object-cover" />
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

            {/* FAQ Selection / Action Area */}
            {showFAQ ? (
              <div className="p-4 pt-0 flex flex-col gap-2 border-t border-white/10 mt-2 bg-transparent">
                <p className="text-white/50 text-xs my-2 uppercase tracking-wider font-bold">Częste pytania</p>
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
                {/* Fixed CTA at bottom of FAQ */}
                <Link 
                   to="/kontakt"
                   onClick={() => setChatOpen(false)}
                   className="w-full py-2.5 mt-2 btn-accent text-white rounded-lg text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-md"
                 >
                   Skontaktuj się ze mną
                 </Link>
              </div>
            ) : (
              <div className="p-4 pt-0 flex flex-col gap-2 mt-2 border-t border-white/10">
                 <button 
                   onClick={resetChat}
                   className="w-full py-2.5 mt-3 bg-white/10 border border-white/20 text-white rounded-lg text-sm hover:bg-white/15 transition-all"
                 >
                   Zadaj kolejne pytanie
                 </button>
                 <Link 
                   to="/kontakt"
                   onClick={() => setChatOpen(false)}
                   className="w-full py-2.5 btn-accent text-white rounded-lg text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                 >
                   Skontaktuj się ze mną
                 </Link>
              </div>
            )}
            
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    document.body
  );
}

export default ChatWidget;