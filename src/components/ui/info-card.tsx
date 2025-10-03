import { ReactNode } from 'react';

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function InfoCard({ icon, title, description }: InfoCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 sm:p-8 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-300">
      <div className="mb-4 text-3xl sm:text-4xl">{icon}</div>
      <h3
        className="text-base sm:text-lg md:text-xl font-light mb-2 sm:mb-3 tracking-wide"
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        {title}
      </h3>
      <p
        className="text-sm md:text-base text-gray-600 font-light leading-relaxed"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {description}
      </p>
    </div>
  );
}
