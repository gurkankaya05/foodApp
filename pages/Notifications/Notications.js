import React, { useState, useEffect } from 'react';
import { getNotificationInbox , getUnreadNotificationInboxCount } from 'native-notify';
import { format, formatDistance, formatRelative, parseISO, subDays } from 'date-fns'

import { View,Text, FlatList ,TouchableOpacity,} from 'react-native'
import styles from './Notification.style'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../assets/colors/colors';


const Notifications = ({navigation}) =>{

    
    const renderNotification =({item}) => {
        return(
            <View key={item.id} style={styles.notifyContent}>
                
                <Text style={styles.title}>{item.title} </Text>
                <View style={styles.messageWrap}>
                <Text style={styles.messageText}>{item.message} </Text>  
                <Text style={styles.dateText}>{item.date}</Text>
                </View>
                </View>
        )
    }

    const renderNot = async() =>{
        let notifications = await getNotificationInbox(4064, 'MlRHtBK75rkUJ8oNgZruqs');
        console.log("notifications: ", notifications);        
        setData(notifications);
    }
  const [data,setData] = useState([]);

    useEffect(()=>{
        
        renderNot();
    },[])

  
    return(
        <View style={styles.container}>
            <View style={styles.upWrap}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.headerLeft}>
            <Feather name='chevron-left' size={21} color={colors.red}/>
        </View>
        </TouchableOpacity>
        <View style={styles.headerRight}>
        <MaterialCommunityIcons name="star" size={18} color={colors.white} />
        </View>
        </View>
            <View style={styles.headerWrapper}>
                
                <Text style={styles.headerTitl}>Notifications</Text>
            </View>
          <FlatList
          data={data}
          renderItem={renderNotification}
          keyExtractor={(item) => item.notification_id}
          
          />

            
            </View>
    )


}
export default Notifications;