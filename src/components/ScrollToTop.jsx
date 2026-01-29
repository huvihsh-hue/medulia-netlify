import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // jeśli mamy #hash, przewiń do elementu o tym ID
    if (hash) {
      const id = hash.replace("#", "");
      // daj Reactowi chwilę na render po zmianie route
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: "auto", block: "start" });
          } else {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
          }
        });
      });
      return;
    }

    // bez hash -> normalnie na górę
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}
