const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 relative overflow-hidden"
            >
              {/* Pulsing effect for alternating boxes */}
              {i % 2 === 0 && (
                <div className="absolute inset-0 bg-primary/30 animate-pulse rounded-2xl"></div>
              )}

              {/* Shimmer effect */}
              <div
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
                style={{
                  animation: `shimmer 2s infinite ${i * 0.2}s`,
                }}
              ></div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>

        <style jsx>{`
          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default AuthImagePattern;
