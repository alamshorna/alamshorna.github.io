import React from 'react';
import { Link } from 'react-router-dom'; // if using react-router
import '../styles/Notes.css'; 
const semesters = [
  {
    name: "Spring 2022",
    classes: [
      { name: "Real Analysis (18.100B)", file: "18.100B.md" },
      { name: "Introduction to Algorithms (6.006)", file: "6.006.md" },
      { name: "Electricity and Magnetism (8.02)", file: "8.02.md" }
    ],
  },
  {
    name: "Fall 2022",
    classes: [
      { name: "Introduction to Programming (6.009)", file: "6.009.md" },
      { name: "Computation Structures (6.004)", file: "6.004.md" },
      { name: "Introduction to Inference (6.008)", file: "6.008.md" },
    ],
  },
  {
    name: "Spring 2023",
    classes: [
      { name: "Bioinformatic Algorithms (18.413)", file: "18.413.md" },
      { name: "Design and Analysis of Algorithms (6.046)", file: "6.046.md" },
      { name: "Computer System Engineering (6.033)", file: "6.033.md" },
      { name: "Biochemistry (7.05)", file: "7.05.md" },
    ],
  },
  {
    name: "Fall 2023",
    classes: [
      { name: "Operating Systems (6.1810)", file: "6.1810.md" },
      { name: "Deep Learning (6.s898)", file: "6.s898.md" },
      { name: "Interactive Music Systems (21M.385/6.4550)", file: "21M.385_6.4550.md" },
      { name: "Theory of Computation (18.404)", file: "18.404.md" },
    ],
  },
  {
    name: "Spring 2024",
    classes: [
      { name: "Software Construction (6.031)", file: "6.031.md" },
      { name: "Computer Vision (6.8300)", file: "6.8300.md" },
      { name: "Algebraic Combinatorics (18.212)", file: "18.212.md" },
      { name: "Immunology (7.23)", file: "7.23.md" },
      { name: "Principles of Chemical Biology (7.08)", file: "7.08.md" },
      { name: "Computational Music Theory (21M.383)", file: "21M.383.md" },
    ],
  },
  {
    name: "Spring 2025",
    classes: [
      { name: "ML for Healthcare (6.7930)", file: "6.7930.md" },
      { name: "Molecular Basis of Infectious Disease (7.26)", file: "7.26.md" },
      { name: "Genetics (7.03)", file: "7.03.md" },
      { name: "Symmetry for ML - Listener (6.s899)", file: "6.s899.md" },
      { name: "Health Policy (17.315)", file: "17.315.md" },
    ],
  },
  {
    name: "Fall 2025",
    classes: [
      { name: "Physiology (7.20)", file: "7.20.md" },
      { name: "Organic Chemistry (5.12)", file: "5.12.md" },
      { name: "Reinforcement Learning (6.7290)", file: "6.7290.md" },
      { name: "Introduction to Experimental Biology (7.002)", file: "7.002.md" },
      { name: "Synthetic Biology (20.305)", file: "20.305.md" },
      { name: "Computational Music Theory (21M.385)", file: "21M.385.md" },
    ],
  },
];

function Notes() {
  return (
    <div className="notes-container">
      <h1 className="text-4xl font-bold mb-10">Class Notes</h1>
      <p> This page includes notes for classes I've taken during undergrad! In general, notes for CS and math classes have been typeset in LaTeX
        (those written in green are in-progress). For biology classes, I've left them as handwritten pdf files separated by lecture number.
        Course notes have been organized by semester and are by no means comprehensive. 
        I've omitted most of the humanities classes I have taken, for which I generally didn't take detailed notes.</p>
      
      <p> Note also that I have mostly listed courses with their old Course 6 numbers, especially prior to Fall 2023.
      </p>
        
        {semesters.map((semester, idx) => (
        <div key={idx} className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">{semester.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {semester.classes.map((course, courseIdx) => (
              <div key={courseIdx} className="border p-6 rounded-xl shadow hover:shadow-lg transition">
                <Link
                  to={`/notes/${course.file}`}
                  className="text-2xl font-semibold text-blue-600 hover:underline"
                >
                  {course.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notes;