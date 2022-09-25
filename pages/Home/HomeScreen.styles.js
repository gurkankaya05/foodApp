import { StyleSheet } from "react-native";
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
        marginTop:30,
        
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
    backgroundColor:colors.yellow,
    marginRight:30,
    borderRadius:20

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
    flexDirection:'row'
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

})