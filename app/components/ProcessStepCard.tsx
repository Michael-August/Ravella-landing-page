import Image from "next/image";

interface ProcessStepCardProps {
  number: string;
  title: string;
  description: string;
  variant: "discover" | "register" | "understand" | "refer";
}

export const ProcessStepCard = ({
  title,
  description,
  variant,
}: ProcessStepCardProps) => {
  const imageMap = {
    discover: "/step-one.png",
    register: "/step-two.png",
    understand: "/step-three.png",
    refer: "/step-four.png",
  };

  const isPrimary = variant === "discover";

  return (
    <div
      className={`relative h-full overflow-hidden rounded-2xl border shadow-sm transition
        ${isPrimary ? "shadow-2xl" : "bg-[#F7F7F8]"}
      `}
    >
      {/* Image pinned to top of card */}
      <div className="absolute inset-x-0 top-0 h-32 sm:h-36 lg:h-44">
        <Image
          src={imageMap[variant]}
          alt={`${title} step`}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 128px, (max-width: 1024px) 144px, 176px"
          priority={isPrimary}
        />
      </div>

      {/* Content */}
      <div className="px-6 pb-6 pt-36 sm:pt-40 lg:pt-48">
        <h3 className="mb-2 font-serif text-lg font-semibold text-[#32241B] sm:text-2xl">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground sm:text-lg font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};
