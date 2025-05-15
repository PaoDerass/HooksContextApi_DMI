import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import theme from '../styles/theme';
import { Student } from '../contexts/studentContext';

type StudentListProps = {
  students: Student[];
};

const StudentList: React.FC<StudentListProps> = ({ students }) => {
  const renderItem = ({ item }: { item: Student }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.idText}>{item.id}</Text>
      <Text style={styles.nameText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Estudiantes</Text>
      <FlatList
        data={students}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.primaryDark,
    marginBottom: theme.spacing.large,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: theme.spacing.medium,
    marginVertical: theme.spacing.small,
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    elevation: 2,
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  idText: {
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginRight: theme.spacing.medium,
  },
  nameText: {
    color: theme.colors.text,
  },
});

export default StudentList;