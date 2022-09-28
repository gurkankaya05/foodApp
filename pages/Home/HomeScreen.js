import React from "react"
import { useFonts } from "expo-font"
import { View,Text,Image, TextInput, FlatList,Alert, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import categoriesData from "../../assets/data/categoriesData"
import popularData from "../../assets/data/popularData"
import styles from './HomeScreen.styles';
import { Feather, Ionicons } from '@expo/vector-icons'; 
import colors from "../../assets/colors/colors"
import { EvilIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { StatusBar } from "expo-status-bar"
import vesikalık from '../../assets/images/vesikalık.jpeg'




const HomeScreen = ({navigation}) =>{


      //!Font Section
    const [fontsLoaded] = useFonts({
        'Montserrat-Bold' : require('../../assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Medium': require('../../assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-SemiBold' : require('../../assets/fonts/Montserrat-SemiBold.ttf')
      })
    
      if(!fontsLoaded){
        return console.log("..");
      }

      //! FlatList
    const renderCategoryItem = ({item}) => {
      return(
        
        <View style={[styles.categoryItemWrapper, {marginLeft: item.id === '1' ? 20 : 0 , backgroundColor:item.id === '1' ? `${colors.white}` : `${colors.white}`},] }>
          <Image source={item.image} style={styles.categoryItemImage}/>
          <Text style={[styles.categoryItemTitle,{color:item.id === '1' ? `${colors.red}` : `${colors.black}`, fontFamily: item.id === '1' ? 'Montserrat-Bold' :'Montserrat-Medium'}]}>{item.title}</Text>
          <View style={[styles.categorySelectWrapper, {backgroundColor:item.id === '1' ? colors.white : colors.red }]}>
          <AntDesign name="right" size={13} color={item.id === '1' ? colors.red : colors.white} style={styles.categoryIcon} />
          </View>
        </View>
        
      )
    }


return(
    //!Header
    <View style={styles.container}> 
 
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.headerWrapper}>
      <TouchableOpacity onPress={() => navigation.navigate("Onboarding")} >
      <Image source={vesikalık} style={styles.profileImage}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
      <Ionicons name="notifications-outline" size={30} color={colors.black} />
      </TouchableOpacity>
    </View>
  {/* Title */}
    <View style={styles.titleWrapper}>
      <Text style={styles.titleSubtitle}>Food</Text>
      <Text style={styles.titlesTitle}>Delivery</Text>
    </View>
    {/* Search */}
    <View style={styles.serachWrapper}>
    <EvilIcons name="search" size={22} color={colors.black} />
    <View style={styles.search}>
      <TextInput placeholder="Search" selectionColor={colors.black} style={styles.searchText} / >
    
    </View>
    </View>
    {/* Categories */}
    <View style={styles.categoriesWrapper}>
      <Text style={styles.categoriesTitle}>Categories </Text>
      <View style={styles.categoriesListwrapper}>
        <FlatList
        data={categoriesData}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        
        
        />
      </View>
    </View>

    {/* Popular */}
    <View style={styles.popularWrapper}>
      <Text style={styles.popularWrapperTitle}>Popular</Text>
      {popularData.map((item) => (
        <TouchableOpacity activeOpacity={1} key={item.id} onPress={() => navigation.navigate("Detail", {item}) }>
        <View  style={[styles.popularCardWrapper , {marginTop:item.id ===1 ? 10 : 20 , marginBottom: item.id ==='3' ? 30 : 0}]}>
            <View> 
              <View>
                <View style={styles.populerTopWrapper}>
                <MaterialCommunityIcons name="crown-outline" size={24} color={colors.red} />
                <Text style={styles.populerToptext}> Top of the week</Text>
                  </View>
                  <View style={styles.popularTitlesWrapper}>
                    <Text style={styles.popularTitle}>{item.title}</Text>
                    <Text style={styles.popularWeight}>Weight : {item.weight}</Text>


                    </View>
                </View>
                <View style={styles.popularCardBottom}>
              <View style={styles.addPizzaButton}>
                <Feather name="plus" size={15} color={colors.white}/>
                 </View>
                 <View style={styles.ratingWrapper}>
                  <MaterialCommunityIcons name="star" size={12} color={colors.black} />
                  <Text style={styles.ratingText}>{item.rating}</Text>

                  </View>
                  </View>
               </View>
            <View style={styles.imageWrapper}>
              <Image source={item.image} style={[styles.popularCardImage, {marginLeft: item.id === '3' ? 10 : 15}]}/>  
              
             </View>
             
           </View>
           </TouchableOpacity>
      ))}
      

      </View>
      
      </ScrollView>
   
    </View>
);
};
export default HomeScreen;