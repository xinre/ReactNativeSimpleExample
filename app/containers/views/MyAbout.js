import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

export default class MyAbout extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Image source={require('../../../public/image/1.png')} style={styles.img}></Image>
                <Text style={styles.textcss}>话题1.0.0</Text>
                <Text style={styles.textcss2}>每日提供有趣的话题。</Text>
                <Text style={styles.textcss3}>
                    作者:唐 h y
                </Text>
                <Text style={styles.textcss3}>
                    开发地址:内蒙，现住天津,
                </Text>
                <Text style={styles.textcss4}>
                    简介：数据均来自干货集中营。
                </Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#F5FCFF'
    },
    img:{
        width:100,
        height:100,
        marginTop:30
    },
    textcss:{
        marginTop:1,
        color:'#999999',
        fontSize:14
    },
    textcss2:{
        marginTop:10,
        color:'#4F4F4F',
        fontSize:18,
        marginBottom:10
    },
    textcss3:{
        color:'#4F4F4F',
        fontSize:15,
        marginBottom:5
    },
    textcss4:{
        color:'#4F4F4F',
        fontSize:15,
        width:250,
        marginTop:20,
    }
});
