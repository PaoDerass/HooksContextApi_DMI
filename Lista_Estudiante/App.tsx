import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import HomeScreen from '../src/screens/Homescreen';
import { StudentProvider } from '../src/contexts/studentContext';
import theme from '../src/styles/theme';

const App = () => {
  return (
    <StudentProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          backgroundColor={theme.colors.primary}
          barStyle="light-content"
        />
        <HomeScreen />
      </SafeAreaView>
    </StudentProvider>
  );
};

export default App;