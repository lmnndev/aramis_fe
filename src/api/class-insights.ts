
import { ClassDetails, Student, ClassInsights } from "@/types";
import {BACKEND_BASE_URL} from '../constants/index'
export const getClassInsights: ClassInsights = async ({
  classDetails,
  students,
}: {
  classDetails: ClassDetails;
  students: Student[];
}) => {
  try {
    const res = await fetch(`${BACKEND_BASE_URL}ai/class-insights`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ classDetails, students }),
    });

    if (!res.ok) {
      throw new Error("Failed to fetch AI insights");
    }

    const data = await res.json();

    return data.insight as string;
  } catch (error) {
    console.error("AI Insight Error:", error);
    throw error;
  }
};