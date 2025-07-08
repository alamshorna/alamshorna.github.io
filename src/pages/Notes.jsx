import React from 'react';
import { Link } from 'react-router-dom'; // if using react-router
import '../styles/Notes.css'; 
const semesters = [
  {
    name: "Spring 2022",
    classes: [
      { name: "18.100B (Real Analysis)", file: "18.100B.md" },
      { name: "6.006 (Introduction to Algorithms)", file: "6.006.md" },
      { name: "8.02 (Electricity and Magnetism)", file: "8.02.md" }
    ],
  },
  {
    name: "Fall 2022",
    classes: [
      { name: "6.009 (Introduction to Programming)", file: "6.009.md" },
      { name: "6.004 (Computation Structures)", file: "6.004.md" },
      { name: "6.008 (Introduction to Inference)", file: "6.008.md" },
    ],
  },
  {
    name: "Spring 2023",
    classes: [
      { name: "18.413 (Bioinformatic Algorithms)", file: "18.413.md" },
      { name: "6.046 (Design and Analysis of Algorithms)", file: "6.046.md" },
      { name: "6.033 (Computer System Engineering)", file: "6.033.md" },
      { name: "7.05 (Biochemistry)", file: "7.05.md" },
    ],
  },
  {
    name: "Fall 2023",
    classes: [
      { name: "6.1810 (Operating Systems)", file: "6.1810.md" },
      { name: "6.s898 (Deep Learning)", file: "6.s898.md" },
      { name: "21M.385/6.4550 (Interactive Music Systems)", file: "21M.385_6.4550.md" },
      { name: "18.404 (Theory of Computation)", file: "18.404.md" },
    ],
  },
  {
    name: "Spring 2024",
    classes: [
      { name: "6.031 (Software Construction)", file: "6.031.md" },
      { name: "6.8300 (Computer Vision)", file: "6.8300.md" },
      { name: "18.212 (Algebraic Combinatorics)", file: "18.212.md" },
      { name: "7.23 (Immunology)", file: "7.23.md" },
      { name: "7.08 (Principles of Chemical Biology)", file: "7.08.md" },
      { name: "21M.383 (Computational Music Theory)", file: "21M.383.md" },
    ],
  },
  {
    name: "Spring 2025",
    classes: [
      { name: "6.7930 (ML for Healthcare)", file: "6.7930.md" },
      { name: "7.26 (Molecular Basis of Infectious Disease)", file: "7.26.md" },
      { name: "7.03 (Genetics)", file: "7.03.md" },
      { name: "6.s899 (Symmetry for ML) - Listener", file: "6.s899.md" },
      { name: "17.315 (Health Policy)", file: "17.315.md" },
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
        I've ommitted most of the humanities classes I have taken, for which I generally didn't take detailed notes.</p>
      
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