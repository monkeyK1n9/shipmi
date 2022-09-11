import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { Navigation } from './src/infrastructure/navigation';
import {theme} from './src/infrastructure/theme';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
      <ExpoStatusBar style={'light'} backgroundColor={theme.colors.ui.quartenary} translucent={true}/>
    </>
  );
}

