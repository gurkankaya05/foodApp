import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

export default styles = StyleSheet.create({
    container:{
        flex:1,
    },
    headerWrapper :{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:50,
        paddingVertical:20,
        paddingHorizontal:20,
    },
headerLeft :{

},
headerRight :{
    backgroundColor:colors.red,
    borderRadius:20 ,
    paddingHorizontal:5,
    paddingVertical:5

},
titleWrapper :{
paddingHorizontal:20,



},
title :{
    fontFamily:'Montserrat-Bold',
    fontSize:32,
    color:colors.black,
    width:'50%'
},
priceWrapper :{
    marginTop:20,
    marginHorizontal:20,
    
},
priceText  :{
    color:colors.red,
    fontSize:32,
    fontFamily:'Montserrat-Bold',
},
infoWrapper :{
    marginTop:60,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
    

},
infoLeftWrapper :{
    paddingLeft:20

},
infoItemWrapper :{
    marginBottom:20,
},
infoItemTitle :{
    fontFamily:'Montserrat-Medium',
    fontSize:14,
    color:colors.gray
},
infoItemText:{
    fontFamily:'Montserrat-SemiBold',
    fontSize:17,
    color:colors.black

},
infoRightWrapper :{

},
itemImage :{
    marginLeft:30,
    shadowColor: colors.black,
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.02,
shadowRadius: 3.84,

elevation: 5,
    
},
ingredientsWrapper  :{
marginTop:40,

},
ingredientsTitle :{
    paddingHorizontal:20,
    fontFamily:'Montserrat-Bold',
    fontSize:18,
    color:colors.red,
    
},
ingredients :{
    paddingVertical:19,
    

},
ingredientsItemWrapper:{
backgroundColor:colors.white,
justifyContent:'center',
alignItems:'center',
paddingHorizontal:10,
marginRight:15,
borderRadius:15,
shadowColor: colors.black,
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.05,
shadowRadius: 10,

elevation: 2,
marginBottom:5,


},
ingredientImage:{

},
buttonWrapper:{
marginTop:30,
marginHorizontal:30,
backgroundColor:colors.red,
paddingVertical:17,
borderRadius:22,
flexDirection:'row',
justifyContent: 'center',

},
buttonText:{
    fontSize:14,
    textAlign:'center',
    color:colors.white,
    fontFamily:'Montserrat-Bold',
    alignItems:'center'

},
buttonIcon:{
    alignItems:'center',
  
}
})