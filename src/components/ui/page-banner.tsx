import Image from 'next/image';

interface PageBannerProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  height?: 'sm' | 'md' | 'lg' | 'xl';
}

export function PageBanner({ imageSrc, title, subtitle, height = 'md' }: PageBannerProps) {
  const heightClasses = {
    sm: 'h-[40vh] min-h-[250px]',
    md: 'h-[50vh] min-h-[350px]',
    lg: 'h-[60vh] min-h-[450px]',
    xl: 'h-[70vh] min-h-[500px]',
  };

  return (
    <section className={`relative ${heightClasses[height]} flex items-end justify-center overflow-hidden`}>
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center text-white pb-8 md:pb-12 lg:pb-16 px-4 max-w-4xl mx-auto">
        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-2 md:mb-3"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="text-sm sm:text-base md:text-lg font-light opacity-90 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
