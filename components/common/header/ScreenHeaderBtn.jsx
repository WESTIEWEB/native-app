import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({ iconUrl, dimension }) => {
  return (
    <TouchableOpacity 
        style={
            styles.btnContainer
        }
        onPress={() => {}}
    >
      <Image
        style={
            styles.btnImage(dimension)
        }
        source={iconUrl}
        />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn