import React from 'react';
import { StudentContext } from './studentContext';

export const useStudents = () => {
  const context = React.useContext(StudentContext);
  if (!context) {
    throw new Error('useStudents must be used within a StudentProvider');
  }
  return context;
};