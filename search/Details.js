import React from 'react';
import {View , Text , ImageBackground , Image , Dimensions, StatusBar } from 'react-native';
import Axios from 'axios';
import {Spinner } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

function Details(props){

    const [movie,setMovie] = React.useState({});
    const [Rating , setRating] = React.useState([]);
    const [title , setTitle] = React.useState(props.navigation.getParam('title'));

    if(props.navigation.getParam('title')!==title){
        let data = props.navigation.getParam('title')
        setTitle(data)
    }
    

    React.useEffect(()=>{
        // const title = props.navigation.getParam('title');
        Axios.get(`http://www.omdbapi.com/?apikey=19a92861&t=${title}&plot=full`)
        .then(res=>{
            setMovie(res.data);
            // console.log(res.data);
            setRating(res.data.Ratings);
        })
        .catch(err=>{
            alert('No Data Found')
            console.log(err);
        })
    },[title])

    if(props.navigation.getParam('title')!==title){
        return(
            <Spinner />
        )
    }
  
    else if(movie.Title===title){
        return(
            <ScrollView>
                <StatusBar hidden={true}/>
                <View style={{backgroundColor : "#f5f5f5" }}>
                     <Image source={{uri : movie.Poster}} resizeMode="cover" blurRadius={1} style={{ width : Dimensions.get('window').width , height : 300}}/>

                    

                    <View style={{ flex : 1 , justifyContent : "space-between", alignContent : "center", flexDirection : "row"  , flexWrap : "wrap" , padding : 20 , backgroundColor : "#f5f5f5" , marginTop : -50 , borderTopLeftRadius : 50 , borderTopRightRadius : 50 , width : Dimensions.get('window').width}}>
                        
                        <Image source={{uri : movie.Poster}} resizeMode="contain" style={{height : 200 , width :110}}/>
                        
                        <View style={{marginTop : 30}}>
                        <Text style={{ textAlign :"center" , fontSize : 15 , width : 200 }}>
                            {
                                movie.Title
                            }
                        </Text>
                        <Text style={{fontSize : 12 , textAlign : "center" ,  width : 200  , marginTop : 15}}>
                            {
                                movie.Genre
                            }
                        </Text>
                        <Text style={{fontSize : 12 , textAlign : "center" , width : 200  , marginTop : 15}}>
                            Director: {
                                movie.Director
                            }
                        </Text>
                        <Text style={{fontSize : 12 , textAlign : "center" ,  width : 200 , marginTop : 15}}>
                           Rated: {
                                movie.Rated
                            }
                        </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{fontSize : 20 , marginTop : 20  , paddingHorizontal : 20}}>
                            Plot
                        </Text>
                        <Text style={{fontSize : 15 , color : "#757575" ,  lineHeight : 30 , marginTop : 15 , paddingLeft : 20 , paddingRight : 20 , paddingBottom : 10 , textAlign : "justify"}}>
                            {
                                movie.Plot
                            }
                        </Text>
                    </View>
                    <View style={{paddingHorizontal : 20 }}>
                        <Text style={{fontSize : 20  , paddingTop : 10}}>
                            Actors
                        </Text>
                        <Text style={{color : "#757575" , fontSize : 15 , marginTop : 5 , lineHeight : 30}}>
                            {
                                movie.Actors
                            }
                        </Text>
                        <Text style={{marginTop : 20  , fontSize : 20}}>
                            Writers
                       </Text>
                       
                       <Text style={{marginTop : 10 , color : "#757575" , fontSize : 15}}>
                            {movie.Writer}
                       </Text>
                    </View>

        
                    <View style={{padding : 20}}>
                        <Text style={{fontSize : 20}}>Ratings</Text>
                            {
                                Rating.map(eachRating=>{
                                    return(
                                        <View>
                                           <Text style={{color:"#757575" , marginTop : 10 , fontSize : 15}}>{eachRating.Source} - {eachRating.Value}</Text>
                                        </View>
                                    )
                                })
                            }


                       <Text style={{marginTop : 20  , fontSize : 20}}>
                            Released Year
                       </Text>
                       
                       <Text style={{marginTop : 10 , color : "#757575" , fontSize : 15}}>
                            {movie.Released}
                       </Text>

                       <Text style={{marginTop : 20  , fontSize : 20}}>
                            Run Time
                       </Text>
                       
                       <Text style={{marginTop : 10 , color : "#757575" , fontSize : 15}}>
                            {movie.Runtime}
                       </Text>


                       <Text style={{marginTop : 20  , fontSize : 20}}>
                            Box Office
                       </Text>
                       
                       <Text style={{marginTop : 10 , color : "#757575" , fontSize : 15}}>
                            {movie.BoxOffice}
                       </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }else{
        return(
            <View>
                <Spinner />
                <Text style={{fontSize: 20 , textAlign : "center"}}>
                   Loading ...
                </Text>
            </View>
        )
    }
}

export default Details;