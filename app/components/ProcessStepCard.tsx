import { StepNumber } from "@/app/components/ui/StepNumber";
import { ConnectorDot } from "@/app/components/ui/ConnectorDot";

interface ProcessStepCardProps {
  number: string;
  title: string;
  description: string;
  variant: "discover" | "register" | "understand" | "refer";
}

export const ProcessStepCard = ({ number, title, description, variant }: ProcessStepCardProps) => {
  const renderConnectorShape = () => {
    switch (variant) {
      case "discover":
        return (
          <div className="relative w-full h-28 mb-2">
            {/* Top right corner bracket - L shape */}
            <div className="absolute top-0 right-4 w-20 h-12">
              <svg viewBox="0 0 80 48" fill="none" className="w-full h-full" strokeWidth="1.5">
                <path 
                  d="M80 2 L80 38 Q80 46 72 46 L0 46" 
                  stroke="hsl(var(--border))" 
                  strokeWidth="1.5" 
                  fill="none" 
                />
              </svg>
            </div>
            {/* Left side vertical line curving right at bottom */}
            <div className="absolute left-4 top-12 w-12 h-20">
              <svg viewBox="0 0 48 80" fill="none" className="w-full h-full">
                <path 
                  d="M2 0 L2 68 Q2 78 12 78 L48 78" 
                  stroke="hsl(var(--border))" 
                  strokeWidth="1.5" 
                  fill="none" 
                />
              </svg>
            </div>
            {/* Bottom dots and number */}
            <div className="absolute bottom-0 left-32 flex items-center gap-2">
              <ConnectorDot />
              <StepNumber number={number} />
            </div>
          </div>
        );
      case "register":
        return (
          <div className="relative w-full mb-2">
            {/* Top connector dots and number */}
            <div className="flex justify-center items-center gap-2 pt-2 mb-4">
              <ConnectorDot />
              <StepNumber number={number} />
              <ConnectorDot />
            </div>
          </div>
        );
      case "understand":
        return (
          <div className="relative w-full mb-2">
            {/* Top connector dots and number */}
            <div className="flex justify-center items-center gap-2 pt-2 mb-4">
              <ConnectorDot />
              <StepNumber number={number} />
              <ConnectorDot />
            </div>
          </div>
        );
      case "refer":
        return (
          <div className="relative w-full h-28 mb-2">
            {/* Top left corner bracket - L shape */}
            <div className="absolute top-0 left-4 w-20 h-12">
              <svg viewBox="0 0 80 48" fill="none" className="w-full h-full">
                <path 
                  d="M0 2 L0 38 Q0 46 8 46 L80 46" 
                  stroke="hsl(var(--border))" 
                  strokeWidth="1.5" 
                  fill="none" 
                />
              </svg>
            </div>
            {/* Right side vertical line curving left at bottom */}
            <div className="absolute right-4 top-12 w-12 h-20">
              <svg viewBox="0 0 48 80" fill="none" className="w-full h-full">
                <path 
                  d="M46 0 L46 68 Q46 78 36 78 L0 78" 
                  stroke="hsl(var(--border))" 
                  strokeWidth="1.5" 
                  fill="none" 
                />
              </svg>
            </div>
            {/* Bottom dots and number */}
            <div className="absolute bottom-0 right-36 flex items-center gap-2">
              <StepNumber number={number} />
              <ConnectorDot />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-card rounded-2xl p-6 border shadow-md">
      {renderConnectorShape()}
      <h3 className="font-serif text-xl font-semibold text-ravella-brown mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};
