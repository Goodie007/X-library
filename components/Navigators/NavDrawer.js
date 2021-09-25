import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  StyleSheet,
         TextInput, Text, 
         FlatList, View, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar } from 'react-native-paper';

import DrawNav  from './DrawNav';


function Home(){
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}




function PersonalLibrary(){
   return(
       <View>
           <Text>Lib</Text>
       </View>
   )
};

function InviteFriend(){
    return(
        <View>
            <Text>Invite Friend</Text>
        </View>
    )
}

function Logout(){
    return(
        <View>
            <Text>Logout</Text>
        </View>
    )
}



const Draw = createDrawerNavigator();



export default function NavDrawer(){
    return(
        <NavigationContainer independent={true} style={styles.container}>
            <Draw.Navigator drawerContent={(props) => <DrawNav {...props} />}>
                <Draw.Screen
                    name="Home" 
                    options={{ drawerLabel: 'first page Option'}}
                    component={Home} />
            </Draw.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        color: '#0062be'
    },

    view: {
        marginTop: 100,
        marginLeft: 40,
        flexDirection: 'row',
    },

    display: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff'
    },

    avatar: {
        
        width: 120,
        height: 120,
        
    },

    btn: {
       paddingTop: 20,
       marginLeft: 200,
       flexDirection: 'row',
       flex: 1
    },

    butt: {
        color: 'white',
        backgroundColor: '#0062be',
        width: 80,
        height: 30,
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        borderRadius: 5,
    },
    
    input: {
        fontSize: 20
    },

    

})