/* ════════════════════════════════════════
   Header.tsx
════════════════════════════════════════ */
import { Menu, X, Code2 } from 'lucide-react';
import { useState, useEffect } from 'react';

const NAV = [
  { id: 'accueil',     label: 'Accueil'      },
  { id: 'a-propos',   label: 'À propos'     },
  { id: 'competences',label: 'Compétences'  },
  { id: 'projets',    label: 'Projets'      },
];

export function Header() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button onClick={() => scroll('accueil')} className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-blue-700 rounded-xl flex items-center justify-center group-hover:bg-blue-800 transition-colors">
              <Code2 size={14} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="text-[15px] font-black text-slate-900 tracking-tight">
              Ibra<span className="text-blue-700">Dev</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map(({ id, label }) => (
              <button key={id} onClick={() => scroll(id)}
                className="px-4 py-2 rounded-xl text-[13px] font-semibold text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all">
                {label}
              </button>
            ))}
            <button onClick={() => scroll('contact')}
              className="ml-2 flex items-center gap-1.5 px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white text-[13px] font-bold rounded-xl transition-colors active:scale-95">
              Contact
            </button>
          </nav>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(v => !v)}
            className="md:hidden w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-blue-300 transition-colors">
            {open ? <X size={16} strokeWidth={2.5} /> : <Menu size={16} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV.map(({ id, label }) => (
              <button key={id} onClick={() => scroll(id)}
                className="px-4 py-3 rounded-xl text-[14px] font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900 text-left transition-colors">
                {label}
              </button>
            ))}
            <button onClick={() => scroll('contact')}
              className="mt-1 px-4 py-3 bg-blue-700 hover:bg-blue-800 text-white text-[14px] font-bold rounded-xl transition-colors text-center active:scale-95">
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

