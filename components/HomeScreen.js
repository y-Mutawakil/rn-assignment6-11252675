import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from "./HomeScreenComponents/HeaderSection";
import Products from "./HomeScreenComponents/ProductSection";

export default function Home({ navigation, route }) {
  const { images } = route.params;

  return (
    <ScrollView>
      <View style={{ padding: 20, paddingTop: 50 }}>
        <Header navigation={navigation} />
        <Products images={images} />
      </View>
    </ScrollView>
  );
}
