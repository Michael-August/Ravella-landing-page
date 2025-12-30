interface SectionBadgeProps {
  children: React.ReactNode;
  variant?: "default" | "coming-soon" | "automated";
}

export const SectionBadge = ({
  children,
  variant = "default",
}: SectionBadgeProps) => {
  if (variant === "coming-soon") {
    return (
      <span className="
        inline-flex items-center rounded-full border
        px-2 py-0.5 sm:px-2.5 sm:py-0.5
        text-[10px] sm:text-xs md:text-sm
        font-medium
        bg-[#FEF4C7] text-[#B45309] border-[#B453091A]
      ">
        {children}
      </span>
    );
  }

  if (variant === "automated") {
    return (
      <span className="
        inline-flex items-center rounded-full shadow-sm
        px-3 py-1 sm:px-4 sm:py-1.5
        text-xs sm:text-sm md:text-base
        font-sans font-medium text-white
        bg-[#FAF8F51A]
      ">
        {children}
      </span>
    );
  }

  return (
    <span className="
      inline-flex items-center rounded-full shadow-sm
      px-3 py-1 sm:px-4 sm:py-1.5
      text-xs sm:text-sm md:text-base
      font-sans font-medium text-ravella-brown
      bg-ravella-brown/20
    ">
      {children}
    </span>
  );
};
