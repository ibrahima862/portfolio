/* ════════════════════════════════════════
   Hero.tsx
════════════════════════════════════════ */
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center bg-slate-50 pt-20 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-orange-100/40 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

          {/* Text */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[12px] font-bold text-blue-700 uppercase tracking-widest">Disponible pour des projets</span>
            </div>

            <div>
              <p className="text-[15px] font-semibold text-slate-400 mb-2">Bonjour, je suis Ibrahima</p>
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
                Développeur<br />
                <span className="text-blue-700">Full Stack</span>
              </h1>
            </div>

            <p className="text-[15px] text-slate-500 leading-relaxed max-w-md">
              Je développe des applications web complètes avec <strong className="text-slate-700">Laravel</strong> et <strong className="text-slate-700">React</strong>. Plateforme logistique, gestion de parking, e-commerce — des projets concrets, de A à Z.
            </p>

            <div className="flex gap-3 pt-2">
              <button onClick={() => scroll('projets')}
                className="flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white text-[13px] font-bold rounded-xl transition-all active:scale-95">
                <Sparkles size={14} className="text-orange-400" /> Voir mes projets
              </button>
              <button onClick={() => scroll('contact')}
                className="flex items-center gap-2 px-6 py-3 border border-slate-200 bg-white hover:border-blue-300 text-slate-700 text-[13px] font-bold rounded-xl transition-all active:scale-95">
                Me contacter
              </button>
            </div>

            <div className="flex gap-2 pt-2">
              {[
                { href: 'https://github.com/ibrahima862', Icon: Github },
                { href: 'https://linkedin.com', Icon: Linkedin },
                { href: 'mailto:ndoyeibrahima512@gmail.com', Icon: Mail },
              ].map(({ href, Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:text-blue-700 flex items-center justify-center text-slate-500 transition-all">
                  <Icon size={16} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-blue-200/30 rounded-2xl transform rotate-3 scale-95" />
            <div className="absolute inset-0 bg-orange-200/20 rounded-2xl transform -rotate-2 scale-95" />
            <ImageWithFallback src="myimage.jpeg" alt="Ibrahima Ndoye"
              className="relative rounded-2xl shadow-2xl w-full max-w-sm h-[480px] object-cover border-4 border-white" />
            <div className="absolute -bottom-4 -right-4 bg-white border border-slate-200 rounded-2xl px-4 py-3 shadow-lg">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Stack</p>
              <p className="text-[13px] font-bold text-slate-800">Laravel · React · MySQL</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown size={20} className="text-slate-400" />
        </div>
      </div>
    </section>
  );
}
