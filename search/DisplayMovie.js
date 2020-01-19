import React from 'react';
import {View , FlatList , Text , Image} from 'react-native'

export default function DisplayMovie({movies}){
    return(
        
            <FlatList
                numColumns={2}
                data={movies}
                renderItem={({item})=>{
                    return(
                        <View style={{ marginTop : 10 , marginHorizontal : 5}}>
                            <Image source={{uri : item.Poster}} style={{height : 200 , width : 150}} />
                            <Text>
                                {item.Title}
                            </Text>
                        </View>
                    )
                }}
            />
    )
}