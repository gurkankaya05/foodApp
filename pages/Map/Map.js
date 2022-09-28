import React, { useState ,useEffect} from "react";
import { View,Text ,StyleSheet, ImageBackground, Image} from 'react-native'
import MapView, { Circle, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions'
import * as Location from 'expo-location';
import azra from '../../assets/images/azra.jpeg'
import vesikalık from '../../assets/images/vesikalık.jpeg'

import colors from "../../assets/colors/colors";
import config from "../../config";



const Map =() =>{
    const [pin,setPin] =useState({
        latitude: 40.981874,
        longitude: 29.05763,
    })

  

    const [state,setState] = useState({
        pickupCords :{
            latitude: 40.981874,
            longitude: 29.05763,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        dropLocationCors :{
            latitude: 39.586764,
            longitude:26.923097,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    })

    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({
          });
          console.log(location);
          setPin(
            {
                latitude:location.coords.latitude,
                longitude: location.coords.longitude
            }
        )
        })();
      }, []);
    
    
    const {pickupCords , dropLocationCors} = state;
    return(
        <View>
            <MapView
            

            
            followsUserLocation={true}
            style={{height: '100%',}}
             initialRegion={pickupCords}
                
  >
    <MapViewDirections 
    origin={pin}
    destination={dropLocationCors}
    apikey={API_URL}
    strokeColor={colors.red} 
    strokeWidth={3}
    >

    </MapViewDirections>
    
  
    <Marker
    draggable={true}
    
  coordinate={pin}
  title="Manitam"
  description="Manitamı Çok seviyorum!!!"
 onDragStart={(e) => {
    console.log("Drag Start:", e.nativeEvent.coordinate);
 }}
  onDragEnd={(e) => {
    console.log("Drag End :",e.nativeEvent.coordinate)
   
  }}
  pinColor={colors.red}
  
  >
    
    <View style={{width:50,height:50,
    borderRadius:50,
    shadowColor:'#555',
    shadowOffset:{
        width:2,
        height:2,
    },
    shadowOpacity:0.9}}>
    <View style={{width:40,height:40,borderRadius:50,
    backgroundColor:'#fff',
    zIndex:1}}>
        
        <View style={{width:40,height:40,
        position:'absolute',
        top:1,
        left:1,
        righ:1,
        bottom:1,
        backgroundColor:'red',zIndex:2,
        borderRadius:50,}}>
            <Image source={azra} style={{width:40,height:40,borderRadius:30,}}/>
        </View>

    </View>
    </View>
    </Marker>
    
    <Marker coordinate={dropLocationCors}
    title="Gürkan"
    description="Gürkan Akçay"
    pinColor={colors.red}
      >
          
    <View style={{width:50,height:50,
    borderRadius:50,
    shadowColor:'#555',
    shadowOffset:{
        width:2,
        height:2,
    },
    shadowOpacity:0.9}}>
    <View style={{width:40,height:40,borderRadius:50,
    backgroundColor:'#fff',
    zIndex:1}}>
        
        <View style={{width:40,height:40,
        position:'absolute',
        top:1,
        left:1,
        righ:1,
        bottom:1,
        backgroundColor:'red',zIndex:2,
        borderRadius:50,}}>
            <Image source={vesikalık} style={{width:40,height:40,borderRadius:30,}}/>
        </View>

    </View>
    </View>
    

    </Marker>
    </MapView>
 
  

        </View>
    )
    

    
}
export default Map;