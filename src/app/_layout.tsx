import React from 'react'
import { Tabs } from 'expo-router/tabs';
import { Provider as RNPaperProvider } from 'react-native-paper';
import { theme } from '../infrastructure/theme';
import { ThemeProvider } from 'styled-components/native'

export default function AppLayout() {
    return (
        <ThemeProvider theme={theme}>
            <RNPaperProvider>
                <Tabs
                >
                    <Tabs.Screen name="Send" options={{title: "Send"}}/>
                    <Tabs.Screen name="Receive" options={{title: "Receive"}}/>
                </Tabs>
            </RNPaperProvider>
        </ThemeProvider>
    )
}
