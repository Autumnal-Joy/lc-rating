import { StudyPlan } from "@/types";
import React from "react";

interface SectionContainerProps {
  section: StudyPlan.Section;
}

const SectionContainer = React.memo(({ section }: SectionContainerProps) => {
  return <div></div>;
});

SectionContainer.displayName = "SectionContainer";

export { SectionContainer };
