import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';

const teamMembers = [
  {
    name: 'Lena',
    role: 'Studentka Psychologii',
    image: '/lena.webp',
    bio: 'Nazywam się Lena i jestem studentką psychologii. Biologia od zawsze była dla mnie przedmiotem, który szczególnie mnie interesował, dlatego z przyjemnością pomagam uczniom lepiej ją zrozumieć.\n\nJestem cierpliwa, empatyczna i zawsze staram się stworzyć przyjazną atmosferę, w której można zadawać pytania i popełniać błędy bez stresu. Moim celem jest pokazanie, że nauka biologii wcale nie musi być trudna ani nudna.\n\nPodczas zajęć dostosowuję tempo oraz sposób nauki do indywidualnych potrzeb ucznia. Zależy mi na zrozumieniu procesów i zależności, dzięki czemu biologia staje się prostsza i bardziej logiczna.'
  },
  {
    name: 'Ola',
    role: 'Studentka Kierunku Lekarskiego',
    image: '/ola.webp',
    bio: 'Cześć! Mam na imię Ola i jestem studentką kierunku lekarskiego. Z wielką pasją podchodzę do nauk przyrodniczych i z przyjemnością dzielę się swoją wiedzą z przyszłymi maturzystami.\n\nJestem osobą cierpliwą i spokojną, a praca z ludźmi sprawia mi ogromną satysfakcję. Bardzo lubię obserwować, jak ktoś z czasem zaczyna lepiej rozumieć trudniejsze zagadnienia i nabiera pewności siebie.\n\nPodczas nauki zależy mi na miłej i swobodnej atmosferze, w której można bez obaw zadawać pytania i wspólnie, bez zbędnego stresu, pracować nad materiałem.'
  }
];

const EASE_OUT = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } }
};

export default function TeamSection({ hideTitle = false }) {
  return (
    <div className={hideTitle ? "" : "pt-10 pb-8 mt-12 border-t border-white/10"}>
      {!hideTitle && <SectionTitle className="!mb-10 text-center">Mój Zespół</SectionTitle>}
      
      <div className="grid lg:grid-cols-2 gap-6 items-stretch">
        {teamMembers.map((member, index) => (
          <motion.div 
            key={member.name}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.15 }}
            className="flex flex-col sm:flex-row rounded-2xl bg-white/5 border border-white/10 p-5 md:p-6 gap-5 md:gap-6 hover:bg-white/10 transition-colors h-full"
          >
             {/* ZDJĘCIE */}
             <div className="w-full sm:w-[160px] md:w-[180px] shrink-0">
                <div className="aspect-square md:aspect-[4/5] w-full rounded-xl overflow-hidden bg-black/20 shadow-lg border border-white/10">
                   <img 
                     src={member.image} 
                     alt={`${member.name} - Medulia Team`} 
                     className="w-full h-full object-cover object-center opacity-90 transition-opacity hover:opacity-100"
                     loading="lazy"
                   />
                </div>
             </div>
             
             {/* OPIS */}
             <div className="flex-1 flex flex-col">
               <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
               <div className="text-xs font-semibold text-purple-300 tracking-wide uppercase mb-4">{member.role}</div>
               
               <p className="text-white/80 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                 {member.bio}
               </p>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}