"use client"

import { useStudyPlan } from "@/hooks/useStudyPlan";

interface StudyPlanProps {
  plan: string;
}

function StudyPlan({ plan }: StudyPlanProps) {
  const { studyPlan, isPending, error } = useStudyPlan(plan);

  return <div>Todo: {plan}</div>;
}

export default StudyPlan;
