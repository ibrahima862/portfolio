
/* ════════════════════════════════════════
   ProjectDetail.tsx  (réutilisé pour Parking, Ecommerce, Logistique)
════════════════════════════════════════ */
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';

import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectDetailProps {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  video:string;
}

export function ProjectDetail({ title, description, images,video, tags, features, liveUrl, githubUrl }: ProjectDetailProps) {
  return (
    <section className="min-h-screen bg-slate-50 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 flex flex-col gap-8">

        {/* Back */}
        <Link to="/#projets"
          className="inline-flex items-center gap-2 text-[13px] font-semibold text-slate-500 hover:text-blue-700 transition-colors w-fit">
          <ArrowLeft size={14} /> Retour aux projets
        </Link>

        {/* Header */}
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">{title}</h1>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-2xl">{description}</p>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <a href={liveUrl}
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-[13px] font-bold rounded-xl transition-colors active:scale-95">
            <ExternalLink size={13} className="text-orange-400" /> Live Demo
          </a>
          <a href={githubUrl}
            className="flex items-center gap-2 px-5 py-2.5 border border-slate-200 bg-white hover:border-blue-300 text-slate-700 text-[13px] font-bold rounded-xl transition-colors active:scale-95">
            <Github size={13} /> Code source
          </a>
        </div>

        {/* Gallery */}
        <div className="grid sm:grid-cols-2 gap-4">
          {images.map((img, i) => (
            <div key={i} className={`overflow-hidden rounded-xl border border-slate-200 ${i === 0 ? 'sm:col-span-2 h-72' : 'h-52'}`}>
              <ImageWithFallback src={img} alt={`${title} ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
         <div className="grid sm:grid-cols-2 gap-4">
          <video src={video} controls className="w-full h-full object-cover rounded-xl" />
        </div>
        {/* Tech + Features */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">Technologies</p>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-blue-50 border border-blue-100 text-blue-700 text-[12px] font-bold rounded-xl">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">Fonctionnalités</p>
            <ul className="flex flex-col gap-2">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-[13px] text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
