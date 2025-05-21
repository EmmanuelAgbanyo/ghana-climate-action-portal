
import { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  children?: ReactNode;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  align = "center",
  children 
}: SectionTitleProps) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={`max-w-3xl mb-12 ${alignmentClasses[align]}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ghana-green">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
      {children}
    </div>
  );
};

export default SectionTitle;
