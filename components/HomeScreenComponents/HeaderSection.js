import { View, Text, Image, TouchableOpacity } from "react-native";

export default function Header({navigation}) {
  return (
    <View>
        <View  style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingVertical:5, marginBottom:20}}>
            <TouchableOpacity>
                <Image source={require("../../assets/Menu.png")}/>
            </TouchableOpacity>
            <Image source={require("../../assets/Logo.png")}/>
            <TouchableOpacity>
                <Image source={require("../../assets/Search.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:"-10%"}} onPress={()=>{navigation.navigate('Cart')}}>
                <Image source={require("../../assets/shoppingBag.png")} />      
            </TouchableOpacity>
        </View>
        <View  style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingVertical:5}}>
            <Text style={{fontSize:20, letterSpacing:5}}>OUR STORY</Text>
            <TouchableOpacity  style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", backgroundColor:"#eee", borderRadius:50, marginLeft:"5%", padding:10}}>
                <Image source={require("../../assets/MenuTwo.png")} style={{height:30, width:30}}/>
            </TouchableOpacity>
            <TouchableOpacity  style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", backgroundColor:"#eee", borderRadius:50, padding:10}}>
                <Image source={require("../../assets/Filter.png")} style={{height:30, width:30}}/>
            </TouchableOpacity>
        </View>
    </View>
    
  );
}
