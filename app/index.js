import { View, SafeAreaView, ScrollView, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';

import { COLORS, icons, images, SIZES } from '../constants'
// import { Nearbyjobs, Popularjobs, Welcome, ScreenHeaderBtn } from '../components';
import { ScreenHeaderBtn } from '../components/common/header/ScreenHeaderBtn';

const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{
            flex: 1, backgroundColor: COLORS.lightWhite
        }}>
            <Stack.Screen
            options={{
                headerStyle : { backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menue} dimensions="60%" />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={icons.profile} dimensions="100%" />
                ),
            }}
             />
        </SafeAreaView>
    )
}

export default Home