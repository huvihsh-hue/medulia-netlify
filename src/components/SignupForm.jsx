import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast.jsx';

function SignupForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    city: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const classOptions = [
    '1 LO',
    '2 LO',
    '3 LO',
    '4 LO',
    '1 Technikum',
    '2 Technikum',
    '3 Technikum',
    '4 Technikum',
    'Inne'
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Imię jest wymagane';
    if (!formData.class) newErrors.class = 'Wybierz klasę';
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

    console.log('Form data:', formData);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    toast({
      title: 'Dziękuję!',
      description: 'Wkrótce się do Ciebie odezwę!',
    });

    setTimeout(() => {
      setFormData({
        name: '',
        class: '',
        city: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsSuccess(false);
    }, 3000);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 text-center"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Dziękuję za zgłoszenie!
        </h3>
        <p className="text-gray-700">
          Wkrótce się do Ciebie odezwę!
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Imię <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white text-gray-900 placeholder-gray-400`}
            placeholder="Twoje imię"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="class" className="block text-sm font-medium text-gray-700 mb-2">
            Klasa <span className="text-red-500">*</span>
          </label>
          <select
            id="class"
            name="class"
            value={formData.class}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.class ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white text-gray-900`}
          >
            <option value="">Wybierz klasę</option>
            {classOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.class && <p className="mt-1 text-sm text-red-500">{errors.class}</p>}
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
            Miasto <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.city ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white text-gray-900 placeholder-gray-400`}
            placeholder="Twoje miasto"
          />
          {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white text-gray-900 placeholder-gray-400`}
            placeholder="twoj@email.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Telefon <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white text-gray-900 placeholder-gray-400`}
            placeholder="+48 123 456 789"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Wiadomość (opcjonalnie)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none bg-white text-gray-900 placeholder-gray-400"
            placeholder="Dodatkowe informacje..."
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-accent w-full py-4 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Wysyłanie...
          </>
        ) : (
          'Zapisz się'
        )}
      </button>
    </form>
  );
}

export default SignupForm;
