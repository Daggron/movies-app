import React from 'react'
import { View , Button } from 'native-base'
import { StyleSheet  , TextInput} from 'react-native'
import {Text} from 'react-native'

export default function SearchBar(props) {
    return (
       <View style={style.container}>
           <Text style={{fontSize : 30}}>
               Search
               {"\n"}
           </Text>
           <TextInput onChangeText={props.handleChange} onSubmitEditing={props.searchMovie} placeholder="Type Movie Name" style={{height : 50 , width : 300 , backgroundColor : "#F4F5F6"  } } />
            <Button onPress={props.searchMovie} style={{padding : 20 , marginTop : 15 , backgroundColor : "#F4F5F6" , borderRadius : 5}}>
                <Text>
                    Search
                </Text>
            </Button>
       </View>
    )
}


const style = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignContent : "center",
        alignItems : "center",
        alignSelf : "center",
        marginTop : 15,
        marginBottom : 15
    }
})