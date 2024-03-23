import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native'
import Header from '../../components/Header'
import TodaysImage from '../../components/TodaysImage';
import { PostImage } from '../../types';
import fecthApi from '../../utils/fetch';


const Home = () => {
  const [todaysImage, setTodaysImage] = useState<PostImage>();
  
  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const todaysImageResponse = await fecthApi();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        setTodaysImage(undefined)
      }
    };
    
    loadTodaysImage().catch(null);
  }, []);

  
  return (
    <View style={styles.container}>
      <Header/>
      <TodaysImage {...todaysImage}/>
    </View>
  )
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    
  }
})

export default Home
