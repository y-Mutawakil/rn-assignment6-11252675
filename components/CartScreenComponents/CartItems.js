import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { dresses } from "../../assets/products";

export default function Items({ images, storedItems, removeItem, setEstTotal }) {

  const calculateTotal = () => {
    const sum = storedItems.reduce((acc, item) => acc + (item.price || 0), 0);
    setEstTotal(sum);
  };

  const handleRemoveItem = async (key) => {
    try {
      await AsyncStorage.removeItem(`@product_${key}`);
      const updatedItems = storedItems.filter(item => item.key !== key);
      removeItem(key);
      calculateTotal();
      alert(`${dresses[key]["name"]} deleted successfully`);
    } catch (e) {
      console.error('Failed to delete product:', e);
    }
  };

  return (
    <View style={{ marginVertical: "10%", marginBottom: "50%" }}>
      {storedItems.map((dress) => (
        <View key={dress.key} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", gap: 10, paddingVertical: 10 }}>
          <Image source={images[dress.key]} style={{ width: "35%", aspectRatio: 3 / 4 }} resizeMethod="contain" />
          <View style={{ width: "60%", marginBottom: "10%" }}>
            <Text style={{ fontSize: 20, maxWidth: "80%" }}>{dress.name}</Text>
            <Text style={{ fontSize: 13, maxWidth: "80%" }}>{dress.description}</Text>
            <Text style={{ fontSize: 20, maxWidth: "80%", color: "goldenrod" }}>${dress.price}</Text>
          </View>
          <TouchableOpacity style={{ position: "absolute", bottom: 20, right: 20 }} onPress={() => handleRemoveItem(dress.key)}>
            <Image source={require("../../assets/remove.png")} />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}
