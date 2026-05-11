

/* ════════════════════════════════════════
   Projects.tsx
════════════════════════════════════════ */
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Gestion de Parking',
      path: '/parking',
      description: 'Système de gestion de parking avec suivi des véhicules et des places.',
      image: 'parking/parking1.png',
      tags: ['Laravel', 'React', 'MySQL'],
      features: ['Gestion entrées/sorties', 'CRUD véhicules', 'Base de données MySQL'],
      color: 'bg-blue-700',
    },
    {
      title: 'Plateforme E-commerce',
      path: '/ecommerce',
      description: 'Site e-commerce avec produits, panier et dashboard admin complet.',
      image: 'ecom.png',
      tags: ['Laravel', 'React', 'MySQL'],
      features: ['Gestion produits', 'Panier', 'Interface admin'],
      color: 'bg-orange-500',
    },
  ];

  return (
    <section id="projets" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-[11px] font-bold text-blue-700 uppercase tracking-widest mb-2">Réalisations</p>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Mes projets</h2>
            <div className="w-12 h-1 bg-blue-700 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <Link to={p.path} key={i}
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-blue-200 hover:shadow-[0_8px_28px_rgba(29,78,216,0.1)] transition-all">
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <ImageWithFallback src={p.image} alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                    <h3 className="text-[15px] font-bold text-white">{p.title}</h3>
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                      <ArrowUpRight size={14} className="text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-[13px] text-slate-500 mb-4 leading-relaxed">{p.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-blue-50 border border-blue-100 text-blue-700 text-[11px] font-bold rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ul className="flex flex-col gap-1">
                    {p.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-[12px] text-slate-500">
                        <span className={`w-1.5 h-1.5 rounded-full ${p.color} shrink-0`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

