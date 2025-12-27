interface SectionBadgeProps {
  children: React.ReactNode;
  variant?: "default" | "coming-soon" | "automated";
}

export const SectionBadge = ({ children, variant = "default" }: SectionBadgeProps) => {
  if (variant === "coming-soon") {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#FEF4C7] text-[#B45309] border border-[#B453091A]">
        {children}
      </span>
    );
  }
  if (variant === "automated") {
    return (
    <span className="inline-flex items-center rounded-full bg-[#FAF8F51A] px-4 py-1.5 mb-6 shadow-sm text-[17px] font-sans text-white font-medium">
      {children}
    </span>
  );
  }

  return (
    <span className="inline-flex items-center rounded-full bg-ravella-brown/20 px-4 py-1.5 mb-6 shadow-sm text-[17px] font-sans text-ravella-brown font-medium">
      {children}
    </span>
  );
};
