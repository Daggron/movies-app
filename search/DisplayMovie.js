import React from 'react';
import {View , FlatList , Text , Image, SafeAreaView, StyleSheet, Dimensions} from 'react-native'

export default function DisplayMovie({movies}){

    return(
                <View style={style.container}>
                <FlatList
                    numColumns={2}
                    data={movies}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item})=>{
                        return(
                            <View style={{ marginTop : 10 , marginHorizontal : 5}}>
                                <Image source={{uri : item.Poster}} style={{height : 200 , width : 150}} />
                                <Text style={{maxWidth : 150 , textAlign : "center"}}>
                                    {item.Title}
                                </Text>
                            </View>
                        )
                    }}
                />
                </View>
            
    )
    
}


const style=StyleSheet.create({
    container:{
        flex : 1,
        width : Dimensions.get('window').width,
        justifyContent : "center",
        alignContent : "center",
        alignItems : "center",
        flexWrap : "wrap"
    }
})