import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';



function Avatar(){
    return(
        <View>
            <Text>Avatar</Text>
        </View>
    )
}

function Profile(){
    return(
        <View>
            <Text>Profile</Text>
        </View>
    )
}

function PersonalLibrary(){
    return(
        <View>
            <Text>Profile</Text>
        </View>
    )
}

function Friend(){
    return(
        <View>
            <Text>Profile</Text>
        </View>
    )
}

function Settings(){
    return(
        <View>
            <Text>Profile</Text>
        </View>
    )
}


const Stack = createNativeStackNavigator();

export default function StackNav(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Avatar" component={Avatar} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Friend" component={Friend} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="PersonalLibrary" component={PersonalLibrary} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}