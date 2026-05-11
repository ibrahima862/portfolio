
/* ════════════════════════════════════════
   Footer.tsx
════════════════════════════════════════ */
import { Github, Linkedin, Mail, Code2, ArrowUpRight } from 'lucide-react';

const LINKS = [
  { id: 'accueil',     label: 'Accueil'     },
  { id: 'a-propos',   label: 'À propos'    },
  { id: 'competences',label: 'Compétences' },
  { id: 'projets',    label: 'Projets'     },
  { id: 'contact',    label: 'Contact'     },
];

const SOCIALS = [
  { href: 'https://github.com/ibrahima862', Icon: Github,   label: 'GitHub'   },
  { href: 'https://linkedin.com',           Icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:ndoyeibrahima512@gmail.com', Icon: Mail,  label: 'Email'    },
];

export function Footer() {
  const year = new Date().getFullYear();
  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-slate-900 text-white">

      {/* CTA banner */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-6xl">
          <div>
            <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest mb-1">Travaillons ensemble</p>
            <h3 className="text-[22px] font-black text-white tracking-tight">
              Vous avez un projet ?
            </h3>
            <p className="text-[14px] text-white/50 mt-1">Je suis disponible pour des collaborations freelance.</p>
          </div>
          <button onClick={() => scroll('contact')}
            className="shrink-0 flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-[13px] font-bold rounded-xl transition-colors active:scale-95">
            Me contacter <ArrowUpRight size={14} />
          </button>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-6 py-10 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-700 rounded-xl flex items-center justify-center">
                <Code2 size={14} className="text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[15px] font-black tracking-tight">
                Ibra<span className="text-blue-400">Dev</span>
              </span>
            </div>
            <p className="text-[13px] text-white/40 leading-relaxed">
              Développeur Full Stack spécialisé Laravel & React. Je crée des applications web complètes, performantes et bien conçues.
            </p>
            <div className="flex gap-2 mt-1">
              {SOCIALS.map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/[.07] border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all">
                  <Icon size={14} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[11px] font-bold text-white/30 uppercase tracking-widest mb-4">Navigation</p>
            <ul className="flex flex-col gap-2">
              {LINKS.map(({ id, label }) => (
                <li key={id}>
                  <button onClick={() => scroll(id)}
                    className="text-[13px] text-white/50 hover:text-white transition-colors font-medium">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div>
            <p className="text-[11px] font-bold text-white/30 uppercase tracking-widest mb-4">Stack principale</p>
            <div className="flex flex-wrap gap-2">
              {['Laravel', 'React', 'TypeScript', 'MySQL', 'Tailwind', 'REST API'].map(tech => (
                <span key={tech}
                  className="px-2.5 py-1 bg-white/[.07] border border-white/10 rounded-lg text-[11px] font-semibold text-white/50">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/30">
            © {year} IbraDev · Tous droits réservés
          </p>
          <p className="text-[12px] text-white/30">
            Thiès, Sénégal · <a href="mailto:ndoyeibrahima512@gmail.com" className="hover:text-white/60 transition-colors">ndoyeibrahima512@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}