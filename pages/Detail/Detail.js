import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View,Text, TouchableOpacity,Image, FlatList } from 'react-native'
import colors from '../../assets/colors/colors';
import styles from './Detail.styles'
const Detail = ({route,navigation}) =>{
    const {item} = route.params;
    const renderIngredients = ({item}) => {
        return(
            <View style={[styles.ingredientsItemWrapper, {marginLeft:item.id === '1' ? 20 :0}]}>
                <Image source={item.image} style={styles.ingredientImage}></Image>
            </View>
        )
    }


   return(
    <View style={styles.container}>
        <View style={styles.headerWrapper}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.headerLeft}>
            <Feather name='chevron-left' size={21} color={colors.red}/>
        </View>
        </TouchableOpacity>
        <View style={styles.headerRight}>
        <MaterialCommunityIcons name="star" size={18} color={colors.white} />
        </View>
        </View>
        <View style={styles.titleWrapper}>
            <Text style={styles.title}>{item.title}</Text>
        </View>

        
        <View style={styles.priceWrapper}>
            <Text style={styles.priceText}>${item.price} </Text>
        </View>
        {/* Info  */}
        <View style={styles.infoWrapper}>
        <View style={styles.infoLeftWrapper}>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Size</Text>
            <Text style={styles.infoItemText}>
              {item.sizeName} {item.sizeNumber}"
            </Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Crust</Text>
            <Text style={styles.infoItemText}>{item.crust}</Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Delivery in</Text>
            <Text style={styles.infoItemText}>{item.deliveryTime} min</Text>
          </View>
        </View>
        <View>
          <Image source={item.image} style={styles.itemImage} />
        </View>
      </View>
     <View style={styles.ingredientsWrapper}>
        <Text style={styles.ingredientsTitle}>Ingredients</Text>
        <View style={styles.ingredients}>
            <FlatList
            data={item.ingredients}
            renderItem={renderIngredients}
            keyExtractor={(item) =>  item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            /> 
            
            </View> 

      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Map")} style={styles.buttonWrapper}> 
        <Text style={styles.buttonText}>Place an order</Text>
        <View style={styles.buttonIcon}>    
        <Feather name='chevron-right' size={18} color={colors.white}/>
             </View>
        </TouchableOpacity>
      </View>
    
   ) 
}
export default Detail;