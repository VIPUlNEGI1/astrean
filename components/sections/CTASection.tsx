'use client';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export default function CTASection({
  title,
  description,
  buttonText,
  onButtonClick,
}: CTASectionProps) {
  return (
    <section className="relative py-24 bg-[#020617]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          {title}
        </h2>
        <p className="text-white/70 text-lg mb-8">{description}</p>
        <button
          onClick={onButtonClick}
          className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg shadow-purple-500/50"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}

