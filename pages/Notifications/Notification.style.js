import { StyleSheet } from "react-native";

import colors from "../../assets/colors/colors";

export default styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        
        backgroundColor:colors.anotherWhite,
        
    },

    headerWrapper :{
        marginHorizontal:20,
        
    },
    upWrap :{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:50,
        paddingVertical:20,
        paddingHorizontal:20,
    },
    
headerTitl :{
fontSize:32,
marginTop:20,
fontFamily:'Montserrat-Bold',
paddingBottom:40,
},

    notifyContent :{
        height:80,
        justifyContent:'space-between',
        paddingHorizontal:20,
        paddingVertical:10,
        borderBottomWidth:0.2,
        borderColor:'gray',
        borderBottomColor:'gray',
        marginTop:20,

        
    },
title :{
    fontSize:20,
    fontFamily:'Montserrat-Regular',
    color:colors.black,
    marginTop:-20,
    
},
messageText :{
    fontSize:16,
    color:colors.darkGray,
    fontFamily:'Montserrat-Regular',
    marginTop:-32,
},
messageWrap:{
    flexDirection:'row',
    justifyContent:'space-between'
},  
dateText :{
    color:colors.red,
    fontSize:13,
    fontFamily:'Montserrat-Regular',
    marginBottom:2,
    
},
})