import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button
} from 'react-native';
import Newlists from './Newlist';

export default class HomeScreen extends Component{
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <Newlists category = 'Android' navigate={navigate} />
            </View>
        )
    };
}

const styles=StyleSheet.create({
   container:{
       flex:1,
       backgroundColor: '#fff',
   },
});