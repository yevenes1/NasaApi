import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, {FC} from 'react'
import { PostImage as PostImageTypes } from '../../types'
import PostImage from '../PostImage'

const LastFiveDaysImages: FC<{postImages?: PostImageTypes[]}> = ({
     postImages, 
    }) => {
    
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Ultimos 5 Dias</Text>
      <ScrollView style={styles.content}>
        {postImages?.map(postImage => (
            <PostImage key={`post-image-${postImage.title}`} {...PostImage}/>
        ))}

      </ScrollView>
    </View>
  )
}

export default LastFiveDaysImages

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginVertical: 8,
    },

    content:{
            paddingHorizontal: 24,
    },

    title:{
        color: '#fff',
        fontSize: 16,
        marginBottom: 16,
    }

})