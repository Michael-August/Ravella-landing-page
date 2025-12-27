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
  isActive = false 
}: ServiceItemProps) => {
  return (
    <div className="border-b-2 border-[#6534244D] py-5">
      <div className="flex items-center gap-3">
        <h3 className="font-serif text-xl md:text-2xl font-semibold">
          {titleHighlight ? (
            <>
              <span className="text-foreground">{title}</span>{" "}
              <span className="text-primary">{titleHighlight}</span>
            </>
          ) : (
            <span className="text-[#32241B] leading-relaxed">{title}</span>
          )}
        </h3>
        {comingSoon && <SectionBadge variant="coming-soon">Coming soon</SectionBadge>}
      </div>
      {description && isActive && (
        <p className="mt-4 text-muted-foreground font-semibold text-lg lg:text-xl leading-relaxed max-w-lg">
          {description}
        </p>
      )}
    </div>
  );
};
