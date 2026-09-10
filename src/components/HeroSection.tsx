interface HeroSectionProps {
  readingTime: number;
}

export default function HeroSection({ readingTime }: HeroSectionProps) {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-parchment-dark to-parchment py-20 md:py-32 px-6">
      {/* Chi-Rho Watermark */}
      <div className="chi-rho-watermark" aria-hidden="true">
        ☧
      </div>

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Small cross ornament */}
        <div className="text-gold text-3xl mb-6" aria-hidden="true">✦</div>

        {/* Subtitle above */}
        <p className="font-heading text-burgundy text-sm md:text-base tracking-[0.3em] uppercase mb-6">
          Báo cáo Thần học
        </p>

        {/* Main Title */}
        <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-6">
          Phẩm giá con người
          <br />
          <span className="text-burgundy">là ân ban của Thiên Chúa</span>
        </h1>

        {/* Ornamental divider */}
        <div className="ornament max-w-xs mx-auto">
          <span className="text-gold text-xl">✝</span>
        </div>

        {/* Subtitle */}
        <p className="font-body opacity-70 text-charcoal text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
          Cội nguồn, Giáo huấn và Những thách đố đương đại
        </p>

        {/* Author & Date & Reading Time */}
        <div className="mt-8 flex flex-col items-center gap-3 text-sm opacity-50 text-charcoal font-body">
          <time dateTime="2025" className="tracking-wider uppercase text-xs">Anno Domini MMXXV</time>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold/30 bg-gold/5">
            <span aria-hidden="true">⏱</span>
            <span>Thời gian đọc ước tính: {readingTime} phút</span>
          </div>
        </div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </header>
  );
}
