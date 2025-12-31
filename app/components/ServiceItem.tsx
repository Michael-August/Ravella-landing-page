import { SectionBadge } from "@/app/components/ui/SectionBadge";

interface ServiceItemProps {
  title: string;
  titleHighlight?: string;
  description?: string;
  comingSoon?: boolean;
  isActive?: boolean;
}

export const ServiceItem = ({
  title,
  titleHighlight,
  description,
  comingSoon = false,
  isActive = false,
}: ServiceItemProps) => {
  return (
    <div className="border-b-2 border-[#6534244D] py-4 sm:py-5">
      <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
        <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-semibold">
          {titleHighlight ? (
            <>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#32241B] to-[#FF9801]">
                {title} {titleHighlight}
              </span>{" "}
            </>
          ) : (
            <span className="text-[#32241B] leading-relaxed">{title}</span>
          )}
        </h3>
        {comingSoon && (
          <SectionBadge variant="coming-soon">Coming soon</SectionBadge>
        )}
      </div>
      {description && isActive && (
        <p className="mt-3 sm:mt-4 text-muted-foreground font-semibold text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg">
          {description}
        </p>
      )}
    </div>
  );
};
