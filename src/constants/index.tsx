import { Home, BookOpen, GraduationCap } from "lucide-react";
//URLS
export const BACKEND_BASE_URL =  import.meta.env.VITE_BACKEND_BASE_URL ?? '';


//DEPARTMENTS
export const DEPARTMENTS = [
    "Computer Science",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "History",
    "Geography",
    "Economics",
    "Business Administration",
    "Engineering",
    "Psychology",
    "Sociology",
    "Political Science",
    "Philosophy",
    "Education",
    "Fine Arts",
    "Music",
    "Physical Education",
    "Law",
] as const;

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) => ({
    value: dept,
    label: dept,
}));

//SUBJECTS

export const subjects = [
    {
        id: 1,
        name: "Mathematics",
        code: "MATH",
    },
    {
        id: 2,
        name: "Computer Science",
        code: "CS",
    },
    {
        id: 3,
        name: "Physics",
        code: "PHY",
    },
    {
        id: 4,
        name: "Chemistry",
        code: "CHEM",
    },
];

//Resources

export const resources = [
    {
    name:'dashboard',
    list: '/',
    meta:{
        label:'Home', 
        icon:<Home/>
    }
    },
    {
    name:'subjects',
    list: '/subjects',
    create: '/subjects/create',
    meta:{
        label:'Subjects', 
        icon:<BookOpen/>}
    },
    {
    name:'classes',
    list: '/classes',
    create: '/classes/create',
    meta:{
        label:'Classes', 
        icon:<GraduationCap/>}
    }
]

export const teachers = [
    {
        id: "1",
        name: "John Doe",
    },
    {
        id: "2",
        name: "Jane Smith",
    },
    {
        id: "3",
        name: "Dr. Alan Turing",
    },
];
