import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "Covers the fundamentals of programming, algorithms, and computer systems for beginners.",
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    code: "ENG201",
    name: "Advanced English Composition",
    department: "Humanities",
    description:
      "Focuses on academic writing, argumentation, and research-based essays to refine communication skills.",
      createdAt: new Date().toISOString()
  },
  {
    id: 3,
    code: "BIO110",
    name: "General Biology",
    department: "Biological Sciences",
    description:
      "An introduction to cellular biology, genetics, evolution, and ecology with practical laboratory work.",
    createdAt: new Date().toISOString()
  }
];