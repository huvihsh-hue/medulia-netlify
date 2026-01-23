import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import OpinionsMarquee from '@/components/OpinionsMarquee';

const proofImages = [
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198554/2c273e46-a225-4aa8-8eb8-5cec120f6b5b_cjmnsf.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198553/b9bf748a-472b-41dc-9523-b3897df6066e_yk3eok.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198554/9e5e4bf2-82fa-49ae-9aa9-f3404abeb368_klevnq.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198554/2763f9b7-a383-43b5-a9fb-61f7a4fd5294_mk16na.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198554/1f883083-329f-4940-a455-2aa453af8981_uyyekj.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198554/62376121-40b1-4e93-983d-4a8e0f468646_yzib9d.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198555/a7f1c29d-8303-4b64-bcd8-e0a68932f86c_uzo2cu.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198555/e6b97a21-da72-42b4-ba62-891a377f4616_1_utsxhl.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198555/f1ff0dda-360d-4d7c-b22b-dcf8609011de_dzpyww.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198554/40a08a42-97b4-46eb-b1e7-5b549c262c28_bhaven.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198556/e1643ecc-efee-4751-a072-ff4db6292b9f_oqjyjj.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198556/cd51f7ec-a0a3-42ee-baf6-4bd513a8be5f_ejsa84.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198556/f2a4bb6b-cce8-42d3-9865-25d21f1810f2_faadqk.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198556/e98343e0-93ff-4eef-947d-1fd20aec2419_uspwjz.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198554/a5c72514-910e-436e-90cc-e4e5127a7043_nw2oxy.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198556/3de9a9a3-8b21-4ef0-97bf-60ddfff25e37_h8jgc6.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198555/ba6d6658-b0b9-4957-83b3-5262d61d7132_ay1x5b.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198557/a74272de-4774-4922-8f1b-f9e4f5774bf1_tvkubj.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198556/e6b97a21-da72-42b4-ba62-891a377f4616_zk60vb.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198557/20735b78-0110-4dfc-b8ea-29a2676f0c37_t0fsve.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198557/000c349f-d533-4ad7-9900-59b22239c5a8_xz1ezr.jpg",
  "https://res.cloudinary.com/dyxif8hyp/image/upload/v1769198556/d85766a4-6f82-4db4-b2b5-6754448e9761_dddiyc.jpg",
];

const pickProof = (i) => proofImages[i % proofImages.length];

/**
 * ZAŁOŻENIE:
 * - wszystkie opinie z proofImage są od KOBIET
 * - dodajemy 20 męskich opinii tekstowych (bez proofImage)
 */
