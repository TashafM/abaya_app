import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

const Categories = () => {
    return (
        <View style={styles.main}>
            <View style={styles.head}>
                <Text style={{ fontSize: 18, fontWeight: 500 }}>Categories</Text>
                <Pressable onPress={() => alert("Categories")}>
                    <Text style={{ fontSize: 16, color: Colors.primary, fontWeight: 500 }}>See all</Text>
                </Pressable>
            </View>
            <View style={styles.body}>
                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg1mK8LIg2ONG4z4TWRO5xs0OHGj_6hrN2yUNqnMEVjQ&s' }} style={styles.image} />
                <Image source={{ uri: 'https://cdn.shopify.com/s/files/1/1603/4237/files/2_35c3e6e4-c00f-43f9-a1d4-07e10743a61f_480x480.png?v=1597145651' }} style={styles.image} />
                <Image source={{ uri: 'https://i.pinimg.com/736x/da/12/48/da1248ff892805c3b86ac112b4ab4fe2.jpg' }} style={styles.image} />
                <Image source={{ uri: 'https://images.herzindagi.info/image/2022/Apr/Bringing-you-the-best-spring-accessories.jpg' }} style={styles.image} />
            </View>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    main: {
        margin: 10
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    body: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 10,
    },
    image: {
        width: "22%",
        height: 80,
        borderRadius: 8,
        shadowColor: 'black',
        objectFit: "cover",
        borderWidth: 2,
        borderColor: Colors.gray
    }
})