import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button
} from 'react-native';
import Newlists from './Newlist';

export default class SeekScreen extends Component{
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <Newlists category = 'iOS' navigate={navigate} />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#fff',
    },
    shows:{
        fontSize:20,
    }
});
