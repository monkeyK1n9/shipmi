import { useEffect } from "react"
import { Redirect, useNavigation } from "expo-router"
import { Roboto_400Regular, useFonts as useRoboto } from "@expo-google-fonts/roboto"

export default function Index() {
    const [fontsLoaded] = useRoboto({
        Roboto_400Regular,
    })

    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    if (!fontsLoaded) return null;


    return <Redirect href="(send)/send" />
}