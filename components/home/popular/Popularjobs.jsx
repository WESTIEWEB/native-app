import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

import styles from './popularjob.style'

import { COLORS, SIZES } from '../../../constants';


const PopularJobs = () => {
  const router = useRouter();
  const isLoading = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PopularJobs