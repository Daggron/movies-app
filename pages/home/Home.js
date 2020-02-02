import React from 'react'
import {View , Text , FlatList, Image, StyleSheet ,  ScrollView, Dimensions , TouchableOpacity } from 'react-native';
import Joker from './poster/joker.jpg';
import KGF from './poster/kgf.jpg';
import Inception from './poster/inception.jpg'
import Shutter from './poster/shutter.jpg';
import John from './poster/johnwick.jpg';
import Endgame from './poster/endgame.jpg';

export default function Home(props) {
    const [movie , setMovie] = React.useState([
        {
            title : "Joker",
            image : Joker,
            id : 1
        },
        {
            title : "K.G.F",
            image : KGF,
            id : 2
        },
        {
            title : "Inception",
            image : Inception,
            id : 3
        },
        {
            title : "John Wick",
            image : John,
            id : 4
        },
        {
            title : "Shutter Island",
            image : Shutter,
            id : 5
        },
        {
            title : "Avengers: Endgame",
            image : Endgame,
            id : 6
        }

    ]);

    const [topBanner , setBanner] = React.useState([
        
        {
            title : "The Dark Knight",
            image : 'https://i.pinimg.com/originals/cc/47/a5/cc47a507854dfe4ea145ebb4c9ae51c4.jpg',
            id : 2
        },{
            title : "Ford V Ferrari",
            image : 'https://images-na.ssl-images-amazon.com/images/I/71MJJWD2UrL._SL1500_.jpg',
            id : 3
        }
    ])

    return (
        <ScrollView>
       
        <View>
            
            <Text style={{flex : 1 , fontSize : 20 , justifyContent : "center" , alignContent : "center" , alignItems : "center" , flexWrap : "wrap" , textAlign: "center" , marginTop : 20}}>
                Discover
            </Text>
            
            <ScrollView 
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                disableIntervalMomentum
                tvParallaxShiftDistanceX={300}
            >
                {
                    
                        topBanner.map(item=>{
                                return(
                                    <View style={style.Container} key={item.id}>
                                    <Image source={{uri : item.image}}  style={{flex: 1 ,justifyContent : "center" , alignSelf : "center" , alignItems : "center" , width : 300 , height : 200 , borderRadius : 20 , marginTop : 50}} />
                                    <Text style={style.text}>
                                        {item.title}
                                    </Text>
                                    </View>
                                )
                        })
                    
                }
            </ScrollView>
            
            <Text style={{position : "relative" ,top : 0 , left : 0  ,marginTop : 15 , fontSize : 20 , flex : 1 , justifyContent: "flex-start" , flexWrap : "wrap"  , alignContent : "flex-start" , alignItems: "flex-start" , margin : 15 }}>
                Top Picks
            </Text>
            
                <FlatList 
                showsHorizontalScrollIndicator={false}
                keyExtractor = {item => item.id}
                horizontal={true}              
                data={movie} renderItem={({item})=>{
                    return(
                        <TouchableOpacity onPress={()=>props.navigation.navigate('Details',{title : `${item.title}`})}>
                            <View>
                                <Image source={item.image} style={{height : 200 , width : 150 , borderRadius : 5 , marginLeft : 15 , marginTop : 15}}/>
                                <Text style={{flex : 1 , textAlign : "center"}}>
                                    {item.title}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                />
        </View>
        </ScrollView>
    )
    
}


const style = StyleSheet.create({
    Container : {
        flex : 1,
        width : Dimensions.get('window').width,
       justifyContent : "center",
       alignContent : "center",
       alignItems : "center",
       alignSelf : "center",
       marginHorizontal : "auto"
       
    },
    text:{
        backgroundColor : "white",
        padding : 20,
        marginTop : -30,
        fontSize : 15,
        width : 150,
        borderRadius : 10
    }
})