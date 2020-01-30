import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './home/Home';
import Search from '../search/search';
import { Footer, FooterTab,  Button, Icon } from 'native-base';
import {Text, StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import Details from '../search/fullMovie'

const BottomStackNavigator = createBottomTabNavigator({
    Home : {screen : Home},
    Search : {screen : Search},
    Details : {screen : Details}
},{
    initialRouteName : "Home",
    lazy : true,
    tabBarOptions :{
        activeTintColor : "red",
        activeBackgroundColor : "#e6891d"
    },
    tabBarComponent : props =>{
        return(
            <Footer>
                <FooterTab style={style.footer}>
                    <Button onPress={()=>props.navigation.navigate("Home")}>
                        <Icon name="home"/>
                        <Text>Home</Text>
                    </Button>
                    <Button onPress={()=>props.navigation.navigate("Search")}>
                        <Icon name="search"/>
                        <Text>Search</Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
})

const style =  StyleSheet.create({
    footer : {
        backgroundColor : '#f5f5f5',
        elevation : 3
    }
})

export default createAppContainer(BottomStackNavigator);