import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useI18n } from '@/hooks/useI18n';

const techs = [
  { name: 'Python', abbr: 'Py' },
  { name: 'JavaScript', abbr: 'JS' },
  { name: 'React', abbr: 'Re' },
  { name: 'FastAPI', abbr: 'FA' },
  { name: 'Java', abbr: 'Ja' },
  { name: 'C++', abbr: 'C+' },
  { name: 'C#', abbr: 'C#' },
  { name: 'Flet', abbr: 'Fl' },
  { name: 'HTML5', abbr: 'H5' },
  { name: 'CSS3', abbr: 'C3' },
  { name: 'Android', abbr: 'An' },
  { name: 'Git', abbr: 'Gt' },
  { name: 'Machine Learning', abbr: 'ML' },
  { name: 'AI', abbr: 'AI' },
];

export default function TechStack() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { lang, t } = useI18n();

  return (
    <section id="tech" className="section-padding bg-[#080c10] border-t border-[rgba(0,230,118,0.08)]">
      <div ref={ref} className="container-main">
        {/* Header */}
        <div className="mb-12 md:mb-14">
          <div className="flex items-baseline gap-4 mb-3">
            <span className={`section-tag transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {t('tech.sectionTag')}
            </span>
            {lang === 'zh' && (
              <span className={`text-[10px] font-bold tracking-[0.2em] text-[#4a5a66] uppercase transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '80ms' }}>
                TECH STACK
              </span>
            )}
          </div>
          <h2 className={`section-title transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
            {t('tech.title')}
          </h2>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-px bg-[rgba(0,230,118,0.08)] border border-[rgba(0,230,118,0.08)]">
          {techs.map((tech, i) => (
            <div
              key={tech.name}
              className={`group bg-[#080c10] p-5 md:p-6 text-center transition-all duration-400 hover:bg-[rgba(0,230,118,0.03)] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${180 + i * 40}ms` }}
            >
              <div className="text-base md:text-lg font-black text-[#00e676] mb-1.5 group-hover:text-[#69f0ae] transition-colors">
                {tech.abbr}
              </div>
              <div className="text-[9px] text-[#8a9ba8] font-bold uppercase tracking-wider">
                {lang === 'zh' ? tech.name : tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
