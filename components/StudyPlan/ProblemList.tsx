import { StudyPlan } from "@/types";
import React from "react";

interface ProblemListProps {
  problems: StudyPlan.Item[];
}

const ProblemList = React.memo(({ problems }: ProblemListProps) => {
  return <div></div>;
});

ProblemList.displayName = "ProblemList";

export { ProblemList };