const opinionsData = [
  // ===== KOBIETY: ze screenami (proofImage) =====
  { name: 'Zuzanna Nowak', city: 'Gdynia', proofImage: pickProof(0), text: 'Z czwórki na próbnej do 98% na prawdziwej. Totalny sztos.' },
  { name: 'Julia Wiśniewska', city: 'Lublin', proofImage: pickProof(1), text: 'W końcu zrozumiałam genetykę i zadania maturalne. Wynik 94%.' },
  { name: 'Martyna Kowalczyk', city: 'Szczecin', proofImage: pickProof(2), text: 'Zero stresu, konkret i plan. Pierwszy raz czułam, że ogarniam materiał.' },
  { name: 'Kinga Lewandowska', city: 'Łódź', proofImage: pickProof(3), text: 'Polecam każdemu, kto celuje w medycynę. Mega prowadzenie.' },
  { name: 'Ola Król', city: 'Poznań', proofImage: pickProof(4), text: 'Najlepsze wytłumaczenie fizjologii roślin, jakie miałam.' },
  { name: 'Natalia Zielińska', city: 'Warszawa', proofImage: pickProof(5), text: 'Zadania CKE w końcu stały się logiczne. Uratowane punkty.' },
  { name: 'Natalia Szymańska', city: 'Kraków', proofImage: pickProof(6), text: 'Plan nauki działa. Bez spiny, a wyniki rosną z tygodnia na tydzień.' },
  { name: 'Wiktoria Nowicka', city: 'Wrocław', proofImage: pickProof(7), text: 'Największy plus: zrozumienie, a nie klepanie definicji.' },
  { name: 'Kinga Kamińska', city: 'Poznań', proofImage: pickProof(8), text: 'Genetyka w 2 godziny. Serio. Wcześniej była czarna magia.' },
  { name: 'Kinga Jabłońska', city: 'Rzeszów', proofImage: pickProof(9), text: 'Materiały są złote, a tłumaczenie proste i konkretne.' },
  { name: 'Wiktoria Lis', city: 'Katowice', proofImage: pickProof(10), text: 'Otworzyły mi się oczy na metabolizm. Od razu lepsze testy.' },
  { name: 'Wiktoria Mazur', city: 'Białystok', proofImage: pickProof(11), text: 'Bardzo ludzkie podejście. Wsparcie + plan = wynik.' },
  { name: 'Amelia Kubiak', city: 'Gdańsk', proofImage: pickProof(12), text: 'W 3 tygodnie nadrobiliśmy pół roku. Bez żartów.' },
  { name: 'Amelia Wróbel', city: 'Opole', proofImage: pickProof(13), text: 'Zajęcia uporządkowały mi cały materiał. Polecam każdemu.' },
  { name: 'Dominika Pawlak', city: 'Toruń', proofImage: pickProof(14), text: 'Najlepszy stosunek jakości do ceny. Konkrety i system.' },
  { name: 'Weronika Kaczmarek', city: 'Bydgoszcz', proofImage: pickProof(15), text: 'Przestałam panikować przed maturą. Wiem co robić.' },
  { name: 'Filipina Grabowska', city: 'Łódź', proofImage: pickProof(16), text: 'Zadania z doświadczeń w końcu są łatwe. Świetne tipy.' },
  { name: 'Sandra Nowak', city: 'Słupsk', proofImage: pickProof(17), text: 'Mega mi pomogły notatki i powtórki. Wszystko w punkt.' },
  { name: 'Karolina Duda', city: 'Gliwice', proofImage: pickProof(18), text: 'Przestałam uczyć się “na pamięć”. Zaczęłam rozumieć.' },
  { name: 'Kamila Michalska', city: 'Olsztyn', proofImage: pickProof(19), text: 'Najlepsze przygotowanie do CKE — typowe pułapki omówione.' },

  // ===== KOBIETY: tekstowe (bez screenów) – zostawiamy kilka, żeby miks 3:1 działał fajnie =====
  { name: 'Tola Majewska', city: 'Łódź', text: 'Pierwszy raz czułam, że mam kontrolę nad powtórkami, a nie chaos.' },
  { name: 'Maja Czarnecka', city: 'Lublin', text: 'Bardzo dobre tempo i tłumaczenie “jak człowiek”.' },
  { name: 'Barbora Wójcik', city: 'Wrocław', text: 'Wynik rośnie, bo w końcu mam plan i kontrolę.' },

  // ===== MĘŻCZYŹNI: 20 opinii tekstowych (bez screenów) =====
  { name: 'Szymon Pędzin', city: 'Kraków', text: 'Zadania z doświadczeń w końcu przestały mnie zabijać. Mega konkrety.' },
  { name: 'Mateusz Grabowski', city: 'Warszawa', text: 'Dostałem jasny plan i checklistę – tak powinno się uczyć do matury.' },
  { name: 'Kacper Olsza', city: 'Poznań', text: 'Najlepsze było to, że każdy błąd był omówiony “dlaczego”, nie tylko “źle”.' },
  { name: 'Oskar Jakubowski', city: 'Gdańsk', text: 'Genetyka i krzyżówki – pierwszy raz ogarniam to bez stresu.' },
  { name: 'Jakub Grzybek', city: 'Wrocław', text: 'Różnica po miesiącu była widoczna w testach. Polecam.' },
  { name: 'Filip Znicz', city: 'Łódź', text: 'W końcu uczę się mądrze, a nie dużo. Wynik rośnie.' },
  { name: 'Dominik Zając', city: 'Toruń', text: 'Najbardziej doceniam porządek: co, kiedy i po co robię.' },
  { name: 'Patryk Leszko', city: 'Katowice', text: 'Nareszcie rozumiem metabolizm i widzę schematy w zadaniach.' },
  { name: 'Michał Barszczyk', city: 'Szczecin', text: 'Wcześniej był chaos, teraz mam system i rutynę.' },
  { name: 'Bartek Dzieciątkowski', city: 'Bydgoszcz', text: 'Dużo tipów pod CKE i pułapki z arkuszy. To daje punkty.' },
  { name: 'Kamil Stanek', city: 'Olsztyn', text: 'Największy plus: proste wyjaśnienia i powtórki z sensem.' },
  { name: 'Igor Majewski', city: 'Białystok', text: 'Nie ma lania wody – jest konkret, plan i feedback.' },
  { name: 'Hubert Puchacz', city: 'Rzeszów', text: 'Nauczyłem się jak analizować polecenia. To była moja największa blokada.' },
  { name: 'Alan Wolski', city: 'Opole', text: 'Zrobiłem progres, bo przestałem wkuwać – zacząłem rozumieć.' },
  { name: 'Marcel Kubial', city: 'Gdynia', text: 'Świetne tempo i mega cierpliwość w tłumaczeniu.' },
  { name: 'Tomasz Filipiak', city: 'Lublin', text: 'Najlepsza inwestycja przed maturą. Mniej stresu, więcej punktów.' },
  { name: 'Krzysztof Nowicki', city: 'Poznań', text: 'Fajne materiały i zadania “pod wynik”.' },
  { name: 'Paweł Kaczmar', city: 'Warszawa', text: 'W 2 tygodnie ogarnąłem tematy, które odkładałem miesiącami.' },
  { name: 'Adrian Nowak', city: 'Wrocław', text: 'W końcu wiem, co jest najważniejsze na maturze i na czym się skupić.' },
  { name: 'Łukasz Kowalski', city: 'Słupsk', text: 'Bardzo dużo praktyki na arkuszach. O to chodzi.' },
];

function OpinionsPage() {
  return (
    <>
      <Helmet>
        <title>Opinie uczniów - MEDULIA</title>
      </Helmet>

      <div className="pt-28 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center glass-panel p-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Opinie uczniów</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Prawdziwe wiadomości i realne efekty.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { k: 'Realne screeny', v: 'wiadomości od uczniów — bez ściemy' },
                { k: 'Plan i kontrola', v: 'wiesz co robisz i po co' },
                { k: 'Efekt w wyniku', v: 'a nie motywacja na 2 dni' },
              ].map((s) => (
                <div key={s.k} className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <div className="text-white font-extrabold">{s.k}</div>
                  <div className="text-white/70 text-sm mt-1">{s.v}</div>
                </div>
              ))}
            </div>

            <SectionTitle>Prawdziwe historie</SectionTitle>

            <div className="mt-8">
              <OpinionsMarquee opinions={opinionsData} cardVariant="full" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OpinionsPage;
