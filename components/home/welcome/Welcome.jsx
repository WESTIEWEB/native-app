import { View, Text, TextInput } from 'react-native'
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { useRouter } from 'expo-router';

import { SIZES, icons } from '../../../constants';
import styles from './welcome.stlye';
import { FlatList } from 'react-native';

const Welcome = () => {
  const [search, setSearch] = useState('');
  const [activeJobType, setActiveJobType] = useState('Full Time');
  const router = useRouter();

  const handleJobClick = (value) => {
    setActiveJobType(value)
  }

  const jobTypes = ["Full Time", "Part Time", "Contract"]

  return (
    <View>

      <View  style={{
        ...styles.container,
        }}
      >
        <Text style={
            styles.userName
        }>Welcome Adrian</Text>
        <Text style={
            styles.welcomeMessage
        }>Find your perfect job</Text>
      </View>

      <View style={
        styles.searchContainer
        }
      >
        <View style={
            styles.searchWrapper
            }
        >
            <TextInput style={
                styles.searchInput
                }
                placeholder="What are you looking for?"
                value={search}
                onChange={() => {}}
            />
        </View>

        <TouchableOpacity style={{
          ...styles.searchBtn,
          }}
          onPress = {() => {}}
        >
          <Image
            style={{
              ...styles.searchBtnImage,
            }}
            source={icons.search}
            resizeMode="contain"
          />
        </TouchableOpacity>

      </View>

      <View 
        style={{...styles.tabsContainer}}
      >
        
        <FlatList
          data={jobTypes}
          renderItem={({item}) => (
            <TouchableOpacity 
              style={styles.tab(activeJobType, item)} onPress={
                () => {
                  handleJobClick(item);
                  router.push(`search/jobs/${item}`)
                }
              }
            >
              <Text style={styles.tabText(activeJobType, item)}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item} 
          horizontal
          contentContainerStyle={{columnGap: SIZES.small}}
          showsHorizontalScrollIndicator={false}
        />

      </View>
    </View>
  )
}

export default Welcome