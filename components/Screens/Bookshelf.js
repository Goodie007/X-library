import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, 
         TouchableOpacity, TextInput,
         FlatList, Image, Dimensions } from 'react-native';


const { width } = Dimensions.get('window');
const SPACING = 10;
const THUMB_SIZE = 80;





const IMAGES = {
    image1: '1',
    image2: '2',
    image3: '3'
}




export default function BookShelf(){
    const [images, setImages] = useState([
        { id:'1', image: IMAGES.image1 },
        { id:'2', image: IMAGES.image2 },
        { id:'3', image: IMAGES.image3 }
    ]);

    const renderItem = ({ item, index }) => {
        <TouchableOpacity  
             style={{
                 flex: 1, 
                 paddingTop: 0,
                 marginLeft: index == 0 ? padding: 0 ,
                 marginRight: 30
             }}
             onPress={() => console.log('My Books')}
             >

        </TouchableOpacity>
    }


    return(
        <SafeAreaView style={styles.Area}>
            <View style={{ paddingTop: 20}}>
                <TextInput style={styles.search} 
                   placeholder="search"
                   title="search" />
            </View>
            <View style={styles.horizon}>
                <Text style={{color: 'white', fontWeight:'bold'}}>Popular Books</Text>

                <TouchableOpacity 
                    onPress={() => console.log('See More')}>
                        <Text style={{ textDecorationLine: 'underline', 
                          marginLeft: 190 }}>See More</Text>

                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    data={images}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ position: 'absolute', bottom: 380 }}
                    contentContainerStyle={{ paddingHorizontal: SPACING }}
                    renderItem={({ item, index }) => (
                        <Image source={item}
                               key={index}
                               resizeMode='cover'
                               source={item.image}
                               style={{
                                   flex: 1,
                                   flexDirection: 'row',
                                   width: THUMB_SIZE,
                                   height: THUMB_SIZE,
                                   marginRight: SPACING,
                                   borderRadius: 15,
                                   

                               }} />
                    )} />
            </View>
            <View>
                <Text style={{color: "blue", fontSize: "15"}}>Hello World</Text>
            </View>
        </SafeAreaView>
    )
}




const styles = StyleSheet.create({
    Area: {
       backgroundColor: '#000',
       height: 650,
    },

    search: {
        marginLeft: 15,
        height: 38,
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        color: 'blue'
    },

    horizon: {
        paddingTop: 50,
        marginLeft: 15,
        flex: 1,
        flexDirection: 'row',
        
    }
})