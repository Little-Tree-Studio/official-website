import { TreePine, Github } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';

export default function Footer() {
  const { t } = useI18n();

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080c] border-t border-[rgba(0,230,118,0.06)]">
      <div className="container-main py-10 md:py-12">
        {/* Main row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border border-[rgba(0,230,118,0.2)] flex items-center justify-center bg-[rgba(0,230,118,0.05)]">
              <TreePine className="w-3 h-3 text-[#00e676]" />
            </div>
            <span className="text-xs font-bold text-[#8a9ba8] uppercase tracking-wider">
              {t('footer.brand')}
            </span>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {/* Anchor links */}
            {[
              { label: t('nav.about'), href: '#about' },
              { label: t('nav.products'), href: '#products' },
              { label: t('nav.tech'), href: '#tech' },
              { label: t('nav.team'), href: '#team' },
            ].map((link) => (
              <button
                key={String(link.label)}
                onClick={() => handleClick(link.href)}
                className="text-[11px] font-bold text-[#4a5a66] hover:text-[#8a9ba8] transition-colors uppercase tracking-wider"
              >
                {link.label}
              </button>
            ))}
            {/* External links */}
            <a
              href="https://docs.zsxiaoshu.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold text-[#4a5a66] hover:text-[#8a9ba8] transition-colors uppercase tracking-wider"
            >
              {t('nav.docs')}
            </a>
            {/* Brand page link */}
            <a
              href="#/brand"
              className="text-[11px] font-bold text-[#4a5a66] hover:text-[#8a9ba8] transition-colors uppercase tracking-wider"
            >
              {t('footer.brand-resources')}
            </a>
          </div>

          {/* Social */}
          <a
            href="https://github.com/Little-Tree-Studio"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 border border-[rgba(0,230,118,0.08)] flex items-center justify-center text-[#4a5a66] hover:text-[#00e676] hover:border-[rgba(0,230,118,0.3)] transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(0,230,118,0.04)] pt-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[10px] text-[#4a5a66] uppercase tracking-wider font-bold">
            {t('footer.copyright')}
          </p>
          <p className="text-[10px] text-[#3a4a56] uppercase tracking-wider">
            {t('footer.slogan')}
          </p>
        </div>
      </div>
    </footer>
  );
}
