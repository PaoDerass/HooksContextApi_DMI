import React, { createContext, useState, useEffect, ReactNode } from 'react';

export type Student = {
  id: string;
  name: string;
};

type StudentContextType = {
  students: Student[];
  setStudents: (students: Student[]) => void;
};

export const StudentContext = createContext<StudentContextType>({
  students: [],
  setStudents: () => {},
});

type StudentProviderProps = {
  children: ReactNode;
};

export const StudentProvider = ({ children }: StudentProviderProps) => {
  const [students, setStudents] = useState<Student[]>([]);

   
  useEffect(() => {
    
    const initialStudents: Student[] = [
      { id: '1', name: 'Carlos' },
      { id: '2', name: 'Pedro' },
      { id: '3', name: 'Luisa' },
      { id: '4', name: 'Melisa' },
      { id: '5', name: 'Allan' },
      { id: '6', name: 'Cindy' },
      { id: '7', name: 'Juan' },
      { id: '8', name: 'Mario' },
      { id: '9', name: 'Fernando' },
      { id: '10', name: 'Diego' },
    ];

    setStudents(initialStudents);


    const timer = setTimeout(() => {
      const updatedStudents: Student[] = [
        ...initialStudents.slice(0, 5),
        { id: '11', name: 'Nuevo Estudiante 1' },
        { id: '12', name: 'Nuevo Estudiante 2' },
      ];
      setStudents(updatedStudents);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <StudentContext.Provider value={{ students, setStudents }}>
      {children}
    </StudentContext.Provider>
  );
};