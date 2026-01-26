import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle, User, GraduationCap, Layers, MapPin, Mail, Phone, MessageSquare } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast.jsx';

function ContactForm({ hideClass = false }) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    ...(hideClass ? {} : { class: '' }),
    lessonType: '',
    city: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const classOptions = [
    'I Liceum',
    'II Liceum',
    'III Liceum',
    'IV Liceum',
    'I Technikum',
    'II Technikum',
    'III Technikum',
    'IV Technikum',
    'V Technikum',
    'Inne'
  ];

  const lessonTypeOptions = [
    'Online ze mną 1:1',
    'Grupowe ze mną (2–6 osób)',
    'Indywidualne z nauczycielami (online)'
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Imię jest wymagane';
        if (!hideClass && !formData.class) newErrors.class = 'Wybierz klasę';
    if (!formData.lessonType) newErrors.lessonType = 'Wybierz rodzaj zajęć';
    if (!formData.city.trim()) newErrors.city = 'Miasto jest wymagane';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = 'Email jest wymagany';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Nieprawidłowy format email';

    const phoneRegex = /^[\d\s\-\+\(\)]{9,}$/;
    if (!formData.phone.trim()) newErrors.phone = 'Telefon jest wymagany';
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = 'Nieprawidłowy format telefonu';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        title: 'Błąd walidacji',
        description: 'Proszę poprawić błędy w formularzu',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);

try {
  const res = await fetch('/.netlify/functions/send-contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok || !data?.ok) {
    throw new Error(data?.error || 'Nie udało się wysłać wiadomości');
  }

  setIsSuccess(true);

  toast({
    title: 'Dziękuję!',
    description: 'Wkrótce się do Ciebie odezwę!',
  });

} catch (err) {
  toast({
    title: 'Błąd wysyłki',
    description: err?.message || 'Spróbuj ponownie za chwilę',
    variant: 'destructive',
  });
} finally {
  setIsSubmitting(false);
}

    toast({
      title: 'Dziękuję!',
      description: 'Wkrótce się do Ciebie odezwę!',
    });

    setTimeout(() => {
            setFormData({
        name: '',
        ...(hideClass ? {} : { class: '' }),
        lessonType: '',
        city: '',
        email: '',
        phone: '',
        message: ''
      });

      setIsSuccess(false);
    }, 5000);
  };

  const Field = ({ label, required, error, children }) => (
    <div className="space-y-1">
      <label className="block text-xs font-semibold tracking-wide text-white/80">
        {label} {required ? <span className="text-red-300">*</span> : null}
      </label>
      {children}
      {error ? <p className="text-xs text-red-200">{error}</p> : null}
    </div>
  );

  const ControlShell = ({ icon: Icon, children, hasError }) => (
    <div
      className={[
        "group relative rounded-xl border",
        hasError ? "border-red-300/70" : "border-white/15",
        "bg-white/[0.08]",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
        "backdrop-blur-md",
        "transition-all duration-200",
        "focus-within:border-purple-300/60 focus-within:ring-2 focus-within:ring-purple-400/25",
        "hover:bg-white/[0.10]"
      ].join(" ")}
    >
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/55 group-focus-within:text-white/80 transition-colors">
        <Icon className="w-4 h-4" />
      </div>
      {children}
    </div>
  );

  const inputBase =
    "w-full h-11 pl-10 pr-3 rounded-xl bg-transparent text-white placeholder-white/35 outline-none text-sm";

  const selectBase =
    "w-full h-11 pl-10 pr-10 rounded-xl bg-transparent text-white outline-none text-sm appearance-none";

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel text-center py-12"
      >
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Dziękuję za zgłoszenie!</h3>
        <p className="text-white/80">Wkrótce się do Ciebie odezwę!</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-left">
      {/* Górny pasek info (subtelny) */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-xs text-white/70">
        Wypełnij dane — odpiszę w ciągu <span className="text-white/90 font-semibold">24h</span>.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Imię */}
        <Field label="Imię" required error={errors.name}>
          <ControlShell icon={User} hasError={!!errors.name}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={inputBase}
              placeholder="Twoje imię"
              autoComplete="given-name"
            />
          </ControlShell>
        </Field>

                {!hideClass && (
          <>
            {/* Klasa */}
            <Field label="Klasa" required error={errors.class}>
              <ControlShell icon={GraduationCap} hasError={!!errors.class}>
                <select
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  className={selectBase}
                >
                  <option value="" className="select-option">
                    Wybierz klasę
                  </option>
                  {classOptions.map(opt => (
                    <option key={opt} value={opt} className="select-option">
                      {opt}
                    </option>
                  ))}
                </select>

                {/* strzałka */}
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/55">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </ControlShell>
            </Field>
          </>
        )}


        {/* Rodzaj zajęć */}
        <Field label="Rodzaj zajęć" required error={errors.lessonType}>
          <ControlShell icon={Layers} hasError={!!errors.lessonType}>
            <select
              name="lessonType"
              value={formData.lessonType}
              onChange={handleChange}
              className={selectBase}
            >
              <option value="" className="select-option">
                Wybierz rodzaj
              </option>
              {lessonTypeOptions.map(opt => (
                <option key={opt} value={opt} className="select-option">
                  {opt}
                </option>
              ))}
            </select>

            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/55">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </ControlShell>
        </Field>

        {/* Miasto */}
        <Field label="Miasto" required error={errors.city}>
          <ControlShell icon={MapPin} hasError={!!errors.city}>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={inputBase}
              placeholder="Twoje miasto"
              autoComplete="address-level2"
            />
          </ControlShell>
        </Field>

        {/* Email */}
        <Field label="Email" required error={errors.email}>
          <ControlShell icon={Mail} hasError={!!errors.email}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputBase}
              placeholder="twoj@email.com"
              autoComplete="email"
            />
          </ControlShell>
        </Field>

        {/* Telefon */}
        <Field label="Telefon" required error={errors.phone}>
          <ControlShell icon={Phone} hasError={!!errors.phone}>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputBase}
              placeholder="+48 123 456 789"
              autoComplete="tel"
            />
          </ControlShell>
        </Field>

        {/* Wiadomość */}
        <div className="md:col-span-2">
          <Field label="Wiadomość (opcjonalnie)" error={errors.message}>
            <ControlShell icon={MessageSquare} hasError={!!errors.message}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full min-h-[110px] pl-10 pr-3 py-3 rounded-xl bg-transparent text-white placeholder-white/35 outline-none text-sm resize-none"
                placeholder="Cześć! Jestem uczniem/uczennicą 4LO. Przygotowuję się do matury z biologii (poziom: rozszerzenie) w 2027. Mój cel to 80%...."
              />
            </ControlShell>
          </Field>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-accent w-full rounded-xl py-3.5 font-semibold text-white transition-all
                   hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed
                   flex items-center justify-center gap-2"

      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Wysyłanie...
          </>
        ) : (
          'Wyślij zgłoszenie'
        )}
      </button>

      <p className="text-[11px] text-white/55 text-center">
        Klikając „Wyślij zgłoszenie” potwierdzasz, że chcesz kontaktu w sprawie zajęć.
      </p>
    </form>
  );
}

export default ContactForm;
