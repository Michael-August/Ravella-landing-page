import React from "react";
import VectorIcon from "./icons/VectorIcon";

interface PageHeaderProps {
  title: string;
  breadcrumb?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  breadcrumb = "Home",
}) => {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#E8D5CC] to-[#F0E0D8] px-6 py-16 lg:px-24 lg:py-20 overflow-hidden">
      {/* Decorative wavy background */}
      <div className="absolute bottom-0 left-0">
        <img
          src="/page-header.png"
          alt="page header background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Top decorative curved shape */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none">
        <VectorIcon className="w-full h-full text-[#653424]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-6">
          <p className="text-[#6B5450] text-sm lg:text-base font-medium">
            {breadcrumb}
          </p>
        </div>

        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#3A241D] leading-tight">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default PageHeader;
