import { useEffect, useState } from 'react';
import { TreePine, ArrowLeft, Download, ExternalLink, FileText, Shield } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';
import siteLogo from '../../logo.png';

export default function Brand() {
  const { lang, t } = useI18n();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const isZh = lang === 'zh';

  return (
    <div className="relative min-h-screen">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\'%3E%3Cg fill=\'%2300e676\' fill-opacity=\'0.02\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />

      <div className="relative z-10">
        {/* Header Bar */}
        <div className="border-b border-[rgba(0,230,118,0.08)]">
          <div className="container-main h-[60px] flex items-center justify-between">
            <a href="#/" className="flex items-center gap-2 text-[#8a9ba8] hover:text-[#00e676] transition-colors text-xs font-bold uppercase tracking-wider">
              <ArrowLeft className="w-3.5 h-3.5" />
              {isZh ? '返回首页' : 'Back to Home'}
            </a>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#4a5a66] uppercase">
              {isZh ? '品牌资源' : 'BRAND ASSETS'}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="container-main py-16 md:py-24">
          {/* Page Title */}
          <div className={`mb-16 md:mb-20 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#00e676] uppercase border border-[rgba(0,230,118,0.2)] px-3 py-1.5 bg-[rgba(0,230,118,0.05)]">
                {isZh ? '品牌资源' : 'BRAND'}
              </span>
              {isZh && (
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#4a5a66] uppercase">
                  BRAND ASSETS
                </span>
              )}
            </div>
            <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-black text-[#f0f4f8] tracking-[-0.02em] leading-tight mb-3">
              {isZh ? '小树工作室品牌资源' : 'Little Tree Studio Brand Assets'}
            </h1>
            <p className="text-[#8a9ba8] text-sm md:text-base max-w-[560px]">
              {isZh
                ? '下载并使用我们的官方品牌标识。使用这些资源即表示您同意遵守 LTS-OVAL 许可协议。'
                : 'Download and use our official brand identity. By using these assets, you agree to comply with the LTS-OVAL License.'}
            </p>
          </div>

          {/* Logo Download Section */}
          <div className={`mb-16 md:mb-20 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '150ms' }}>
            <h2 className="text-sm font-bold text-[#f0f4f8] uppercase tracking-wider mb-6 flex items-center gap-2">
              <TreePine className="w-4 h-4 text-[#00e676]" />
              {isZh ? '官方 Logo' : 'Official Logo'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Logo Preview Card */}
              <div className="border border-[rgba(0,230,118,0.1)] bg-[rgba(0,230,118,0.02)] p-8 md:p-12 flex items-center justify-center min-h-[240px]">
                <div className="text-center">
                  <div className="w-32 h-32 flex items-center justify-center mx-auto mb-4 drop-shadow-[0_0_30px_rgba(0,230,118,0.12)]">
                    <img src={siteLogo} alt="Little Tree Studio logo preview" className="w-full h-full object-contain" />
                  </div>
                  <p className="text-xs font-bold text-[#f0f4f8] uppercase tracking-wider">
                    {isZh ? '小树工作室' : 'Little Tree Studio'}
                  </p>
                  <p className="text-[10px] text-[#4a5a66] uppercase tracking-wider mt-1">
                    Logo Preview
                  </p>
                </div>
              </div>

              {/* Download & Info Card */}
              <div className="border border-[rgba(0,230,118,0.1)] p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#f0f4f8] mb-2">
                    {isZh ? 'Logo PNG' : 'Logo PNG'}
                  </h3>
                  <p className="text-sm text-[#8a9ba8] mb-6">
                    {isZh
                      ? '透明背景 PNG 格式，适用于数字媒体和演示文稿。'
                      : 'Transparent background PNG format, suitable for digital media and presentations.'}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm text-[#8a9ba8]">
                      <span className="text-[10px] font-bold text-[#4a5a66] uppercase tracking-wider w-16">{isZh ? '格式' : 'Format'}</span>
                      <span className="text-[#f0f4f8] font-medium">PNG</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#8a9ba8]">
                      <span className="text-[10px] font-bold text-[#4a5a66] uppercase tracking-wider w-16">{isZh ? '背景' : 'BG'}</span>
                      <span className="text-[#f0f4f8] font-medium">{isZh ? '透明' : 'Transparent'}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#8a9ba8]">
                      <span className="text-[10px] font-bold text-[#4a5a66] uppercase tracking-wider w-16">{isZh ? '用途' : 'Usage'}</span>
                      <span className="text-[#f0f4f8] font-medium">{isZh ? '数字媒体 / 网页' : 'Digital / Web'}</span>
                    </div>
                  </div>
                </div>

                <a
                  href={siteLogo}
                  download="little-tree-studio-logo.png"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#00e676] text-[#080c10] font-bold uppercase tracking-wider text-xs hover:shadow-[0_0_25px_rgba(0,230,118,0.25)] transition-all duration-300"
                >
                  <Download className="w-3.5 h-3.5" />
                  {isZh ? '下载 Logo' : 'Download Logo'}
                </a>
              </div>
            </div>
          </div>

          {/* License Section */}
          <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
            <h2 className="text-sm font-bold text-[#f0f4f8] uppercase tracking-wider mb-6 flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#00e676]" />
              {isZh ? '使用许可' : 'License'}
            </h2>

            <div className="border border-[rgba(0,230,118,0.12)] bg-[rgba(0,230,118,0.02)] p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 border border-[rgba(0,230,118,0.2)] flex items-center justify-center bg-[rgba(0,230,118,0.05)] flex-shrink-0">
                  <FileText className="w-4 h-4 text-[#00e676]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#f0f4f8] mb-1">
                    Little Tree Studio Original Visual Assets License
                  </h3>
                  <p className="text-[10px] font-bold tracking-[0.15em] text-[#00e676] uppercase">
                    LTS-OVAL
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#8a9ba8] leading-relaxed mb-6">
                {isZh
                  ? '小树工作室的所有品牌视觉资产（包括但不限于 Logo、图标、配色方案）均受 LTS-OVAL 许可协议保护。下载和使用这些资源即表示您同意遵守该协议的所有条款。请勿修改、扭曲或重新着色 Logo。如有疑问，请联系我们。'
                  : 'All brand visual assets of Little Tree Studio (including but not limited to logos, icons, and color schemes) are protected by the LTS-OVAL License. Downloading and using these assets indicates your agreement to comply with all terms of this license. Do not modify, distort, or recolor the logo. Contact us if you have any questions.'}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://docs.zsxiaoshu.cn/en/terms/studio/oval/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-[rgba(0,230,118,0.25)] text-[#00e676] font-bold uppercase tracking-wider text-xs hover:border-[#00e676] hover:bg-[rgba(0,230,118,0.08)] transition-all duration-300"
                >
                  <ExternalLink className="w-3 h-3" />
                  {isZh ? '查看完整协议' : 'View Full License'}
                </a>
                <a
                  href="mailto:studio@zsxiaoshu.cn"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-[rgba(0,230,118,0.1)] text-[#8a9ba8] font-bold uppercase tracking-wider text-xs hover:border-[rgba(0,230,118,0.3)] hover:text-[#f0f4f8] transition-all duration-300"
                >
                  {isZh ? '许可咨询' : 'License Inquiry'}
                </a>
              </div>
            </div>
          </div>

          {/* Usage Guidelines */}
          <div className={`mt-16 md:mt-20 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '450ms' }}>
            <h2 className="text-sm font-bold text-[#f0f4f8] uppercase tracking-wider mb-6">
              {isZh ? '使用规范' : 'Usage Guidelines'}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(0,230,118,0.08)] border border-[rgba(0,230,118,0.08)]">
              {[
                {
                  do: true,
                  zh: '保持 Logo 的原始比例和颜色',
                  en: 'Maintain original proportions and colors',
                },
                {
                  do: true,
                  zh: '在深色背景上使用绿色版本',
                  en: 'Use green version on dark backgrounds',
                },
                {
                  do: true,
                  zh: '保留足够的安全边距',
                  en: 'Maintain adequate clear space around logo',
                },
                {
                  do: false,
                  zh: '修改、扭曲或重新着色',
                  en: 'Modify, distort, or recolor',
                },
                {
                  do: false,
                  zh: '用于暗示官方 endorsement',
                  en: 'Use to imply official endorsement',
                },
                {
                  do: false,
                  zh: '与其他图标或 Logo 组合',
                  en: 'Combine with other icons or logos',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`bg-[#080c10] p-5 transition-all duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${500 + i * 60}ms` }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 uppercase tracking-wider ${
                      item.do
                        ? 'text-[#00e676] border border-[rgba(0,230,118,0.2)]'
                        : 'text-[#ff5252] border border-[rgba(255,82,82,0.2)]'
                    }`}>
                      {item.do ? (isZh ? '应该' : 'DO') : (isZh ? '不应该' : 'DON\'T')}
                    </span>
                  </div>
                  <p className="text-sm text-[#8a9ba8]">{isZh ? item.zh : item.en}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[rgba(0,230,118,0.06)]">
          <div className="container-main py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-[10px] text-[#4a5a66] uppercase tracking-wider font-bold">
              {t('footer.copyright')}
            </p>
            <a
              href="https://docs.zsxiaoshu.cn/en/terms/studio/oval/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-[#4a5a66] hover:text-[#00e676] uppercase tracking-wider font-bold transition-colors"
            >
              LTS-OVAL License
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
