import { Home, BookOpen, GraduationCap } from "lucide-react";
//URLS
export const BACKEND_BASE_URL =  import.meta.env.VITE_BACKEND_BASE_URL ?? '';
export const CLOUDINARY_NAME = import.meta.env.VITE_CLOUDINARY_NAME ?? '';
export const CLOUDINARY_PRESET = import.meta.env.VITE_CLOUDINARY_PRESET ?? '';
export const CLOUDINARY_PRESETUNSIGNED = import.meta.env.VITE_CLOUDINARY_PRESETUNSIGNED ?? '';
export const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_UPLOADURL ?? '';
export const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_NAME ?? '';
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
    show: "/classes/show/:id",
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
