import "./FeatureCard.css";

export default function FeatureCard({ title, text, featured }) {
  return (
    <div
      className={`
      relative
        overflow-hidden
        min-w-[320px]
        max-w-[320px]
        shrink-0
        bg-[#02066F]
        rounded-2xl
        p-6
        shadow-lg
        border
        border-blue-800
        transition
        duration-300
        hover:-translate-y-1
        hover:shadow-xl

        ${featured ? "ai-card" : ""}
        `}
    >
      {featured && (
        <span className="absolute top-3 right-3 bg-white/10 text-white text-xs px-3 py-1 rounded-full">
          AI Powered
        </span>
      )}

      <div className="mb-5">
        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
          <span className="text-white text-xl">$</span>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-blue-100">{text}</p>
    </div>
  );
}
