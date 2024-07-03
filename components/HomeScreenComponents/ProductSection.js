import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { dresses } from "../../assets/products";

function getSelectedItem(key){
    return dresses[key]
}


async function saveProduct(key){
try{
    await AsyncStorage.setItem(`@product_${key}`, JSON.stringify(getSelectedItem(key)));
    alert(`${dresses[key]["name"]} stored in Cart successfully`);
}catch (e) {
    console.error('Failed to save product:', e);
  }
};

  


export default function Products({images}) {
  return (
    <View>
       <View>
            <FlatList 
                data={dresses}
                numColumns={2}
                columnWrapperStyle={{gap:10, paddingVertical:12}}
                contentContainerStyle={{gap:10 , paddingBottom:12}}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
                keyExtractor={(item) => item.key}
                renderItem={({item})=>{
                    return(
                        <View style={{height:300, width:"49%", borderRadius:20}}>
                            <View>
                                <Image source={images[item.key]} style={{position:"relative", width:"100%"}}/>
                                <TouchableOpacity style={{position:"absolute", bottom:10, right:15}} onPress={()=>{saveProduct(item.key)}}>
                                    <Image source={require("../../assets/add_circle.png")}/>
                                </TouchableOpacity>
                            </View>
                            <View style={{width:"100%", padding:5}}>
                                <Text style={{fontSize:17}}>{item.name}</Text>
                                <Text style={{fontSize:13}}>{item.description}</Text>
                                <Text style={{fontSize:20, color:"goldenrod"}}>${item.price}</Text>
                            </View>
                        </View>
                    )
                }}
            />
       </View>
    </View>
    
  );
}
