import React from 'react';
import { View, StyleSheet } from 'react-native';
import StudentList from '../components/studentList';
import { useStudents } from '../contexts/studentContext';
import theme from '../styles/theme';

const HomeScreen: React.FC = () => {
  const { students } = useStudents();

  return (
    <View style={styles.container}>
      <StudentList students={students} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});

export default HomeScreen;