import React from 'react';
import { Dimensions, FlatList, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

const ProductShowcase = () => {
    const images = [
        "https://i.pinimg.com/236x/87/40/b3/8740b3d7479cb0885bdb51c40d5bc948.jpg",
        "https://i.pinimg.com/236x/87/40/b3/8740b3d7479cb0885bdb51c40d5bc948.jpg",
        "https://i.pinimg.com/236x/87/40/b3/8740b3d7479cb0885bdb51c40d5bc948.jpg",
        "https://i.pinimg.com/236x/87/40/b3/8740b3d7479cb0885bdb51c40d5bc948.jpg",
        "https://i.pinimg.com/236x/87/40/b3/8740b3d7479cb0885bdb51c40d5bc948.jpg",
        "https://i.pinimg.com/236x/87/40/b3/8740b3d7479cb0885bdb51c40d5bc948.jpg",
        "https://i.pinimg.com/236x/87/40/b3/8740b3d7479cb0885bdb51c40d5bc948.jpg",
    ];

    return (
        // <View style={{ flexDirection: "row", rowGap: 10, justifyContent: "space-between", flexWrap: "wrap" }}>
        <FlatList
            data={images}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View>
                    <ImageBackground source={{ uri: item }} style={styles.imageContainer} />
                </View>
            )}
        />

        // </View>
    );
};

export default ProductShowcase;

const styles = StyleSheet.create({
    imageContainer: {
        width: (Dimensions.get('screen').width - 40) / 2,
        height: 300,
    }
});
