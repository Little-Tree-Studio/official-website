import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useI18n } from '@/hooks/useI18n';

const members = [
  {
    key: 'xiaoshu',
    avatar: '/images/team/avatar-xiaoshu.jpg',
    fallback: '小',
    zhName: '小树',
    enName: 'Xiaoshu',
  },
  {
    key: 'kyle',
    avatar: '/images/team/avatar-kyle.jpg',
    fallback: 'K',
    zhName: 'Kyle',
    enName: 'Kyle',
  },
  {
    key: 'wzr',
    avatar: '/images/team/avatar-wzr.jpg',
    fallback: 'WZ',
    zhName: 'wzr',
    enName: 'wzr',
  },
  {
    key: 'sophia',
    avatar: '/images/team/avatar-sophia.jpg',
    fallback: 'S',
    zhName: 'Sophia',
    enName: 'Sophia',
  },
  {
    key: 'sunkouniao',
    avatar: '/images/team/avatar-jellish.jpg',
    fallback: '孙',
    zhName: '孙口鸟',
    enName: 'Jellish',
  },
  {
    key: 'quanlan',
    avatar: '/images/team/avatar-quanlan.jpg',
    fallback: '泉',
    zhName: '泉岚',
    enName: 'Quanlan',
  },
];

export default function Team() {
  const { lang, t } = useI18n();
  const { ref: scrollRef, isVisible: visible } = useScrollAnimation(0.15);

  return (
    <section id="team" className="section-padding bg-[#0e1319] border-t border-[rgba(0,230,118,0.08)]">
      <div ref={scrollRef} className="container-main">
        {/* Header */}
        <div className="mb-12 md:mb-14">
          <div className="flex items-baseline gap-4 mb-3">
            <span className={`section-tag transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
              {t('team.sectionTag')}
            </span>
            {lang === 'zh' && (
              <span className={`text-[10px] font-bold tracking-[0.2em] text-[#4a5a66] uppercase transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '80ms' }}>
                TEAM
              </span>
            )}
          </div>
          <h2 className={`section-title transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
            {t('team.title')}
          </h2>
        </div>

        {/* Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
          {members.map((member, i) => {
            const tags = String(t(`team.${member.key}.tags`)).split(',');
            const displayName = lang === 'zh' ? member.zhName : member.enName;
            return (
              <div
                key={member.key}
                className={`border border-[rgba(0,230,118,0.08)] bg-[rgba(0,230,118,0.015)] p-6 md:p-8 transition-all duration-500 hover:border-[rgba(0,230,118,0.2)] ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${250 + i * 150}ms` }}
              >
                {/* Avatar + Name row */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div className="w-14 h-14 overflow-hidden border border-[#00e676] bg-[rgba(0,230,118,0.06)] flex items-center justify-center">
                      {member.avatar ? (
                        <img src={member.avatar} alt={displayName} className="w-full h-full object-cover" loading="lazy" />
                      ) : (
                        <span className="text-sm font-black tracking-[0.12em] text-[#69f0ae] uppercase">
                          {member.fallback}
                        </span>
                      )}
                    </div>
                    <div className="absolute -top-0.5 -left-0.5 w-2 h-2 border-t border-l border-[#00e676]" />
                    <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-b border-r border-[#00e676]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#f0f4f8] uppercase tracking-wide">{displayName}</h3>
                    <p className="text-[10px] text-[#69f0ae] uppercase tracking-[0.1em] font-bold">
                      {t(`team.${member.key}.role`)}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-[#8a9ba8] text-sm leading-relaxed mb-5">
                  {t(`team.${member.key}.bio`)}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="text-[9px] font-bold px-2 py-0.5 border border-[rgba(0,230,118,0.1)] text-[#69f0ae] uppercase tracking-wider">
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
