import {StyleSheet} from 'react-native'
import colors from '../../assets/colors/colors';
export default styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colors.red,
  },
  image:{
    
    width:'100%',
    height:'60%'
    

  },
  title:{
    color:colors.white,
    fontSize:24,
      textAlign:'center',
      fontFamily:'Montserrat-Bold',
      marginHorizontal:60
  },
  text:{
    fontSize:14,
    fontFamily:'Montserrat-SemiBold',
    color:colors.darkGray,
    marginHorizontal:45,
    
    textAlign:'center',
    marginTop:20,
    
  },
  rightTextWrapper:{
    width:40,
    height:40,
    marginRight:20,
    justifyContent:'center',
    alignItems:'center',
    
    

  },
  rightTextButton: {
    color:colors.white,
    textAlign:'center',
    fontSize:14,
    fontFamily:'Montserrat-Medium',
  },
  leftTextWrapper:{
    width:40,
    height:40,
    marginLeft:20,
    justifyContent:'center',
    alignItems:'center',
  
  },
  leftTextButton:{
    color:colors.white,
    textAlign:'center',
    fontSize:14,
    fontFamily:'Montserrat-Bold',

  },
  dotStyle:{
    backgroundColor:colors.white,

  },
  activeDotStyle:{
    backgroundColor:colors.gray
  }
});