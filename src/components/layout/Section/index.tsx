import { FC } from "react";
import { SectionProps } from "./types";

const Section: FC<SectionProps> = ({ className = "default", children }) => {
  return (
    <section className={className}>
      {children}
    </section>
  );
};

export default Section;
