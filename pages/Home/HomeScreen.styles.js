import { Platform, StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
export default StyleSheet.create({
    container:{
        flex:1,
        
    },
    headerWrapper:{
        paddingTop:60,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        marginTop:Platform.OS ? 0 : 24,
        
    },
    profileImage:{
        width:40,
        height:40,
        borderRadius:20,
    },
    titleWrapper :{
        marginTop:30,
        paddingHorizontal:20,
    },
titleSubtitle :{
    fontFamily:'Montserrat-Regular',
    fontSize:16,
    color:colors.black

},
titlesTitle :{
    fontFamily:'Montserrat-Bold',
    fontSize:32,
    color:colors.black,
    marginTop:5,
},
serachWrapper :{
flexDirection:'row',
alignItems:'center',
paddingHorizontal:20,
 marginTop:30,
},
search :{
    flex:1,
    marginLeft:10,
    borderBottomColor:colors.gray,
    borderBottomWidth:1,
    paddingBottom:4

},
searchText :{
    fontFamily:'Montserrat-SemiBold',
    color:colors.gray,
    fontSize:14,
},
categoriesWrapper  :{
    marginTop:30,

},
categoriesTitle  :{
    fontFamily:'Montserrat-Bold',
    fontSize:16,
    paddingHorizontal:25

},
categoriesListwrapper :{
    paddingTop:15,
    paddingBottom:20,
},
categoryItemWrapper :{
    backgroundColor:colors.red,
    marginRight:30,
    borderRadius:20,
    shadowColor: colors.black,
    color:colors.red,
    marginBottom:20,
    
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity:0.02,
shadowRadius: 3.84,

elevation: 5,

},
categoryItemImage :{
width:60,
height:60,
marginTop:24,
marginHorizontal:20,
alignSelf:'center'
},
categoryItemTitle :{
textAlign:'center',
fontFamily:'Montserrat-Medium',
fontSize:14,
marginTop:10,
},
categorySelectWrapper :{
    alignSelf:'center',
    justifyContent:'center',
    marginTop:20,
    width:26,
    height:26,
    borderRadius:26,
    marginBottom:20,
    

},
categoryIcon :{
    alignSelf:'center',
},
popularWrapper  :{
    paddingHorizontal:20,
},
popularWrapperTitle :{
    fontFamily:'Montserrat-Bold',
    fontSize:16

},
populerTopWrapper :{
flexDirection:'row',
alignItems:'center'
},
populerToptext :{
    marginLeft:10,
    fontFamily:'Montserrat-SemiBold',
    fontSize:14,

},
popularCardWrapper:{
    backgroundColor:colors.white,
    borderRadius:20,
    paddingTop:20,
    paddingLeft:20,
    flexDirection:'row',

    
},
popularTitlesWrapper  :{
    marginTop:20,


},
popularTitle :{
    fontFamily:'Montserrat-SemiBold',
    fontSize:14,
    color:colors.black
},
popularWeight :{
    fontFamily:'Montserrat-Medium',
    fontSize:12,
    color:colors.gray,
    marginTop:5

},
popularCardBottom  :{
    flexDirection:'row',
    alignItems:'center',
    marginTop:10,
    marginLeft:-20

},
addPizzaButton :{
    backgroundColor:colors.red,
    paddingVertical:17,
    paddingHorizontal:40,
    borderTopRightRadius:25,
    borderBottomLeftRadius:25,
    

},
ratingWrapper :{
    flexDirection:'row',
    marginLeft:20,
    alignItems:'center'

},
ratingText :{
    fontFamily:'Montserrat-SemiBold',
    fontSize:12,
    color:colors.black,
    marginLeft:5
},
imageWrapper :{

},
popularCardImage :{
    width:180,
    height:90,
  
},

})