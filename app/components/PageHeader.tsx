import React from "react";
import VectorIcon from "./icons/VectorIcon";

export interface TitlePart {
  text: string;
  className?: string;
  gradient?: string;
}

interface PageHeaderProps {
  title?: string;
  titleParts?: TitlePart[];
  breadcrumb?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  titleParts,
  breadcrumb = "Home",
}) => {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#E8D5CC] to-[#F0E0D8] px-6 py-8 lg:px-24 lg:py-12 overflow-hidden">
      {/* Decorative wavy background */}
      <div className="absolute bottom-0 left-0">
        <img
          src="/page-header.png"
          alt="page header background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Top decorative curved shape */}
      <div className="absolute top-0 right-0 opacity-30 pointer-events-none">
        <VectorIcon className="w-full h-full" fill="#8B6F5E" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* <div className="mb-2 xs:mb-3">
          <p className="text-[#6B5450] text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium tracking-wide xs:tracking-normal">
            {breadcrumb}
          </p>
        </div> */}

        <h3 className="font-display font-semibold leading-tight sm:leading-tight md:leading-none tracking-tight
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-[43px]
              xl:text-[53px]
              text-[#32241B]">
          {titleParts ? (
            <>
              {titleParts.map((part, index) => (
                <span
                  key={index}
                  className={part.className}
                  style={
                    part.gradient
                      ? {
                          background: part.gradient,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }
                      : undefined
                  }
                >
                  {part.text}
                </span>
              ))}
            </>
          ) : (
            title
          )}
        </h3>
      </div>
    </section>
  );
};

export default PageHeader;
