
/* ════════════════════════════════════════
   About.tsx
════════════════════════════════════════ */
import { Code2, Palette, Rocket, Users } from 'lucide-react';

export function About() {
  const highlights = [
    { icon: Code2,   title: 'Full Stack',    description: 'Backend Laravel + frontend React' },
    { icon: Palette, title: 'UI / UX',       description: 'Interfaces modernes Tailwind CSS' },
    { icon: Rocket,  title: 'Performance',   description: 'Optimisation requêtes et composants' },
    { icon: Users,   title: 'Projets réels', description: 'Logistique, parking et e-commerce' },
  ];

  const stats = [
    { value: '3+', label: 'Projets complets' },
    { value: '100%', label: 'Autonome' },
    { value: 'Full Stack', label: 'Laravel + React' },
  ];

  return (
    <section id="a-propos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-[11px] font-bold text-blue-700 uppercase tracking-widest mb-2">Qui suis-je ?</p>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">À propos de moi</h2>
            <div className="w-12 h-1 bg-blue-700 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-14 items-center mb-14">
            <div>
              <p className="text-[15px] text-slate-500 leading-relaxed mb-5">
                Développeur Full Stack spécialisé en <strong className="text-slate-700">Laravel</strong> et <strong className="text-slate-700">React</strong>, je conçois des applications web complètes de A à Z — du backend à l'interface utilisateur.
              </p>
              <p className="text-[15px] text-slate-500 leading-relaxed mb-8">
                J'ai réalisé plusieurs projets concrets : plateforme de suivi logistique, système de gestion de parking, et site e-commerce complet. Mon objectif : créer des solutions utiles, performantes et bien structurées.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {stats.map(s => (
                  <div key={s.label} className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-center">
                    <p className="text-[20px] font-black text-blue-700 leading-none">{s.value}</p>
                    <p className="text-[11px] text-slate-400 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, title, description }) => (
                <div key={title} className="bg-slate-50 border border-slate-100 rounded-xl p-5 hover:border-blue-200 hover:shadow-[0_2px_12px_rgba(29,78,216,0.07)] transition-all">
                  <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center mb-3">
                    <Icon size={16} className="text-white" strokeWidth={2} />
                  </div>
                  <p className="text-[13px] font-bold text-slate-800 mb-1">{title}</p>
                  <p className="text-[12px] text-slate-500">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

