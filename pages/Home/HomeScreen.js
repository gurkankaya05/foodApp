import React from "react"
import { useFonts } from "expo-font"
import { View,Text,Image, TextInput, FlatList,Alert, TouchableOpacity } from 'react-native'
import categoriesData from "../../assets/data/categoriesData"
import popularData from "../../assets/data/popularData"
import styles from './HomeScreen.styles';
import { Feather, Ionicons } from '@expo/vector-icons'; 
import colors from "../../assets/colors/colors"
import { EvilIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 




const HomeScreen = () =>{

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
        
        <View style={[styles.categoryItemWrapper, {marginLeft: item.id === '1' ? 20 : 0 , backgroundColor:item.id === '1'? `${colors.yellow}` : `${colors.white}`}] }>
          <Image source={item.image} style={styles.categoryItemImage}/>
          <Text style={styles.categoryItemTitle}>{item.title}</Text>
          <View style={[styles.categorySelectWrapper, {backgroundColor:item.id === '1' ? colors.white : colors.purple }]}>
          <AntDesign name="right" size={8} color={item.id === '1' ? colors.black : colors.white} style={styles.categoryIcon} />
          </View>
        </View>
        
      )
    }


return(
    //!Header
    <View style={styles.container}> 
    <View style={styles.headerWrapper}>
      <Image source={require('../../assets/images/profile.png')} style={styles.profileImage}/>
      <Ionicons name="menu-outline" size={32} color={colors.black} />
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
      {popularData.map((item,id) => (
        <View key={id} style={[styles.popularCardWrapper , {marginTop:item.id ===1 ? 10 : 20}]}>
            <View> 
              <View>
                <View style={styles.populerTopWrapper}>
                <MaterialCommunityIcons name="crown-outline" size={24} color={colors.yellow} />
                <Text style={styles.populerToptext}> Top of the week</Text>
                  </View>
                  <View style={styles.popularTitlesWrapper}>
                    <Text style={styles.popularTitle}>{item.title}</Text>
                    <Text style={styles.popularWeight}>Weight : {item.weight}</Text>


                    </View>
                </View>
                <View style={styles.popularCardBottom}>
              <View style={styles.addPizzaButton}>
                <Feather name="plus" size={10} color={colors.black}/>
                 </View>
                 <View style={styles.ratingWrapper}>
                  

                  </View>
                  </View>
               </View>
          
           </View>
      ))}


      </View>

    </View>
);
};
export default HomeScreen;