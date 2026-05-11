
/* ════════════════════════════════════════
   Contact.tsx
════════════════════════════════════════ */
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [error,     setError]     = useState('');

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const inp = "w-full py-2.5 px-3.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-gray-300 text-gray-900";
  const lbl = "text-[11px] font-semibold text-gray-500 uppercase tracking-wider";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.includes('@')) { setError('Email invalide'); return; }
    setLoading(true); setError('');
    emailjs.send('service_1pnl5s3', 'template_gejwntg', {
      from_name: formData.name, from_email: formData.email,
      subject: formData.subject, message: formData.message,
    }, 'bqZKQx3_58ifFWgQZ')
      .then(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setLoading(false);
        setTimeout(() => setSubmitted(false), 4000);
      })
      .catch(() => { setError("Erreur lors de l'envoi"); setLoading(false); });
  };

  const contacts = [
    { Icon: Mail,  label: 'Email',        value: 'ndoyeibrahima512@gmail.com', href: 'mailto:ndoyeibrahima512@gmail.com' },
    { Icon: Phone, label: 'Téléphone',    value: '+221 70 917 19 93',          href: 'tel:+221709171993' },
    { Icon: MapPin,label: 'Localisation', value: 'Thiès, Sénégal',             href: undefined },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-[11px] font-bold text-blue-700 uppercase tracking-widest mb-2">Parlons-en</p>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Me contacter</h2>
            <div className="w-12 h-1 bg-blue-700 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Left */}
            <div className="flex flex-col gap-6">
              <p className="text-[15px] text-slate-500 leading-relaxed">
                Toujours ouvert à discuter de nouveaux projets, d'opportunités créatives ou de partenariats.
              </p>

              <div className="flex flex-col gap-3">
                {contacts.map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-200 transition-all">
                    <div className="w-9 h-9 bg-blue-700 rounded-xl flex items-center justify-center shrink-0">
                      <Icon size={15} className="text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{label}</p>
                      {href
                        ? <a href={href} className="text-[13px] font-semibold text-slate-700 hover:text-blue-700 transition-colors">{value}</a>
                        : <p className="text-[13px] font-semibold text-slate-700">{value}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5">
                <p className="text-[13px] font-bold text-slate-700 mb-2">Disponibilité</p>
                <p className="text-[12px] text-slate-500 mb-3">Actuellement disponible pour des projets freelance et collaborations.</p>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-[12px] font-semibold text-slate-600">Disponible pour de nouveaux projets</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-12 text-center">
                  <div className="w-14 h-14 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center">
                    <CheckCircle size={24} className="text-emerald-600" strokeWidth={1.5} />
                  </div>
                  <p className="text-[15px] font-bold text-slate-800">Message envoyé !</p>
                  <p className="text-[13px] text-slate-400">Je vous répondrai dans les meilleurs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {error && (
                    <div className="px-4 py-3 bg-red-50 border border-red-100 rounded-xl text-[12px] font-semibold text-red-600">
                      {error}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className={lbl}>Nom complet</label>
                      <input name="name" value={formData.name} onChange={set} required placeholder="Votre nom" className={inp} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className={lbl}>Email</label>
                      <input type="email" name="email" value={formData.email} onChange={set} required placeholder="votre@email.com" className={inp} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className={lbl}>Sujet</label>
                    <input name="subject" value={formData.subject} onChange={set} required placeholder="Objet de votre message" className={inp} />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className={lbl}>Message</label>
                    <textarea name="message" value={formData.message} onChange={set} required rows={5} placeholder="Votre message..." className={`${inp} resize-none`} />
                  </div>

                  <button type="submit" disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-blue-700 hover:bg-blue-800 text-white text-[13px] font-bold rounded-xl transition-all active:scale-[0.98] disabled:opacity-50">
                    {loading
                      ? <><Loader2 size={14} className="animate-spin" /> Envoi en cours…</>
                      : <><Send size={13} className="text-orange-400" /> Envoyer le message</>
                    }
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}