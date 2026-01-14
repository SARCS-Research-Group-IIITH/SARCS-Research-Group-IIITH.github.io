/**
 * Teaching Section Component
 * 
 * Purpose: Display courses organized by academic year and semester.
 * Features hierarchical structure with visual styling for faculty names.
 */

import { GraduationCap } from 'lucide-react';

interface Course {
  code: string;
  name: string;
  faculty: string[];
  link?: string | null;
}

interface Semester {
  name: string;
  courses: Course[];
}

interface AcademicYear {
  year: string;
  semesters: Semester[];
}

interface TeachingData {
  academicYears: AcademicYear[];
}

interface TeachingSectionProps {
  data: TeachingData;
}

/**
 * Faculty Name Component
 * Renders faculty name with special styling for Priyesh Shukla (yellow/gold)
 */
function FacultyName({ name, isFirst }: { name: string; isFirst: boolean }) {
  const isPriyesh = name.toLowerCase().includes('priyesh shukla');
  
  return (
    <span
      className={`${
        isPriyesh
          ? 'font-semibold text-amber-600 dark:text-amber-400'
          : 'text-surface-600 dark:text-surface-400'
      } ${!isFirst ? 'ml-1' : ''}`}
    >
      {name}
    </span>
  );
}

/**
 * Semester Tag Component
 * Small tag indicating Monsoon or Spring semester
 */
function SemesterTag({ semester }: { semester: string }) {
  const tagStyles: Record<string, string> = {
    Monsoon: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400',
    Spring: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-400'
  };
  
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${tagStyles[semester] || tagStyles.Spring}`}>
      {semester}
    </span>
  );
}

/**
 * Course Item Component
 * Individual course display with code, name, semester tag, and faculty
 */
function CourseItem({ course, semester }: { course: Course; semester: string }) {
  // Sort faculty to put Priyesh Shukla first
  const sortedFaculty = [...course.faculty].sort((a, b) => {
    const aIsPriyesh = a.toLowerCase().includes('priyesh shukla');
    const bIsPriyesh = b.toLowerCase().includes('priyesh shukla');
    if (aIsPriyesh && !bIsPriyesh) return -1;
    if (!aIsPriyesh && bIsPriyesh) return 1;
    return 0;
  });

  return (
    <li className="group flex items-start gap-3 rounded-lg p-3 transition-all duration-200 hover:bg-surface-100 dark:hover:bg-surface-700/50">
      <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-400" />
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-100 to-indigo-100 px-2.5 py-0.5 text-sm font-bold text-blue-800 dark:from-blue-900/40 dark:to-indigo-900/40 dark:text-blue-300">
            {course.code}
          </span>
          <span className="font-medium text-surface-900 dark:text-surface-100">
            {course.name}
          </span>
          <SemesterTag semester={semester} />
        </div>
        <div className="mt-1.5 flex items-center gap-1.5 text-sm">
          <GraduationCap className="h-3.5 w-3.5 text-surface-400" />
          <span className="text-surface-500 dark:text-surface-500">Instructors:</span>
          {sortedFaculty.map((faculty, index) => (
            <span key={faculty}>
              <FacultyName name={faculty} isFirst={index === 0} />
              {index < sortedFaculty.length - 1 && (
                <span className="text-surface-400">,</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
}

/**
 * Academic Year Section Component
 * Simple heading with courses listed underneath
 */
function AcademicYearSection({ academicYear }: { academicYear: AcademicYear }) {
  // Group semesters: Spring first, then Monsoon, preserving original order within each group
  const springSemesters = academicYear.semesters.filter(s => s.name === 'Spring');
  const monsoonSemesters = academicYear.semesters.filter(s => s.name === 'Monsoon');
  const orderedSemesters = [...springSemesters, ...monsoonSemesters];

  // Flatten courses with semester info
  const allCourses = orderedSemesters.flatMap(semester => 
    semester.courses.map(course => ({ course, semester: semester.name }))
  );

  return (
    <div className="mb-8">
      <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-surface-900 dark:text-surface-50">
        <span className="h-1 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600" />
        Academic Year {academicYear.year}
      </h3>
      <ul className="space-y-1 pl-2">
        {allCourses.map(({ course, semester }) => (
          <CourseItem key={`${course.code}-${semester}`} course={course} semester={semester} />
        ))}
      </ul>
    </div>
  );
}

/**
 * Teaching Section Component
 * Main component that renders the complete teaching hierarchy
 */
export function TeachingSection({ data }: TeachingSectionProps) {
  // Sort academic years in descending order (most recent first)
  const sortedYears = [...data.academicYears].sort((a, b) => {
    const yearA = parseInt(a.year.split('-')[0]);
    const yearB = parseInt(b.year.split('-')[0]);
    return yearB - yearA;
  });

  return (
    <div>
      {sortedYears.map((academicYear) => (
        <AcademicYearSection
          key={academicYear.year}
          academicYear={academicYear}
        />
      ))}
    </div>
  );
}