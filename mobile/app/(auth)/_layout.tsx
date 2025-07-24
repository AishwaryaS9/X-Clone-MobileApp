import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'

const AuthRoutesLayout = () => {
    const { isSignedIn } = useAuth()

    if (isSignedIn) {
        return <Redirect href={`/(tabs)`} />
    }

    return <Stack screenOptions={{ headerShown: false }} />
}

export default AuthRoutesLayout;