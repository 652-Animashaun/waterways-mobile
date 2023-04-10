
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './navigation/index';
import GlobalProvider from './context/provider';



export default function App() {
  return (
    <GlobalProvider>
      <AppNavigator />
    </GlobalProvider>

  );
}
