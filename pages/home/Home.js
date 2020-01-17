import React from 'react'
import {View , Text , FlatList, Image, StyleSheet ,  ScrollView } from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';
import Joker from './poster/joker.jpg'

export default function Home() {
    const [movie , setMovie] = React.useState([
        {
            title : "Joker",
            image : Joker,
            id : 1
        },
        {
            title : "K.G.F",
            image : Joker,
            id : 2
        },
        {
            title : "Joker",
            image : Joker,
            id : 3
        },
        {
            title : "K.G.F",
            image : Joker,
            id : 4
        }

    ])
    return (
        <ScrollView>
        <View style={style.Container}>
            
            <Text>
                Recomendations
            </Text>
            <Image source={Joker} style={{width : 300 , height : 200 , borderRadius : 20 , marginTop : 200}}/>
            <TouchableOpacity>
                <FlatList 
                showsHorizontalScrollIndicator={false}
                keyExtractor = {item => item.id}
                horizontal={true}              
                data={movie} renderItem={({item})=>{
                    return(
                            <View>
                                <Image source={item.image} style={{height : 200 , width : 150 , borderRadius : 5 , marginLeft : 15 , marginTop : 15}}/>
                                <Text style={{flex : 1 , textAlign : "center"}}>
                                    {item.title}
                                </Text>
                            </View>
                    )
                }}
                />
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
    
}


const style = StyleSheet.create({
    Container : {
        flex : 1,
       justifyContent : "center",
       alignContent : "flex-end",
       alignItems : "center",
       alignSelf : "center"
    }
})