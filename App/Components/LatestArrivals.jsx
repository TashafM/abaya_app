import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import ProductShowcase from './ProductShowcase'

const LatestArrivals = () => {
    return (
        <View style={styles.main}>
            <View style={styles.head}>
                <Text style={{ fontSize: 18, fontWeight: 500 }}>Latest arrivals</Text>
                <Pressable onPress={() => alert("Latest Arrivals")}>
                    <Text style={{ fontSize: 16, color: Colors.primary, fontWeight: 500 }}>See all</Text>
                </Pressable>
            </View>
            <ProductShowcase />
        </View>
    )
}

export default LatestArrivals

const styles = StyleSheet.create({
    main: {
        margin: 10
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

})