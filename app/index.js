import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { Stack, useRouter } from 'expo-router';

import { COLORS, SIZES, icons, FONT, images } from '../constants'
import { ScreenHeaderBtn, Welcome, PopularJobs } from '../components';

const Home = () => {
  return (
    <SafeAreaView style={{
        flex: 1,
    }}>
      <Stack.Screen
        options={{
            headerStyle: { backgroundColor: COLORS.lightWhite},
            headerShadowVisible: false,
            headerTitle: () => (''),
            headerLeft: () => (
                <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"  onPress={() => {}}/>
            ),
            headerRight: () => (
                <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"  onPress={() => {}}/>
            )
        }}
       />
       <ScrollView showsVerticalScrollIndicator={false} >
        <View 
            style={{
                flex: 1,
                padding: SIZES.medium
            }}
        >
            <Welcome />
            <PopularJobs />
        </View>
       </ScrollView>
    </SafeAreaView>
  )
}

export default Home