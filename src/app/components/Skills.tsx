
/* ════════════════════════════════════════
   Skills.tsx
════════════════════════════════════════ */
export function Skills() {
  const categories = [
    {
      title: 'Frontend',
      color: 'bg-blue-700',
      skills: [
        { name: 'React',        level: 85 },
        { name: 'TypeScript',   level: 80 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML / CSS',   level: 90 },
      ],
    },
    {
      title: 'Backend',
      color: 'bg-orange-500',
      skills: [
        { name: 'Laravel',     level: 85 },
        { name: 'PHP',         level: 80 },
        { name: 'REST API',    level: 85 },
        { name: 'MySQL',       level: 80 },
      ],
    },
    {
      title: 'Outils',
      color: 'bg-slate-700',
      skills: [
        { name: 'Git / GitHub', level: 80 },
        { name: 'Postman',      level: 85 },
        { name: 'Figma',        level: 75 },
        { name: 'Laragon',      level: 85 },
      ],
    },
  ];

  const tags = ['Axios', 'React Router', 'REST API', 'Responsive Design', 'CRUD avancé', 'Git', 'SPA'];

  return (
    <section id="competences" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-[11px] font-bold text-blue-700 uppercase tracking-widest mb-2">Stack technique</p>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Mes compétences</h2>
            <div className="w-12 h-1 bg-blue-700 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {categories.map(cat => (
              <div key={cat.title} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-blue-200 hover:shadow-[0_4px_16px_rgba(29,78,216,0.08)] transition-all">
                <div className={`${cat.color} px-5 py-3`}>
                  <p className="text-[11px] font-bold text-white/70 uppercase tracking-widest">{cat.title}</p>
                </div>
                <div className="p-5 flex flex-col gap-4">
                  {cat.skills.map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-[13px] font-semibold text-slate-700">{skill.name}</span>
                        <span className="text-[11px] font-bold text-slate-400 font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full ${cat.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {tags.map(tag => (
              <span key={tag}
                className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-[12px] font-semibold text-slate-600 hover:border-blue-300 hover:text-blue-700 transition-all">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
