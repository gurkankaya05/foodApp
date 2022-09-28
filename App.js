import registerNNPushToken from 'native-notify';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/Home/HomeScreen';
import Detail from './pages/Detail/Detail';
import Notifications from './pages/Notifications/Notications';
import Onboarding from './pages/Onboarding/Onboarding';
import Map from './pages/Map/Map';






export default function App() {
    
  const Stack = createNativeStackNavigator();

  registerNNPushToken(4064, 'MlRHtBK75rkUJ8oNgZruqs');

   //!Font Section
   const [fontsLoaded] = useFonts({
    'Montserrat-Bold' : require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold' : require('./assets/fonts/Montserrat-SemiBold.ttf')
  })

  if(!fontsLoaded){
    return console.log("..");
  }
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Onboarding' component={Onboarding} options={{headerShown:false}}/>    
        <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Detail' component={Detail} options={{headerShown:false}}/>
        <Stack.Screen name='Notifications' component={Notifications} options={{headerShown:false}}/>
        <Stack.Screen name='Map' component={Map} options={{headerShown:false}}/>
      
          
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
