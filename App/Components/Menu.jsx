import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


export default function Menu() {
    return (
        <>
            < View style={styles.main_menu} >
                <View style={styles.menubar}>
                    <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
                        <Feather name="menu" size={32} color="white" />
                        <Image source={require('../../assets/images/logo.png')} style={{ width: 30, height: 30, marginLeft: 4 }} />
                        <Text style={styles.brand}>HijabGhar.com</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
                        <View style={{ position: "relative" }}>
                            <MaterialCommunityIcons name="cart-outline" size={26} color="white" />
                            <View style={styles.badge}>
                                <Text style={styles.count}>01</Text>
                            </View>
                        </View>
                        <FontAwesome5 name="user-check" size={22} color="white" />
                    </View>
                </View>
                <View style={styles.search}>
                    <Feather name="search" size={24} color="#ABABAB" />
                    <TextInput placeholder='Search for products' style={styles.input} />
                </View>
            </View >
        </>
    );
}

const styles = StyleSheet.create({
    main_menu: {
        backgroundColor: Colors.primary
    },
    brand: {
        fontSize: 26,
        fontWeight: 'bold',
        color: Colors.light
    },
    menubar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10
    },
    search: {
        backgroundColor: Colors.light,
        margin: 10,
        marginTop: 0,
        paddingHorizontal: 10,
        paddingVertical: 6,
        flexDirection: "row",
        borderRadius: 6
    },
    badge: {
        backgroundColor: Colors.blue,
        width: 18,
        height: 18,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        right: -3,
        top: -5
    },
    count: {
        color: Colors.light,
        fontSize: 11,
        fontWeight: "bold"
    },
    input: {
        marginLeft: 6,
        fontSize: 16,
        fontWeight: '500'
    }
});
