import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Menu from '../Components/Menu'
import Categories from '../Components/Categories'
import LatestArrivals from '../Components/LatestArrivals'

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <StatusBar style="auto" />
            <Menu />
            <Categories />
            <LatestArrivals />
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})