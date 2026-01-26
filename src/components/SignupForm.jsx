import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast.jsx';

function SignupForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Imię jest wymagane';

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
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: 'Błąd walidacji',
        description: 'Proszę poprawić błędy w formularzu',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    console.log('Form data:', formData);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    toast({
      title: 'Dziękuję!',
      description: 'Wkrótce się do Ciebie odezwę!',
    });

    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSuccess(false);
    }, 3000);
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
        'group relative rounded-xl border',
        hasError ? 'border-red-300/70' : 'border-white/15',
        'bg-white/[0.08]',
        'shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]',
        'backdrop-blur-md',
        'transition-all duration-200',
        'focus-within:border-purple-300/60 focus-within:ring-2 focus-within:ring-purple-400/25',
        'hover:bg-white/[0.10]',
      ].join(' ')}
    >
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/55 group-focus-within:text-white/80 transition-colors">
        <Icon className="w-4 h-4" />
      </div>
      {children}
    </div>
  );

  const inputBase =
    'w-full h-11 pl-10 pr-3 rounded-xl bg-transparent text-white placeholder-white/35 outline-none text-sm';

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-white/12 bg-white/[0.06] backdrop-blur-md p-8 text-center"
      >
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Dziękuję za zgłoszenie!</h3>
        <p className="text-white/80">Wkrótce się do Ciebie odezwę!</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-left">
      <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-xs text-white/70">
        Wypełnienie formularza nie zobowiązuje — odezwę się w ciągu{' '}
        <span className="text-white/90 font-semibold">24h</span>.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Imię ucznia" required error={errors.name}>
          <ControlShell icon={User} hasError={!!errors.name}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={inputBase}
              placeholder="Np. Ola"
              autoComplete="given-name"
            />
          </ControlShell>
        </Field>

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

        <div className="md:col-span-2">
          <Field label="Wiadomość (opcjonalnie)" error={errors.message}>
            <ControlShell icon={MessageSquare} hasError={!!errors.message}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full min-h-[110px] pl-10 pr-3 py-3 rounded-xl bg-transparent text-white placeholder-white/35 outline-none text-sm resize-none"
                placeholder="Cześć! Jestem uczniem/uczennicą 4 LO. Przygotowuję się do matury z biologii (poziom: rozszerzenie) w 2027r. Mój cel to 80%."
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
          'Zarezerwuj miejsce'
        )}
      </button>

      <p className="text-[11px] text-white/55 text-center">
        Klikając „Zarezerwuj miejsce” potwierdzasz, że chcesz kontaktu w sprawie zajęć.
      </p>
    </form>
  );
}

export default SignupForm;
