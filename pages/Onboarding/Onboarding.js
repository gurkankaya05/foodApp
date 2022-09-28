import React from "react";
import { View,Text,Image } from "react-native"
import AppIntroSlider from 'react-native-app-intro-slider';
import {data} from '../../assets/data/onboardingData';
import styles from './Onboarding.styles'

const Onboarding =({navigation}) =>{
    const renderOnboard =({item}) =>{
        return(
            <View style={styles.slider}>    
            <Image style={styles.image} source={item.image}/>
           <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
           </View>
           </View>
        )
    }
    const keyExtractor = (item)=>item.title;

    const renderDoneButton =() => {
      return <View style={styles.rightTextWrapper}>
        <Text style={styles.rightTextButton}>Done</Text>
      </View>
    }
  const renderNextButton =() => {
    return <View style={styles.rightTextWrapper}>
      <Text style={styles.rightTextButton}>Next </Text>
    </View>
  
  }
  const renderPrevButton  =() => {
    return <View style={styles.leftTextWrapper}>
      <Text style={styles.leftTextButton}>Prev</Text>
    </View>
  }
  
  const handleDones = () =>{
      handleDone();
      
  }
    return(
        <View style={{flex:1}}>
            
            <AppIntroSlider
      keyExtractor={keyExtractor}
      renderItem={renderOnboard}
      data={data}
      renderDoneButton={renderDoneButton}
      renderNextButton={renderNextButton}
      renderPrevButton={renderPrevButton}
      activeDotStyle={styles.activeDotStyle}
      dotStyle={styles.dotStyle}
      onDone={() => navigation.navigate("Home")}
      
          />
        </View>
    )
}
export default Onboarding;