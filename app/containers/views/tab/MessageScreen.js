import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button,
    TextInput
} from 'react-native';

export default class MessageScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TextInput
                  style={styles.textcss}
                  placeholder="请写下你的宝贵意见"
                  placeholderTextColor="#aaaaaa"
                  underlineColorAndroid="transparent"
                />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    textcss:{
        fontSize:17,
        flex:1,
        padding:15,
        textAlignVertical:'top',
        color:"#515151"
    }
});
