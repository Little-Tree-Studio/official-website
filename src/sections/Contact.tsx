import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useI18n } from '@/hooks/useI18n';
import { Mail, Github, KeyRound, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const { lang, t } = useI18n();

  const contacts = [
    {
      icon: Mail,
      label: t('contact.email.label'),
      value: t('contact.email.value'),
      action: t('contact.email.action'),
      href: 'mailto:studio@zsxiaoshu.cn',
    },
    {
      icon: Github,
      label: t('contact.github.label'),
      value: t('contact.github.value'),
      action: t('contact.github.action'),
      href: 'https://github.com/Little-Tree-Studio',
      external: true,
    },
    {
      icon: KeyRound,
      label: t('contact.passport.label'),
      value: t('contact.passport.value'),
      action: t('contact.passport.action'),
      href: 'https://auth.zsxiaoshu.cn',
      external: true,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-[#080c10] border-t border-[rgba(0,230,118,0.08)]">
      <div ref={ref} className="container-main">
        <div className="max-w-[680px]">
          {/* Header */}
          <div className="mb-10 md:mb-12">
            <div className="flex items-baseline gap-4 mb-3">
              <span className={`section-tag transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                {t('nav.contact')}
              </span>
              {lang === 'zh' && (
                <span className={`text-[10px] font-bold tracking-[0.2em] text-[#4a5a66] uppercase transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '80ms' }}>
                  CONTACT
                </span>
              )}
            </div>
            <h2 className={`section-title mb-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
              {t('contact.title')}
            </h2>
            <p className={`section-subtitle transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '180ms' }}>
              {t('contact.subtitle')}
            </p>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(0,230,118,0.08)] border border-[rgba(0,230,118,0.08)]">
          {contacts.map((contact, i) => {
            const Icon = contact.icon;
            const isPassport = contact.label === t('contact.passport.label');
            return (
              <a
                key={String(contact.label)}
                href={contact.href}
                target={contact.external ? '_blank' : undefined}
                rel={contact.external ? 'noopener noreferrer' : undefined}
                className={`group bg-[#080c10] p-6 md:p-8 transition-all duration-400 hover:bg-[rgba(0,230,118,0.02)] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + i * 120}ms` }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-10 h-10 border flex items-center justify-center ${
                    isPassport ? 'border-[#00e676] bg-[rgba(0,230,118,0.08)]' : 'border-[rgba(0,230,118,0.15)] bg-[rgba(0,230,118,0.03)]'
                  }`}>
                    <Icon className={`w-4 h-4 ${isPassport ? 'text-[#00e676]' : 'text-[#8a9ba8]'}`} />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#4a5a66] group-hover:text-[#00e676] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <div className="text-[9px] font-bold text-[#4a5a66] uppercase tracking-wider mb-1">
                  {contact.label}
                </div>
                <div className="text-sm font-bold text-[#f0f4f8] mb-4">{contact.value}</div>

                <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider ${
                  isPassport ? 'text-[#00e676]' : 'text-[#8a9ba8] group-hover:text-[#00e676]'
                } transition-colors`}>
                  {contact.action}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
