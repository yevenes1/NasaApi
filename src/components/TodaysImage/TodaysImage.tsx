import { StyleSheet, Text, View, Image, Button} from 'react-native'
import React, { FC } from 'react'

import { PostImage  } from '../../types'

const TodayImage: FC<PostImage> = ({date, title, url}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri:url}} style={styles.image}/>
      </View>
      <Text>{title}</Text>
      <Text>{date}</Text>
      <Button title="View"/>
    </View>
  )
}

export default TodayImage

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#2c449d',
    marginVertical: 16,
    borderRadius: 32,
    padding: 16,
  },
  imageContainer:{

  },
  image:{

  }
})