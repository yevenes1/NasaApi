import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native'
import {format, sub} from 'date-fns';

import Header from '../../components/Header'
import TodaysImage from '../../components/TodaysImage';
import LastFiveDaysImages from '../../components/LastFiveDaysImages';
import { PostImage } from '../../types';
import fecthApi from '../../utils/fetch';


const Home = () => {
  const [todaysImage, setTodaysImage] = useState<PostImage>({});
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([]);
  
  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const todaysImageResponse = await fecthApi();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        setTodaysImage({})
      }
    };

    const loadLast5DaysImages = async () => {
      try {
        const date = new Date ();
        const todaysDate = format(date, 'yyyy-MM-dd');
        const fiveDaysAgoDate = format(sub(date, {days:5}), 'yyyy-MM-dd');
      
        const lastFiveDaysImagesResponse = await fecthApi(
          `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`,
          );

          setLastFiveDaysImages(lastFiveDaysImagesResponse);
      } catch (error) {
          console.error(error);
      }

    };
    
    loadTodaysImage().catch(null);
    loadLast5DaysImages().catch(null);
  }, []);
   
  return (
    <View style={styles.container}>
      <Header/>
      <TodaysImage {...todaysImage}/>
      <LastFiveDaysImages />
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
