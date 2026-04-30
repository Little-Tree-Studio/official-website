import { useEffect, useState } from 'react';
import { Menu, X, KeyRound } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';
import siteLogo from '../../logo.png';

export default function Navigation() {
  const { lang, toggleLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.products'), href: '#products' },
    { label: t('nav.tech'), href: '#tech' },
    { label: t('nav.team'), href: '#team' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      const sections = ['about', 'products', 'tech', 'team', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[rgba(8,12,16,0.92)] backdrop-blur-xl border-b border-[rgba(0,230,118,0.1)]' : 'bg-transparent'
      }`}>
        <div className="container-main flex items-center justify-between h-[60px]">
          {/* Logo */}
          <a href="#/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.03]">
              <img src={siteLogo} alt="Little Tree Studio logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-bold text-sm text-[#f0f4f8] tracking-tight">
              {lang === 'zh' ? '小树工作室' : 'LITTLE TREE'}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-3 py-1.5 text-[11px] font-bold transition-colors duration-200 uppercase tracking-[0.12em] ${
                  activeSection === link.href.replace('#', '') ? 'text-[#00e676]' : 'text-[#8a9ba8] hover:text-[#f0f4f8]'
                }`}
              >
                {link.label}
                {activeSection === link.href.replace('#', '') && (
                  <span className="absolute bottom-0 left-2 right-2 h-[1px] bg-[#00e676]" />
                )}
              </button>
            ))}

            {/* Passport CTA */}
            <a
              href="https://auth.zsxiaoshu.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#00e676] border border-[rgba(0,230,118,0.25)] bg-[rgba(0,230,118,0.05)] hover:bg-[rgba(0,230,118,0.12)] hover:border-[rgba(0,230,118,0.4)] transition-all duration-200"
            >
              <KeyRound className="w-3 h-3" />
              {t('nav.passport')}
            </a>

            {/* Lang toggle - minimal */}
            <button
              onClick={() => toggleLang()}
              className="ml-3 text-[10px] font-bold tracking-widest text-[#4a5a66] hover:text-[#00e676] transition-colors uppercase border border-transparent hover:border-[rgba(0,230,118,0.2)] px-2 py-1"
            >
              {lang === 'zh' ? 'EN' : '中'}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://auth.zsxiaoshu.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 border border-[rgba(0,230,118,0.2)] flex items-center justify-center text-[#00e676]"
            >
              <KeyRound className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => toggleLang()}
              className="w-8 h-8 border border-[rgba(0,230,118,0.15)] flex items-center justify-center text-[10px] font-bold text-[#8a9ba8]"
            >
              {lang === 'zh' ? 'EN' : '中'}
            </button>
            <button
              className="w-8 h-8 border border-[rgba(0,230,118,0.15)] flex items-center justify-center text-[#8a9ba8]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-[rgba(8,12,16,0.98)] backdrop-blur-xl transition-all duration-500 lg:hidden ${
        mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-lg font-bold text-[#f0f4f8] hover:text-[#00e676] transition-colors uppercase tracking-[0.15em]"
              style={{
                transitionDelay: mobileOpen ? `${i * 50}ms` : '0ms',
                transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: mobileOpen ? 1 : 0,
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://auth.zsxiaoshu.cn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-[#00e676] border border-[rgba(0,230,118,0.3)] mt-4"
          >
            <KeyRound className="w-4 h-4" />
            {t('nav.passport')}
          </a>
        </div>
      </div>
    </>
  );
}
