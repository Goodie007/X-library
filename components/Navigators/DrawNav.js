import React from 'react';
import {  StyleSheet,
    TextInput, Text, 
    FlatList, View, ScrollView, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Avatar, Drawer, Title } from 'react-native-paper';
import { NavigationContainer, useNavigation, navigation } from '@react-navigation/native';







export default function DrawNav({ navigation }){
    
    return(
        <View>
            
                <TouchableOpacity style={styles.touch}
                    title="profile"
                    onPress={() => navigation.navigate()} >
                   <View>
                     <Avatar.Image style={styles.avatar} />
                   </View>
                   <View style={{marginLeft: 30, flexDirection: "row"}}>
                      <Title>Hey</Title>
                   </View>
                </TouchableOpacity>
                
            <Drawer.Section style={styles.content}>
                    <DrawerItem label="My Profile"/>
                    <DrawerItem label="Personal Library" />
                   <DrawerItem label="Invite a Friend" />
                   <DrawerItem label="Settings" />
               </Drawer.Section>
            <Drawer.Section>
                   <DrawerItem label="Logout" />
               </Drawer.Section>
           
            
        </View>
    )
}


const styles = StyleSheet.create({
    avatar: {
        height: 100,
        width: 100,
        borderRadius: 100,
        backgroundColor: 'grey',
        
    },

    content: {
        
        color: 'transparent',
    },

    touch: {
        marginLeft: 80,
        marginTop: 40,
        
    },

    bottom: {
        marginTop: 300,
    },
})